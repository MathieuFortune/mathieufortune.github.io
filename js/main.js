(function () {
  var menu = document.getElementById('menu'),
  toggler = document.getElementById('toggler'),
  body = document.body;

  toggler.onclick = function(e) {
    e.preventDefault();
    this.classList.toggle('active');
    menu.classList.toggle('open');
    body.classList.toggle('menu-open');
  };     
}());