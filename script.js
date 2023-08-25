	var cartContainer = document.querySelector(“.cart-container”); 
	var cartItems = document.querySelectorAll(“.cart-item”); 
	var clearCartButton = document.getElementById(“clear-cart”); 
	var checkoutButton = document.getElementById(“check out”); 
	var subtotalElement = document.querySelector(“.cart-item-subtotal”);

	function calculateTotalPrice() { var totalPrice = 0; 

	for (var i = 0; i < cartItems.length; i++) { var cartItem = cartItems[i]; 
	var priceElement = cartItem.querySelector(“.cart-item-price”); 
	var quantityElement = cartItem.querySelector(“.quantity”); 
						    
	var price = parseFloat(priceElement.innerText.replace(“$”, “”)); 
	var quantity = parseInt(quantityElement.value); 
						    
	totalPrice += price * quantity; } 
					
	return totalPrice.toFixed(2); }

	function updateSubtotal() { var totalPrice = calculateTotalPrice();
	subtotalElement.innerText = “$” + totalPrice; }

	function removeCartItem(event) { 
		
	var buttonClicked = event.target; 
		
	var cartItem = buttonClicked.parentElement; 
		
	cartContainer.removeChild(cartItem); 
		
	updateSubtotal(); }

	function clearCart() { 

	for (var i = 0; i < cartItems.length; i++) { var cartItem = cartItems[i];
	cartContainer.removeChild(cartItem); } 
		
	updateSubtotal(); }

	clearCartButton.addEventListener(“click”, clearCart);

	for (var i = 0; i < cartItems.length; i++) { var cartItem = cartItems[i];
	var removeButton = cartItem.querySelector(“.cart-item-remove”);
	removeButton.addEventListener(“click”, removeCartItem); }

	for (var i = 0; i < cartItems.length; i++) { var cartItem = cartItems[i];
	var quantityInput = cartItem.querySelector(“.quantity”); 
	quantityInput.addEventListener(“change”, updateSubtotal); }

	updateSubtotal();
