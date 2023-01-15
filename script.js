////////////////////TO THE TOP BUTTON/////////////////////////////////

mybutton = document.getElementById("to_the_top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/////////////////////////REGISTRATION ICON/////////////////////////////////////

var reg = document.querySelector('.fa-circle-user');
var regForm = document.querySelector('.regForm');
reg.addEventListener('click', function () {
  regForm.classList.toggle('show_form');
})


//////////////////////BURGER///////////////////////////////////

const btn = document.querySelector('.header_nav_burger');
const menu = document.querySelector('.nav_menu');
btn.addEventListener('click', function () {
  menu.classList.toggle('visible')
})

////////////////////////////VIDEO LINK////////////////////////////////////


var blockBtn = document.querySelector('.block_button');
blockBtn.addEventListener('click', function () {
  location.href = "https://www.youtube.com/watch?v=8Z1eMy2FoX4"
})
