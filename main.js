// Task 2: Add Event Listeners for Product Selection

const priceDisplay = document.getElementById('product-price');
const sizeSelect = document.getElementById('product-size');

sizeSelect.addEventListener('change', function () {
    const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
    const newPrice = selectedOption.getAttribute('data-price');

    priceDisplay.textContent = `$${newPrice}.00`;
});