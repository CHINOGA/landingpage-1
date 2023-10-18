// script.js
function myFunction() {
  // Add any JavaScript code here
}

document.addEventListener("DOMContentLoaded", myFunction);
// script.js
// Self-invoking function to prevent global scope pollution
(function(){
  // Use 'use strict' to make code more robust and manageable
  'use strict';

  /**
   * This is the main function where most logic for the website resides
   */
  const myFunction = () => {
    // Add any JavaScript code here
    // Example:
    // Set up an event listener for a hypothetical button which does something when clicked
    const someButton = document.getElementById('someButton');
    if(someButton) {
      someButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("Button is clicked!");
      });
    }
  }
  // Wait until document has fully loaded, then run myFunction
  window.addEventListener("DOMContentLoaded", myFunction);
})();
// Disabling right click event
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
// Disabling selection
document.onselectstart = function() {
  return false;
};

const backToTopButton = document.createElement('button');
backToTopButton.className = 'fa fa-arrow-up';
backToTopButton.innerHTML = '';
backToTopButton.id = 'backToTop';
backToTopButton.style.display= 'none';
document.body.appendChild(backToTopButton);

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}

document.getElementById('backToTop').addEventListener("click", function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

