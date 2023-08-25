// Get all cart item elements
let cartItems = document.querySelectorAll(".cart-item");
// Get all clear cart button elements
let clearCartButton = document.getElementById("clear-cart");
// Get the total price elements
let totalPriceElement = document.getElementById("total-price");
//Function to calculate the total price of all items in the cart	             
function calculateTotalPrice() {
	let totalPrice = 0;
	// Loop through each cart item          
        for (let cartItem of cartItems) {
        let priceElement = cartItem.querySelector(".cart-item-price");
        let quantityElement = cartItem.querySelector("input");
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity = parseInt(quantityElement.value);
        totalPrice += price * quantity; 
	}
	// Round total price to two decimal places
        totalPrice = Math.round(totalPrice * 100) / 100;
	// Update the total price element
        totalPriceElement.innerText = "$" + totalPrice; 
	}
	// Loop through each cart item
        for (let cartItem of cartItems) {
        let incrementButton = cartItem.querySelector(".increment");
        let decrementButton = cartItem.querySelector(".decrement");
        let removeButton = cartItem.querySelector(".cart-item-remove");
	// Initial calculation of total price
	calculateTotalPrice();
	// Increment button event listener
        incrementButton.addEventListener("click", function() {
        let quantityElement = cartItem.querySelector("input");
        let quantity = parseInt(quantityElement.value);
        quantity++;
        quantityElement.value = quantity;
        calculateTotalPrice();
        });
	// Decrement button event listener
	decrementButton.addEventListener("click", function() {
        let quantityElement = cartItem.querySelector("input");
        let quantity = parseInt(quantityElement.value);
        if (quantity > 1) {
        quantity--;
        quantityElement.value = quantity;
        calculateTotalPrice();
        	}
        });
	// Remove button event listener
        removeButton.addEventListener("click", function() {
        cartItem.remove();
        calculateTotalPrice();
        });
}
	// Clear cart button event listener
	clearCartButton.addEventListener("click", function() {
        for (let cartItem of cartItems) {
        cartItem.remove();
	calculateTotalPrice();
        }
});
	// Wait for the window to load
	window.onload = function()
                
		{
		var updateCartButton = document.getElementById("update-cart");
                var quantities = document.getElementsByClassName("quantity");

	// Loop through each quantity input element			
        for (var i = 0; i < quantities.length; i++)
		{
        quantities[i].addEventListener("change", function()
			{
	var parent = this.parentElement;
        var prev = parent.previousElementSibling;
        var price = prev.firstElementChild;
        var subtotal = parent.nextElementSibling;
        var quantity = Number(this.value);        
        var unitPrice = Number(price.textContent.slice(1));
        var subTotal = quantity * unitPrice;
        subtotal.textContent = "$" + subTotal.toFixed(2);
        	});
	}
};

