//navbar 
let open = document.querySelector('.navbar--icon');
let menu = document.querySelector('.nav--open');
let close = document.querySelector('.nav--open-icon');

open.addEventListener('click', function() {
  menu.classList.toggle('close');
});

close.addEventListener('click', function() {
  menu.classList.toggle('close');
});
//navbar end

//button to top
let mybutton = document.getElementById("myBtn");
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
//button end