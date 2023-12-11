document.addEventListener('DOMContentLoaded', function () {

function searchProducts() {
    var input = document.querySelector('.search_bar').value.toLowerCase();
    var products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        var productName = product.querySelector('h2').innerText.toLowerCase();

        if (productName.includes(input)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function Opencart() {
    console.log("clicked");
    var cart = document.querySelector('.cart');
    if (cart.style.display =='none'){
        cart.style.display = 'flex';
    } else {
        cart.style.display = 'none';
    }
}
var cartItems = [];

function addToCart(product) {
    var productId = product.getAttribute('data-product-id');
    var productName = product.querySelector('h2').innerText;
    var productPrice = product.querySelector('.price').innerText;
    var existingItem = cartItems.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({
            productId: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    updateCartUi();
}

function updateCartUi() {
    var cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        var cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
        <p>${item.name}</p>
        <p>${item.price}</p>
        <button class="quantity-button" onclick="decreaseQuantity(${item.productId})">-</button>
        <span>${item.quantity}</span>
        <button class="quantity-button" onclick="increaseQuantity(${item.productId})">+</button>
        <button class="delete-button" onclick="removeFromCart(${item.productId})">Delete</button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });
}

document.querySelector('.cart_button').addEventListener('click',Opencart);
document.querySelector('.search_bar').addEventListener('input', searchProducts);

});