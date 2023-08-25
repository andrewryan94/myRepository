	let cartItems = document.querySelectorAll(".cart-item");
                let clearCartButton = document.getElementById("clear-cart");
                let totalPriceElement = document.getElementById("total-price");
	             
                function calculateTotalPrice() {
                    let totalPrice = 0;
                  
                    for (let cartItem of cartItems) {
                        let priceElement = cartItem.querySelector(".cart-item-price");
                        let quantityElement = cartItem.querySelector("input");
                        let price = parseFloat(priceElement.innerText.replace("$", ""));
                        let quantity = parseInt(quantityElement.value);
                        totalPrice += price * quantity; 
                    }

                  
                    totalPrice = Math.round(totalPrice * 100) / 100;

                   
                    totalPriceElement.innerText = "$" + totalPrice; 
                }

              
                for (let cartItem of cartItems) {
                    let incrementButton = cartItem.querySelector(".increment");
                    let decrementButton = cartItem.querySelector(".decrement");
                    let removeButton = cartItem.querySelector(".cart-item-remove");
			calculateTotalPrice();

                   
                    incrementButton.addEventListener("click", function() {
                        let quantityElement = cartItem.querySelector("input");
                        let quantity = parseInt(quantityElement.value);
                        quantity++;
                        quantityElement.value = quantity;
                        calculateTotalPrice();
                    });

                  
                    decrementButton.addEventListener("click", function() {
                        let quantityElement = cartItem.querySelector("input");
                        let quantity = parseInt(quantityElement.value);
                        if (quantity > 1) {
                            quantity--;
                            quantityElement.value = quantity;
                            calculateTotalPrice();
                        }
                    });

                
                removeButton.addEventListener("click", function() {
                        cartItem.remove();
                        calculateTotalPrice();
                    });
                }

		clearCartButton.addEventListener("click", function() {
                    for (let cartItem of cartItems) {
                        cartItem.remove();
			calculateTotalPrice();
                    }
                 
                });

		window.onload = function()
                
		{
		var updateCartButton = document.getElementById("update-cart");
                var quantities = document.getElementsByClassName("quantity");

					
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

