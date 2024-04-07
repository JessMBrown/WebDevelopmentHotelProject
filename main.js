// NavBar
let open = document.querySelector('.navbar--icon');
let menu = document.querySelector('.nav--open');
let close = document.querySelector('.nav--open-icon');


open.addEventListener('click', function() {
    menu.classList.toggle('close');
    });


close.addEventListener('click', function() {
    menu.classList.toggle('close');
    });

// Scrolling hero images
// startImageTransition();
        
//         function startImageTransition() {
//             // Add the pictures to a variable named images for use in the loop below by selecting it by it's class name

//             var images = document.getElementsByClassName("scrolling-images");

//             // Use the image thats currently assigned to the variable and add it to an Array, and set its opacity to be 1

//             for (var i = 0; i < images.length; ++i) {
//                 images[i].style.opacity = 1;
//             }
        
//             var top = 1;
        
//             var cur = images.length - 1;
        
//             // Set the time each image is displayed to be 3 seconds
            
//             setInterval(changeImage, 3000);
        
//             async function changeImage() {
        
//                 var nextImage = (1 + cur) % images.length;
        
//                 images[cur].style.zIndex = top + 1;
//                 images[nextImage].style.zIndex = top;
        
//                 await transition();
        
//                 images[cur].style.zIndex = top;
        
//                 images[nextImage].style.zIndex = top + 1;
        
//                 top = top + 1;
        
//                 images[cur].style.opacity = 1;
              
//                 cur = nextImage;
        
//             }
        
//             function transition() {
//                 return new Promise(function(resolve, reject) {
//                     var del = 0.01;
        
//                     var id = setInterval(changeOpacity, 10);
        
//                     function changeOpacity() {
//                         images[cur].style.opacity -= del;
//                         if (images[cur].style.opacity <= 0) {
//                             clearInterval(id);
//                             resolve();
//                         }
//                     }
//                 })
//             }
//         }
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("scrolling-hero-images");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}