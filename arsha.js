// loader
window.addEventListener("load", () => {
  var loader = document.getElementById("preloader");
  loader.style.display = "none";
});

// Function to toggle the icon

// filtering in the portfolio
document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const buttons = document.querySelectorAll(".filters button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons and then add to the clicked one
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Get the filter value from data-filter attribute
      const filterValue = button.getAttribute("data-filter");
      console.log("Filter value:", filterValue);

      // Loop through all portfolio items to show or hide them
      portfolioItems.forEach((item) => {
        if (filterValue === "*" || item.classList.contains(filterValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

//
