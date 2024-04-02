startImageTransition();
        
        function startImageTransition() {
            // Add the pictures to a variable named images for use in the loop below by selecting it by it's class name

            var images = document.getElementsByClassName("scrolling-images");

            // Use the image thats currently assigned to the variable and add it to an Array, and set its opacity to be 1

            for (var i = 0; i < images.length; ++i) {
                images[i].style.opacity = 1;
            }
        
            var top = 1;
        
            var cur = images.length - 1;
        
            // Set the time each image is displayed to be 3 seconds
            
            setInterval(changeImage, 3000);
        
            async function changeImage() {
        
                var nextImage = (1 + cur) % images.length;
        
                images[cur].style.zIndex = top + 1;
                images[nextImage].style.zIndex = top;
        
                await transition();
        
                images[cur].style.zIndex = top;
        
                images[nextImage].style.zIndex = top + 1;
        
                top = top + 1;
        
                images[cur].style.opacity = 1;
              
                cur = nextImage;
        
            }
        
            function transition() {
                return new Promise(function(resolve, reject) {
                    var del = 0.01;
        
                    var id = setInterval(changeOpacity, 10);
        
                    function changeOpacity() {
                        images[cur].style.opacity -= del;
                        if (images[cur].style.opacity <= 0) {
                            clearInterval(id);
                            resolve();
                        }
                    }
                })
            }
        }

        // NavBar
let open = document.querySelector('.navbar--icon');
let menu = document.querySelector('.nav--open');
let close = document.querySelector('.nav--open-icon');


open.addEventListener('click', function() {
  menu.classList.toggle('close');
});


close.addEventListener('click', function() {
  menu.classList.toggle('close');
})

// Book now menu

let openbooking = document.querySelector('.booking--icon');
let menubooking = document.querySelector('.booking--open');
let closebooking = document.querySelector('.booking--open-icon');

openbooking.addEventListener('click', function() {
    menubooking.classList.toggle('close');
  });
  
  
  closebooking.addEventListener('click', function() {
    menubooking.classList.toggle('close');
  })


  
  <script>
{/* Open the Modal */}
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

{/* // Close the Modal */}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

{/* // Next/previous controls */}
function plusSlides(n) {
  showSlides(slideIndex += n);
}

{/* // Thumbnail image controls */}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

</script>