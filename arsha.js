// Show loader when page starts loading
window.addEventListener("load", function () {
  var loader = document.getElementById("loader-wrapper");
  loader.style.display = "none";
});

// Show loader when navigating to another page within the website
document.addEventListener("DOMContentLoaded", function () {
  var loader = document.getElementById("loader-wrapper");
  loader.style.display = "block";
});
