/* This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {}

// Add item to cart
function addToCart(productId) {}

// Remove item from cart
function removeFromCart(productId) {}

// Clear cart
function clearCart() {}

// Initial render
renderProducts();
renderCart();



const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 }
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Cart data
let cartItems = [];

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
  cartList.innerHTML = "";
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price} <button class="remove-from-cart-btn" data-id="${item.id}">Remove</button>`;
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product) {
    cartItems.push(product);
    updateCartInSessionStorage();
    renderCart();
  }
}

// Remove item from cart
function removeFromCart(productId) {
  const index = cartItems.findIndex((item) => item.id === productId);
  if (index !== -1) {
    cartItems.splice(index, 1);
    updateCartInSessionStorage();
    renderCart();
  }
}

// Clear cart
function clearCart() {
  cartItems = [];
  updateCartInSessionStorage();
  renderCart();
}
// JSON.parse("")
// Update cart data in session storage
function updateCartInSessionStorage() {
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Get cart data from session storage
function getCartFromSessionStorage() {
  const cartData = sessionStorage.getItem("cartItems");
  if (cartData) {
    cartItems = JSON.parse(cartData);
  }
}
// document.querySelectorAll(".add-to-cart-btn").addEventListener();

// Add event listeners
productList.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target.classList.contains("add-to-cart-btn")) {
    const productId = parseInt(event.target.getAttribute("data-id"));
    addToCart(productId);
  }
});

cartList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-from-cart-btn")) {
    const productId = parseInt(event.target.getAttribute("data-id"));
    removeFromCart(productId);
  }
});

clearCartBtn.addEventListener("click", clearCart);

// Initial render
renderProducts();
getCartFromSessionStorage();
renderCart();

// sessionStorage.setItem()
*/
 const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Get cart data from session storage or initialize it
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((cartItem) => {
    const li = document.createElement("li");
    li.innerHTML = `${cartItem.name} - $${cartItem.price} <button class="remove-from-cart-btn" data-id="${cartItem.id}">Remove from Cart</button>`;
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
  const productToAdd = products.find((product) => product.id === productId);
  if (productToAdd) {
    cart.push(productToAdd);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((cartItem) => cartItem.id !== productId);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Clear cart
function clearCart() {
  cart = [];
  sessionStorage.removeItem("cart");
  renderCart();
}

// Event listeners
productList.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart-btn")) {
    const productId = parseInt(event.target.getAttribute("data-id"));
    addToCart(productId);
  }
});

cartList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-from-cart-btn")) {
    const productId = parseInt(event.target.getAttribute("data-id"));
    removeFromCart(productId);
  }
});

clearCartBtn.addEventListener("click", clearCart);

// Initial render
renderProducts();
renderCart();

