// // Show loader when page starts loading
// window.addEventListener("load", function () {
//   var loader = document.getElementById("loader-wrapper");
//   loader.style.display = "none";
// });

// // Show loader when navigating to another page within the website
// document.addEventListener("DOMContentLoaded", function () {
//   var loader = document.getElementById("loader-wrapper");
//   loader.style.display = "block";
// });
// Function to toggle the icon
function toggleIcon() {
  var icon = document.querySelector(".navbar-toggler .toggler-icon i");
  // Toggle between menu and cancel icons
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars", "fa-solid");
    icon.classList.add("fa-solid", "fa-xmark-large");
  } else {
    icon.classList.remove("fa-solid", "fa-xmark-large");
    icon.classList.add("fa-bars", "fa-solid");
  }
}
