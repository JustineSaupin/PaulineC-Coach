// When the user scrolls the page, execute myFunction
window.onscroll = function() {myNavbar()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// BURGER MENU :

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function displayMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// Slider Testimonials

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:3,
      autoplay:true,
      margin:30,
      loop:true,
      dots:true
      // nav:true,
//      navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>" ]
  });
});
