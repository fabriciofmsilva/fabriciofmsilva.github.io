(function() {
  'use strict';

  var comments = [{
    name: 'Hodor',
    email: 'hodor@winterfell.com',
    text: 'Hodor! Hodor! Hodor! Hodor! Hodor!',
    avatar: 'content/images/hodor.jpg'
  }, {
    name: 'Ned Stark',
    email: 'ned.stark@winterfell.com',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, provident ex! Quia doloremque dignissimos fuga tempore adipisci earum, quam asperiores.',
    avatar: 'content/images/comment2.jpg'
  }, {
    name: 'Sansa Stark',
    email: 'sansa.stark@winterfell.com',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam earum quasi incidunt! Quasi harum quod ipsa? Facilis quasi illum dolor velit, doloribus sed perspiciatis fugit, nemo laudantium quod vitae, enim?',
    avatar: 'content/images/comment1.jpg'
  }];

  function onLoad() {
    var elForm = document.getElementById('form');
    elForm.addEventListener('submit', onSubmit, false);

    if (window.localStorage) {
      console.info('initialized localStorage');
      if (localStorage.getItem('comments')) {
        comments = JSON.parse(localStorage.getItem('comments'));
        console.info('get comments: ' + JSON.stringify(comments));
      } else {
        localStorage.setItem('comments', JSON.stringify(comments));
        console.info('save comments: ' + JSON.stringify(comments));
      }
    }

    _renderComments(comments);
  }

  function _renderComments(comments) {
    var elComments = document.getElementById('comments');
    elComments.innerHTML = '';

    comments.forEach(function addComment(comment) {
      elComments.innerHTML += '<article class="comment"><img src="' + comment.avatar + '" alt="Autor"><h3>' + comment.name + '</h3><p>' + comment.text + '</p></article>';
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    var elComment = document.getElementById('comment');
    var elName = document.getElementById('name');
    var elEmail = document.getElementById('email');
    var error = document.getElementById('error');

    var comment = {};

    elComment.classList.remove('has-error');
    elName.classList.remove('has-error');
    elEmail.classList.remove('has-error');
    error.innerHTML = '';

    if (elComment.value.trim() === '') {
      elComment.classList.add('has-error');
      error.innerHTML = 'O comentário não pode ser vazio';
      return false;
    }

    if (elComment.value.trim().length < 10) {
      elComment.classList.add('has-error');
      error.innerHTML = 'O comentário deve ter mais que 10 caracteres';
      return false;
    }

    if (elName.value.trim() === '') {
      elName.classList.add('has-error');
      error.innerHTML = 'O nome não pode ser vazio';
      return false;
    }

    if (elEmail.value.trim() === '') {
      elEmail.classList.add('has-error');
      error.innerHTML = 'O e-mail não pode ser vazio';
      return false;
    }

    if (!_isValidEmail(elEmail.value)) {
      elEmail.classList.add('has-error');
      error.innerHTML = 'O e-mail está inválido';
      return false;
    }

    comment.text = elComment.value.trim();
    comment.name = elName.value.trim();
    comment.email = elEmail.value.trim();
    comment.avatar = 'content/images/guest.jpg';

    _saveComment(comment);
    _renderComments(comments);

    elComment.value = '';
    elName.value = '';
    elEmail.value = '';
  }

  function _isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function _saveComment(comment) {
    comments.unshift(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    console.info('save comments: ' + JSON.stringify(comments));
  }

  window.addEventListener('load', onLoad, false);
})();
