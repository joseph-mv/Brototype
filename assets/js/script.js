const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const tab = document.getElementById('tab');

menuButton.addEventListener('click', function () {
  tab.classList.add('open');
  menuButton.style.display = 'none';
  closeButton.style.display = 'block';
});

closeButton.addEventListener('click', function () {
  tab.classList.remove('open');
  menuButton.style.display = 'block';
  closeButton.style.display = 'none';
});

function toggleMenu() {
  var body = document.getElementById('body')
  //   var body = document.querySelector('body');
  body.classList.toggle('blur'); // Toggle the blur class on the body
}
function toggleContent() {
  var content = document.getElementById("content");
  var btn = document.getElementById("load-more-btn");

  if (content.style.display === "none") {
    content.style.display = "block";
    btn.textContent = "Load Less";
  } else {
    content.style.display = "none";
    btn.textContent = "Load More";
  }
}

// <!--phoneInput-->


var input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "IN", // Set India as default
  separateDialCode: true, // Display country code and number separately
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // Required for formatting & validation 
});

// Optional: Handle basic validation
const phoneInput = document.getElementById('phone');
const errorMessage = document.getElementById('phone-error');
phoneInput.addEventListener('blur', () => {
  if (!phoneInput.value) {
    errorMessage.textContent = "Please enter a phone number.";
  } else {
    errorMessage.textContent = "";
  }
});




