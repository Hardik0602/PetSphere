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

function scrollToComingSoon() {
    const comingSoonSection = document.querySelector('.coming-soon-banner');
    const headerHeight = document.querySelector('header').offsetHeight;
    const sectionTop = comingSoonSection.getBoundingClientRect().top + window.scrollY;
    const scrollToPosition = sectionTop - headerHeight;

    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
    });
}

// Scroll to Top Button
const scrollToTop = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTop.classList.add('visible');
    } else {
        scrollToTop.classList.remove('visible');
    }
});

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Popup Animation
function openPopup(title, price, description, image) {
    const popup = document.getElementById('product-popup');
    popup.classList.add('show');
    document.getElementById('product-title').innerText = title;
    document.getElementById('product-price').innerText = price;
    document.getElementById('product-description').innerText = description;
    document.getElementById('popup-image').src = image;
    document.body.classList.add('no-scroll');
}

function closePopup() {
    const popup = document.getElementById('product-popup');
    popup.classList.remove('show');
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

// Countdown Timer
function updateCountdown() {
    // Get the current time
    const now = new Date();
    
    // Get the stored start time from localStorage or set a new one
    let startTime = localStorage.getItem('countdownStartTime');
    if (!startTime) {
        // Set start time to now
        startTime = now.getTime();
        localStorage.setItem('countdownStartTime', startTime);
        console.log('New countdown started at:', new Date(parseInt(startTime)));
    }

    // Calculate elapsed time in milliseconds
    const elapsedTime = now.getTime() - parseInt(startTime);
    
    // Total duration in milliseconds (30 hours)
    const totalDuration = 30 * 60 * 60 * 1000;
    
    // Calculate remaining time
    const remainingTime = Math.max(0, totalDuration - elapsedTime);

    // Calculate time units
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Get the countdown elements
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Update the countdown elements if they exist
    if (hoursElement && minutesElement && secondsElement) {
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    } else {
        console.error('Countdown elements not found!');
    }

    // If the countdown is finished
    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        if (hoursElement && minutesElement && secondsElement) {
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
        }
        localStorage.removeItem('countdownStartTime');
    }
}

// Initialize countdown when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Clear any existing interval
    if (typeof countdownInterval !== 'undefined') {
        clearInterval(countdownInterval);
    }
    
    // Start the countdown
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
});