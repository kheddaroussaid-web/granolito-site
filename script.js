// Granolito Site - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Granolito site loaded successfully!');
    
    // Add smooth scroll effect
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        product.addEventListener('mouseenter', function() {
            this.style.opacity = '0.9';
        });
        
        product.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });
    
    // Log product information
    products.forEach((product, index) => {
        const title = product.querySelector('h2').textContent;
        console.log(`Product ${index + 1}: ${title}`);
    });
});