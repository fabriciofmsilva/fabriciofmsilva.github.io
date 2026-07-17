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
  }

  toggle.addEventListener('click', function () {
    var next = STATES[(STATES.indexOf(current()) + 1) % STATES.length];
    apply(next);
  });

  render(current());
})();
