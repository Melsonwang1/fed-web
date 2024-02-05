// Smooth scrolling to top function 
function scrollingTOP() {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    });
  }

  // Show or hide the scroll to top button based on scroll position
  document.addEventListener("scroll", function () {
    const scrollToTopBtn = document.getElementById("back-to-top-btn");
    if (scrollToTopBtn) {
        // Using if-else loop to check whether the scrolling position is more than 100px from the top of the page
        if (document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block"; // if true, display the button
        } else {
            scrollToTopBtn.style.display = "none"; // if false, hide the button
        }
    }
  });

  // Hamburger Menu (for smaller view size)
  document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("hamburger-menu");
    const navbar = document.querySelector("header .navbar");
  
    // Toggle navbar visibility when menu icon is clicked
    menuIcon.addEventListener("click", function() {
      navbar.classList.toggle("nav-toggle");
      menuIcon.classList.toggle("fa-bars");
      menuIcon.classList.toggle("fa-times");
    });
  });

  // Loading Animation
  document.addEventListener('DOMContentLoaded', function() {
    var loadings = document.getElementsByClassName('loading');

    // use a For loop to loop through each element
    for (var i = 0; i < loadings.length; i++) {
        var preloading = loadings[i];
        preloading.classList.toggle('active'); // to show or hide the animation
    }

    setTimeout(function() {
        for (var i = 0; i < loadings.length; i++) {
            loadings[i].classList.toggle('active');
        }
    }, 3000); // Show content after 3 seconds
  });


