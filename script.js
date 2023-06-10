// // Array to store the cart items
let cartItems = [];

// Function to buy a product
function buyProduct(productName) {
  // Perform logic for purchasing the product
  console.log(`Buying ${productName}...`);
}

// Function to add a product to the cart
function addToCart(productName) {
  // Check if the product is already in the cart
  const productInCart = cartItems.find(item => item.name === productName);

  if (productInCart) {
    // Increment the quantity if the product is already in the cart
    productInCart.quantity++;
  } else {
    // Add the product to the cart with a quantity of 1
    cartItems.push({ name: productName, quantity: 1 });
  }

  // Update the cart display
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  // Clear the existing cart items
  cartItemsElement.innerHTML = "";

  // Iterate through the cart items and display them
  cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} x ${item.quantity}`;
    cartItemsElement.appendChild(listItem);
  });

  // Calculate and display the total price
  const totalPrice = calculateTotalPrice();
  cartTotalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to calculate the total price of the cart items
function calculateTotalPrice() {
  let totalPrice = 0;

  cartItems.forEach(item => {
    // Perform logic to calculate the price of each item (e.g., retrieve price from a database)
    let itemPrice = 0;

    switch (item.name) {
      case "Product 1":
        itemPrice = 19.99;
        break;
      case "Product 2":
        itemPrice = 29.99;
        break;
      case "Product 3":
        itemPrice = 39.99;
        break;
      case "Product 4":
        itemPrice = 49.99;
        break;
      // Add cases for more products as needed
    }

    // Calculate the price for the quantity of the item
    const itemTotalPrice = itemPrice * item.quantity;

    // Add the item price to the total price
    totalPrice += itemTotalPrice;
  });

  return totalPrice;
}

// Function to handle the checkout process
function checkout() {
  // Perform logic for the checkout process
  console.log("Checkout process initiated!");
}

// Add event listener to the checkout button
const checkoutButton = document.getElementById("checkout-btn");
checkoutButton.addEventListener("click", checkout);
