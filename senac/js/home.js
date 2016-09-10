(function() {
  'use strict';

  function onLoad() {
    var commentsCount = 3;
    var elComments = document.querySelectorAll('.comments');

    if (window.localStorage) {
      console.info('initialized localStorage');
      if (localStorage.getItem('comments')) {
        commentsCount = JSON.parse(localStorage.getItem('comments')).length;
        console.info('get comments: ' + commentsCount);
      }
    }

    elComments.forEach(function renderComment(elComment) {
      elComment.innerHTML = commentsCount;
    });
  }

  window.addEventListener('load', onLoad, false);
})();
