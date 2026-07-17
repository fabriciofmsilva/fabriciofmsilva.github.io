// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
  }
}());

// Theme toggle: cycles Sistema -> Claro -> Escuro -> Sistema, persisted in localStorage.
(function () {
  var STATES = ['system', 'light', 'dark'];
  var LABELS = { system: 'Sistema', light: 'Claro', dark: 'Escuro' };
  var toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;

  function current() {
    var stored = localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' ? stored : 'system';
  }

  function render(state) {
    toggle.textContent = LABELS[state];
    toggle.setAttribute('aria-label', 'Tema: ' + LABELS[state] + '. Clique para trocar.');
  }

  function apply(state) {
    if (state === 'system') {
      delete document.documentElement.dataset.theme;
      localStorage.removeItem('theme');
    } else {
      document.documentElement.dataset.theme = state;
      localStorage.setItem('theme', state);
    }
    render(state);
    syncGiscusTheme(state);
  }

  toggle.addEventListener('click', function () {
    var next = STATES[(STATES.indexOf(current()) + 1) % STATES.length];
    apply(next);
  });

  render(current());
})();

// Keeps the giscus comment widget's theme in sync with the site's theme
// toggle. The script tag's data-theme is updated for the next lazy load,
// and postMessage nudges an already-loaded iframe without a full reload.
function syncGiscusTheme(state) {
  var giscusTheme = state === 'dark' ? 'dark' : state === 'light' ? 'light' : 'preferred_color_scheme';
  var script = document.querySelector('script[src="https://giscus.app/client.js"]');
  if (script) script.setAttribute('data-theme', giscusTheme);

  var iframe = document.querySelector('iframe.giscus-frame');
  if (iframe) {
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: giscusTheme } } },
      'https://giscus.app'
    );
  }
}

// Shared clipboard helper: copies text, flashes the button label to confirm.
function copyToClipboard(button, text, doneLabel) {
  var original = button.textContent;
  navigator.clipboard.writeText(text).then(function () {
    button.textContent = doneLabel || 'Copiado!';
    setTimeout(function () {
      button.textContent = original;
    }, 1500);
  });
}

// Copy link: button in the article header copies the post's absolute URL.
(function () {
  var button = document.querySelector('[data-copy-link]');
  if (!button) return;

  button.addEventListener('click', function () {
    copyToClipboard(button, button.dataset.copyLink);
  });
})();

// Copy code: adds a copy button to every rendered code block.
(function () {
  document.querySelectorAll('div.highlight').forEach(function (block) {
    var code = block.querySelector('code');
    if (!code) return;

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-code';
    button.textContent = 'Copiar';
    block.insertBefore(button, block.firstChild);

    button.addEventListener('click', function () {
      copyToClipboard(button, code.innerText);
    });
  });
})();

// Search: Ctrl/Cmd+K opens a modal, filters a client-side JSON index by substring.
(function () {
  var toggle = document.querySelector('[data-search-toggle]');
  var overlay = document.querySelector('[data-search-overlay]');
  if (!toggle || !overlay) return;

  var input = overlay.querySelector('[data-search-input]');
  var resultsEl = overlay.querySelector('[data-search-results]');
  var emptyEl = overlay.querySelector('[data-search-empty]');
  var closeButton = overlay.querySelector('[data-search-close]');
  var index = null;
  var lastFocused = null;

  function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function highlight(text, term) {
    var safe = escapeHtml(text);
    if (!term) return safe;
    var re = new RegExp('(' + escapeRegExp(escapeHtml(term)) + ')', 'ig');
    return safe.replace(re, '<mark>$1</mark>');
  }

  function snippet(content, term) {
    var idx = content.toLowerCase().indexOf(term.toLowerCase());
    if (idx === -1) return content.slice(0, 140);
    var start = Math.max(0, idx - 60);
    return (start > 0 ? '…' : '') + content.slice(start, start + 160) + '…';
  }

  function render(items, term) {
    resultsEl.innerHTML = '';
    emptyEl.hidden = items.length > 0;
    items.forEach(function (item) {
      var li = document.createElement('li');
      li.className = 'recent__item';
      li.innerHTML =
        '<p class="recent__eyebrow">' + escapeHtml(item.category || 'Artigo') + '</p>' +
        '<h3 class="recent__item-title"><a href="' + item.url + '">' + highlight(item.title, term) + '</a></h3>' +
        '<p class="recent__excerpt">' + highlight(snippet(item.content, term), term) + '</p>';
      resultsEl.appendChild(li);
    });
  }

  function filter(term) {
    if (!term) {
      resultsEl.innerHTML = '';
      emptyEl.hidden = true;
      return;
    }
    var lower = term.toLowerCase();
    var titleMatches = [];
    var otherMatches = [];
    index.forEach(function (item) {
      var haystack = (item.title + ' ' + item.category + ' ' + item.content).toLowerCase();
      if (haystack.indexOf(lower) === -1) return;
      if (item.title.toLowerCase().indexOf(lower) !== -1) {
        titleMatches.push(item);
      } else {
        otherMatches.push(item);
      }
    });
    render(titleMatches.concat(otherMatches).slice(0, 20), term);
  }

  function open() {
    lastFocused = document.activeElement;
    overlay.hidden = false;
    input.value = '';
    resultsEl.innerHTML = '';
    emptyEl.hidden = true;
    input.focus();
    if (!index) {
      fetch('/search.json')
        .then(function (response) { return response.json(); })
        .then(function (data) { index = data; });
    }
  }

  function close() {
    overlay.hidden = true;
    if (lastFocused) lastFocused.focus();
  }

  toggle.addEventListener('click', open);
  closeButton.addEventListener('click', close);
  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) close();
  });
  input.addEventListener('input', function () {
    if (index) filter(input.value.trim());
  });
  document.addEventListener('keydown', function (event) {
    var isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
    if (isShortcut) {
      event.preventDefault();
      if (overlay.hidden) {
        open();
      } else {
        close();
      }
    } else if (event.key === 'Escape' && !overlay.hidden) {
      close();
    }
  });
})();
