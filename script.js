// Global Order Array
let currentOrder = [];

// Adds the selected coffee to the cart
function addToOrder(coffeeName) {
    currentOrder.push(coffeeName);
    updateCartDisplay();
}

// Updates the text inside the cart box
function updateCartDisplay() {
    const statusText = document.getElementById("cart-status");
    if(statusText) {
        if(currentOrder.length > 0) {
            statusText.innerHTML = `Excellent choices: <span style="color:#d4af37; font-weight:bold;">${currentOrder.join(", ")}</span>`;
        } else {
            statusText.innerHTML = `No coffees selected yet. Don't be shy!`;
        }
    }
}

// Triggers when they click "Confirm & Place Order"
function checkoutOrder() {
    if(currentOrder.length === 0) {
        alert("Your cart is aggressively empty. Please select a beverage before testing our system.");
    } else {
        // Show the sarcastic success modal
        const modal = document.getElementById("successModal");
        if(modal) {
            modal.classList.add("active");
        }
    }
}

// Closes the modal and resets the cart for the next order
function closeModal() {
    const modal = document.getElementById("successModal");
    if(modal) {
        modal.classList.remove("active");
    }
    
    // Wipe the cart clean
    currentOrder = [];
    updateCartDisplay();
}