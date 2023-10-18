// script.js
function myFunction() {
  // Add any JavaScript code here
}

// script.js
function myFunction() {
  // Add any JavaScript code here
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Allow copying only for specific email addresses and phone numbers
document.addEventListener('copy', function(e) {
    const selectedText = window.getSelection().toString();
    const permittedEmail = 'info@chinotrack.com';
    const permittedPhoneNumber = '+255716959578';

    if (selectedText !== permittedEmail && selectedText !== permittedPhoneNumber) {
        e.preventDefault();
    }
});

// Create "Back to Top" button
const backToTopButton = document.createElement('button');
backToTopButton.className = 'fa fa-arrow-up';
backToTopButton.innerHTML = '';
backToTopButton.id = 'backToTop';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

// Handle window scroll
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}

// Handle "Back to Top" button click
document.getElementById('backToTop').addEventListener("click", function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
