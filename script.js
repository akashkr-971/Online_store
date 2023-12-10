function searchProducts() {
    var input = document.querySelector('.search_bar').value.toLowerCase();
    var products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        var productName = product.querySelector('h2').innerText.toLowerCase();
        var productId = product.getAttribute('data-product-id');

        if (productName.includes(input)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function Opencart(){
    console.log("clicked");
    var cart = document.querySelector('.cart');
    if(cart.style.display == 'none')
    {
        cart.style.display = 'flex';
    }
    else
    {
        cart.style.display = 'none';
    }
}

document.querySelector('.cart_button').addEventListener('click',Opencart);
document.querySelector('.search_bar').addEventListener('input', searchProducts);