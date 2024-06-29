// JavaScript for Buy Now functionality
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.btn-buy');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert("This product is currently not available."); // Replace with your desired functionality
        });
    });
});
