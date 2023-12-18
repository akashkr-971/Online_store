document.addEventListener('DOMContentLoaded', function () {
    var products = document.querySelectorAll('.product');
    var cart = document.querySelector('.cart');
    var cartItems = new Map();

    function searchProducts() {
        var input = document.querySelector('.search_bar').value.toLowerCase();
        

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
        if (cart.style.display =='none'){
            cart.style.display = 'flex';
        } else {
            cart.style.display = 'none';
        }
    }

    function addcartItem(event){
        var product = event.target.closest('.product');
        if (product) {
            var productName = product.querySelector('h2').innerText;
            var productPrice = product.querySelector('.price').innerText;
            var productId = product.getAttribute('data-product-id');
            console.log(productName,productPrice,productId);
            
            updateCartUI();
        }
    }
    function updateCartUI(){
        
    }

    document.querySelector('.cart_button').addEventListener('click',Opencart);
    document.querySelector('.search_bar').addEventListener('input', searchProducts);

    document.querySelectorAll('.cart-button').forEach(function(button) {
        button.addEventListener('click', addcartItem);
    });

});