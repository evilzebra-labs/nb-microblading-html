import 'flowbite';

// Add a scroll event listener to the document
const mainNavigation = document.querySelector('.main-navigation');
let isScrolling = false;

document.addEventListener('scroll', function () {
  // Set isScrolling to true
  isScrolling = true;
});

// Debounce the scroll event listener
setInterval(function () {
  // If the user is scrolling
  if (isScrolling) {
    // Reset isScrolling to false
    isScrolling = false;

    // Check the scroll position and add or remove the 'scrolled' class
    const scrolled = window.scrollY;

    if (scrolled >= 1) {
      mainNavigation.classList.add('scrolled');
    } else {
      mainNavigation.classList.remove('scrolled');
    }
  }
}, 100);
