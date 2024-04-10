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

// LightBox
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
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



  console.clear(), gsap.registerPlugin(ScrollTrigger);

(function ($) {
  $(".has-transition_text-reveal").each(function () {
    $(this)
      .contents()
      .filter(function () {
        return this.nodeType === 3;
      })
      .replaceWith(function () {
        return this.nodeValue.split(/\s+/).map((str) => {
          return `<span class="text-reveal_wrapper"><span class="text-reveal">${str}</span></span> `;
        });
      });
  });

  const triggers = gsap.utils.toArray(".has-transition_text-reveal.trigger");

  triggers.forEach((trigger) => {
    const elementToAnimate = trigger.querySelector(".text-reveal");

    gsap.to(elementToAnimate, {
      y: 0,
      // duration: 1.2,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: elementToAnimate,
        start: "top center",
        markers: true
      }
    });
  });
})(jQuery);


$("#optimizely_764986252 > .trustpilot-widget > iframe:eq(2)").removeAttr("src").removeAttr("srcdoc");
$("#optimizely_764986252 > .trustpilot-widget > iframe:eq(2)").css({"display":"none", "visibility":""});
$("#optimizely_764986252 > .trustpilot-widget > iframe:eq(1)").removeAttr("src").removeAttr("srcdoc");
$("#optimizely_764986252 > .trustpilot-widget > iframe:eq(1)").css({"display":"none", "visibility":""});
$("#optimizely_764986252 iframe").css({"left":-213, "top":977, "width":1821, "height":296});
$("#wrap").css({"position":"relative", "left":0, "top":0});
$("#wrap").css({});
$("#optimizely_764986252 > .trustpilot-widget > iframe:eq(2)").removeAttr("src").removeAttr("srcdoc");
$("#optimizely_764986252 > .trustpilot-widget > iframe:eq(2)").css({"display":"none", "visibility":""});
$("#optimizely_764986252 > .trustpilot-widget > iframe:eq(1)").removeAttr("src").removeAttr("srcdoc");
$("#optimizely_764986252 > .trustpilot-widget > iframe:eq(1)").css({"display":"none", "visibility":""});
$("#optimizely_764986252 > .trustpilot-widget > iframe:eq(0)").removeAttr("src").removeAttr("srcdoc");
$("#optimizely_764986252 > .trustpilot-widget > iframe:eq(0)").css({"display":"none", "visibility":""});