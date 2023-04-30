// Nav hamburgerburger selections



const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");


// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);




// Get the select element
const filterSelect = document.getElementById('filter-select');

// Get all the product items
const productItems = document.querySelectorAll('.product-item');

// Add event listener to select element
filterSelect.addEventListener('change', function() {
  // Get the selected value
  const selectedValue = filterSelect.value;

  // Loop through all the product items
  for (let i = 0; i < productItems.length; i++) {
    // Get the data-category attribute value of the current product item
    let category = productItems[i].getAttribute('data-category');
    let anotherCategory= productItems[i].getAttribute('data-category1');
    // Show or hide the product item based on the selected value
if (selectedValue === 'all' || category.includes(selectedValue) || (anotherCategory && anotherCategory.includes(selectedValue))) {
  productItems[i].style.display = 'block';
} else {
  productItems[i].style.display = 'none';
}

  }
});

//FAQ'S accordion
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const title = item.querySelector('.accordion-title');

  title.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});
