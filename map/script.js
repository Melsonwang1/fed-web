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
    const menuIcon = document.getElementById("menu");
    const navbar = document.querySelector("header .navbar");
  
    // Toggle navbar visibility when menu icon is clicked
    menuIcon.addEventListener("click", function() {
      navbar.classList.toggle("nav-toggle");
      menuIcon.classList.toggle("fa-bars");
      menuIcon.classList.toggle("fa-times");
    });
  });

  // JavaScript to toggle the loading animation
document.addEventListener('DOMContentLoaded', function() {
  // Select the preloading element
  var preloading = document.getElementById('pre-loading-animation');

  // Toggle the 'active' class to show or hide the loading animation
  function toggleLoadingAnimation() {
      preloading.classList.toggle('active');
  }

  // Call toggleLoadingAnimation function to show the loading animation
  toggleLoadingAnimation();

  // Example: Hide the loading animation after 3 seconds (adjust as needed)
  setTimeout(function() {
      toggleLoadingAnimation();
  }, 3000);
});

// for p in .widget-container
document.getElementById(
  'thisYear'
).innerHTML = new Date().getFullYear();
