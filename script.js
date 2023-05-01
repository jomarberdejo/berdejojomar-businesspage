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

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#FF8C00",
      "opacity": 0.4,
      "width": 1.3
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});