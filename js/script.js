// JavaScript for interactive features like cart functionality, navigation, and product interactions

// Cart functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

function removeFromCart(product) {
    const index = cart.indexOf(product);
    if (index > -1) {
        cart.splice(index, 1);
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    // Update the cart UI with current items
    console.log('Cart updated:', cart);
}

// Navigation functionality
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = this.getAttribute('href');
        document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
    });
});

// Product interactions
const products = document.querySelectorAll('.product');
products.forEach(product => {
    product.addEventListener('click', function() {
        const productName = this.dataset.name;
        addToCart(productName);
    });
});
