// Task 2: Add Event Listeners for Product Selection

const priceDisplay = document.getElementById('product-price');
const sizeSelect = document.getElementById('product-size');
// Task 3
const purchaseButton = document.getElementById('purchase-button');


sizeSelect.addEventListener('change', function () {
    const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
    const newPrice = selectedOption.getAttribute('data-price');
    //Task 3
    const stock = selectedOption.getAttribute('data-stock');

    priceDisplay.textContent = `$${newPrice}.00`;

    if (stock > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
});

// Task 3: Handle Stock Availability
// The code for task 3 is added into task 2 at lines 6, 13, and 17-21.


//Task 4: Create a Checkout Event
purchaseButton.addEventListener('click', function () {
    const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
    const stock = selectedOption.getAttribute('data-stock');

    if (stock > 0) {
        alert('Product added to cart successfully!');
    } else {
        alert('Sorry, this product is out of stock.');
    }
});