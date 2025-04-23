function scrollToFeaturedProducts() {
    const featuredProductsSection = document.getElementById('featured-products');
    const headerHeight = document.querySelector('header').offsetHeight;
    const sectionTop = featuredProductsSection.getBoundingClientRect().top + window.scrollY;
    const scrollToPosition = sectionTop - headerHeight;

    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
    });
}

function openPopup(title, price, description, image) {
    document.getElementById('product-title').innerText = title;
    document.getElementById('product-price').innerText = price;
    document.getElementById('product-description').innerText = description;
    document.getElementById('popup-image').src = image;
    document.getElementById('product-popup').style.display = 'flex';
    document.body.classList.add('no-scroll');
}

function closePopup() {
    document.getElementById('product-popup').style.display = 'none';
    document.body.classList.remove('no-scroll');
}
function changeQuantity(amount) {
    const quantityInput = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity += amount;
    if (currentQuantity < 1) currentQuantity = 1;
    quantityInput.value = currentQuantity;
}
window.onclick = function (event) {
    const popup = document.getElementById('product-popup');
    const popupContent = document.querySelector('.popup-content');
    if (event.target === popup) {
        closePopup();
    }
}


function updateQty(button, change) {
    const qtyInput = button.parentElement.querySelector('.qty-input');
    let qty = parseInt(qtyInput.value);
    qty += change;
    if (qty < 1) qty = 1;
    qtyInput.value = qty;

    const row = button.closest('.cart-row');
    const priceText = row.querySelector('.unit-price').innerText.replace(/[^\d]/g, '');
    const price = parseInt(priceText);
    const subtotal = row.querySelector('.subtotal');
    subtotal.innerText = '₹' + (qty * price);
};