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

document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  // Function to filter portfolio items based on category
  function filterItems(category) {
    portfolioItems.forEach(function (item) {
      if (category === "*" || item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Add click event listeners to filter buttons
  const filterButtons = document.querySelectorAll(".filters li");
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-filter");
      filterItems(category);
    });
  });

  // Add click event listener to close image viewer
  const closeButtons = document.querySelectorAll(".close-btn");
  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const imageViewer = document.querySelector(".image-viewer");
      imageViewer.style.display = "none";
    });
  });

  // Add click event listener to open image viewer
  const imageLinks = document.querySelectorAll(
    ".portfolio-info a[data-gallery]"
  );
  imageLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const imageUrl = this.getAttribute("href");
      const imageViewer = document.querySelector(".image-viewer");
      const imageView = imageViewer.querySelector(".image-view");
      imageView.setAttribute("src", imageUrl);
      imageViewer.style.display = "block";
    });
  });
});
