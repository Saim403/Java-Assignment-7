// JavaScript code to toggle the visibility of the hidden div
const toggleButton = document.getElementById('toggleButton');
const hiddenDiv = document.getElementById('hiddenDiv');

toggleButton.addEventListener('click', function() {
  if (hiddenDiv.style.display === 'none') {
    hiddenDiv.style.display = 'block'; // Show the div
  } else {
    hiddenDiv.style.display = 'none'; // Hide the div
  }
});