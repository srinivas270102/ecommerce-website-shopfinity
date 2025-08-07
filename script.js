// Product Data
const products = [
    // Mobiles
    {
        id: 1,
        name: "Samsung Galaxy S23",
        category: "mobiles",
        price: 699,
        rating: 4.5,
        image: "assets/mobiles/samsung_s23.jpg",
        deal: true
    },
    {
        id: 2,
        name: "iPhone 14",
        category: "mobiles",
        price: 799,
        rating: 4.7,
        image: "assets/mobiles/iphone_14.jpg"
    },
    {
        id: 3,
        name: "Xiaomi 13 Pro",
        category: "mobiles",
        price: 649,
        rating: 4.3,
        image: "assets/mobiles/xiaomi_13_pro.jpg",
        deal: true
    },
    {
        id: 4,
        name: "Realme Narzo 60",
        category: "mobiles",
        price: 499,
        rating: 4.2,
        image: "assets/mobiles/realme_narzo_60.jpg"
    },
    {
        id: 5,
        name: "Vivo V27",
        category: "mobiles",
        price: 549,
        rating: 4.4,
        image: "assets/mobiles/vivo_v27.jpg"
    },

    // Laptops
    {
        id: 6,
        name: "Dell XPS 13",
        category: "laptops",
        price: 999,
        rating: 4.6,
        image: "assets/laptops/dell_xps_13.jpg",
        deal: true
    },
    {
        id: 7,
        name: "MacBook Air M2",
        category: "laptops",
        price: 1199,
        rating: 4.8,
        image: "assets/laptops/macbook_air_m2.jpg"
    },
    {
        id: 8,
        name: "HP Pavilion 15",
        category: "laptops",
        price: 799,
        rating: 4.3,
        image: "assets/laptops/hp_pavilion_15.jpg"
    },
    {
        id: 9,
        name: "Lenovo IdeaPad",
        category: "laptops",
        price: 649,
        rating: 4.2,
        image: "assets/laptops/lenovo_ideapad.jpg",
        deal: true
    },
    {
        id: 10,
        name: "Asus ROG Zephyrus",
        category: "laptops",
        price: 1299,
        rating: 4.5,
        image: "assets/laptops/asus_rog_zephyrus.jpg"
    },

    // Dresses
    {
        id: 11,
        name: "Floral Maxi Dress",
        category: "clothing",
        subcategory: "dresses",
        price: 49,
        rating: 4.0,
        image: "assets/dresses/floral_maxi_dress.jpg"
    },
    {
        id: 12,
        name: "Casual Summer Dress",
        category: "clothing",
        subcategory: "dresses",
        price: 39,
        rating: 4.1,
        image: "assets/dresses/casual_summer_dress.jpg",
        deal: true
    },
    {
        id: 13,
        name: "Anarkali Suit",
        category: "clothing",
        subcategory: "dresses",
        price: 69,
        rating: 4.3,
        image: "assets/dresses/anarkali_suit.jpg"
    },
    {
        id: 14,
        name: "A-Line Dress",
        category: "clothing",
        subcategory: "dresses",
        price: 45,
        rating: 4.0,
        image: "assets/dresses/a_line_dress.jpg"
    },
    {
        id: 15,
        name: "Party Wear Gown",
        category: "clothing",
        subcategory: "dresses",
        price: 89,
        rating: 4.4,
        image: "assets/dresses/party_wear_gown.jpg",
        deal: true
    },

    // Shirts
    {
        id: 16,
        name: "Men's Formal Shirt",
        category: "clothing",
        subcategory: "shirts",
        price: 29,
        rating: 4.0,
        image: "assets/shirts/mens_formal_shirt.jpg"
    },
    {
        id: 17,
        name: "Casual Check Shirt",
        category: "clothing",
        subcategory: "shirts",
        price: 25,
        rating: 4.1,
        image: "assets/shirts/casual_check_shirt.jpg"
    },
    {
        id: 18,
        name: "Denim Shirt",
        category: "clothing",
        subcategory: "shirts",
        price: 35,
        rating: 4.2,
        image: "assets/shirts/denim_shirt.jpg",
        deal: true
    },
    {
        id: 19,
        name: "Printed Casual Shirt",
        category: "clothing",
        subcategory: "shirts",
        price: 27,
        rating: 4.0,
        image: "assets/shirts/printed_casual_shirt.jpg"
    },
    {
        id: 20,
        name: "Linen Shirt",
        category: "clothing",
        subcategory: "shirts",
        price: 39,
        rating: 4.3,
        image: "assets/shirts/linen_shirt.jpg"
    },

    // Pants
    {
        id: 21,
        name: "Men's Slim Fit Jeans",
        category: "clothing",
        subcategory: "pants",
        price: 35,
        rating: 4.2,
        image: "assets/pants/mens_slim_fit_jeans.jpg",
        deal: true
    },
    {
        id: 22,
        name: "Women's High-Waist Trousers",
        category: "clothing",
        subcategory: "pants",
        price: 45,
        rating: 4.3,
        image: "assets/pants/womens_high_waist_trousers.jpg"
    },
    {
        id: 23,
        name: "Chinos",
        category: "clothing",
        subcategory: "pants",
        price: 32,
        rating: 4.1,
        image: "assets/pants/chinos.jpg"
    },
    {
        id: 24,
        name: "Cargo Pants",
        category: "clothing",
        subcategory: "pants",
        price: 38,
        rating: 4.0,
        image: "assets/pants/cargo_pants.jpg",
        deal: true
    },
    {
        id: 25,
        name: "Formal Trousers",
        category: "clothing",
        subcategory: "pants",
        price: 40,
        rating: 4.2,
        image: "assets/pants/formal_trousers.jpg"
    },

    // Home Appliances
    {
        id: 26,
        name: "LG Refrigerator 260L",
        category: "home_appliances",
        price: 299,
        rating: 4.4,
        image: "assets/home_appliances/lg_refrigerator.jpg"
    },
    {
        id: 27,
        name: "Samsung Washing Machine",
        category: "home_appliances",
        price: 349,
        rating: 4.3,
        image: "assets/home_appliances/samsung_washing_machine.jpg",
        deal: true
    },
    {
        id: 28,
        name: "Philips Air Fryer",
        category: "home_appliances",
        price: 99,
        rating: 4.2,
        image: "assets/home_appliances/philips_air_fryer.jpg"
    },
    {
        id: 29,
        name: "Bajaj Microwave",
        category: "home_appliances",
        price: 129,
        rating: 4.1,
        image: "assets/home_appliances/bajaj_microwave.jpg"
    },
    {
        id: 30,
        name: "Havells Fan",
        category: "home_appliances",
        price: 59,
        rating: 4.0,
        image: "assets/home_appliances/havells_fan.jpg",
        deal: true
    },

    // Groceries
    {
        id: 31,
        name: "Tata Gold Tea",
        category: "groceries",
        price: 10,
        rating: 4.5,
        image: "assets/groceries/tata_gold_tea.jpg"
    },
    {
        id: 32,
        name: "Amul Butter",
        category: "groceries",
        price: 8,
        rating: 4.6,
        image: "assets/groceries/amul_butter.jpg",
        deal: true
    },
    {
        id: 33,
        name: "Parle-G Biscuits",
        category: "groceries",
        price: 5,
        rating: 4.7,
        image: "assets/groceries/parle_g_biscuits.jpg"
    },
    {
        id: 34,
        name: "Basmati Rice 5kg",
        category: "groceries",
        price: 20,
        rating: 4.4,
        image: "assets/groceries/basmati_rice.jpg"
    },
    {
        id: 35,
        name: "Durex Condoms",
        category: "groceries",
        price: 15,
        rating: 4.3,
        image: "assets/groceries/durex_condoms.jpg",
        deal: true
    },

    // Books
    {
        id: 36,
        name: "Sapiens by Yuval Noah Harari",
        category: "books",
        price: 12,
        rating: 4.8,
        image: "assets/books/sapiens.jpg"
    },
    {
        id: 37,
        name: "The Alchemist by Paulo Coelho",
        category: "books",
        price: 10,
        rating: 4.7,
        image: "assets/books/the_alchemist.jpg",
        deal: true
    },
    {
        id: 38,
        name: "Ikigai",
        category: "books",
        price: 11,
        rating: 4.6,
        image: "assets/books/ikigai.jpg"
    },
    {
        id: 39,
        name: "Atomic Habits",
        category: "books",
        price: 13,
        rating: 4.8,
        image: "assets/books/atomic_habits.jpg"
    },
    {
        id: 40,
        name: "Wings of Fire",
        category: "books",
        price: 9,
        rating: 4.9,
        image: "assets/books/wings_of_fire.jpg",
        deal: true
    },

    // Beauty & Personal Care
    {
        id: 41,
        name: "Lakmé Lipstick",
        category: "beauty",
        price: 15,
        rating: 4.2,
        image: "assets/beauty/lakme_lipstick.jpg"
    },
    {
        id: 42,
        name: "Nivea Body Lotion",
        category: "beauty",
        price: 12,
        rating: 4.3,
        image: "assets/beauty/nivea_body_lotion.jpg",
        deal: true
    },
    {
        id: 43,
        name: "Himalaya Face Wash",
        category: "beauty",
        price: 8,
        rating: 4.1,
        image: "assets/beauty/himalaya_face_wash.jpg"
    },
    {
        id: 44,
        name: "L'Oréal Shampoo",
        category: "beauty",
        price: 10,
        rating: 4.2,
        image: "assets/beauty/loreal_shampoo.jpg"
    },
    {
        id: 45,
        name: "Mamaearth Sunscreen",
        category: "beauty",
        price: 14,
        rating: 4.3,
        image: "assets/beauty/mamaearth_sunscreen.jpg",
        deal: true
    },

    // Sports & Fitness
    {
        id: 46,
        name: "Nike Running Shoes",
        category: "sports",
        price: 79,
        rating: 4.5,
        image: "assets/sports/nike_running_shoes.jpg"
    },
    {
        id: 47,
        name: "Adidas Yoga Mat",
        category: "sports",
        price: 25,
        rating: 4.3,
        image: "assets/sports/adidas_yoga_mat.jpg",
        deal: true
    },
    {
        id: 48,
        name: "Puma Gym Bag",
        category: "sports",
        price: 30,
        rating: 4.2,
        image: "assets/sports/puma_gym_bag.jpg"
    },
    {
        id: 49,
        name: "Decathlon Dumbbells",
        category: "sports",
        price: 40,
        rating: 4.1,
        image: "assets/sports/decathlon_dumbbells.jpg"
    },
    {
        id: 50,
        name: "Reebok Fitness Tracker",
        category: "sports",
        price: 99,
        rating: 4.4,
        image: "assets/sports/reebok_fitness_tracker.jpg",
        deal: true
    }
];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartToggle = document.getElementById('cart-toggle');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotalAmount = document.getElementById('cart-total-amount');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeModal = document.getElementById('close-modal');
const checkoutForm = document.getElementById('checkout-form');
const confirmationModal = document.getElementById('confirmation-modal');
const closeConfirmation = document.getElementById('close-confirmation');
const orderId = document.getElementById('order-id');
const dealsContainer = document.getElementById('deals-container');
const cartCount = document.querySelector('.cart-count');
const dealsLink = document.getElementById('deals-link');

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the app
function init() {
    renderProducts(products);
    renderDeals();
    updateCartCount();
    setupEventListeners();
}

// Render products to the grid
function renderProducts(productsToRender) {
    productGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-rating">
                    <div class="stars">${renderStars(product.rating)}</div>
                    <span>${product.rating.toFixed(1)}</span>
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Render deals of the day
function renderDeals() {
    const deals = products.filter(product => product.deal);
    dealsContainer.innerHTML = '';
    
    deals.forEach(deal => {
        const discountedPrice = deal.price * 0.9; // 10% discount
        const dealCard = document.createElement('div');
        dealCard.className = 'deal-card';
        dealCard.innerHTML = `
            <div class="deal-badge">10% OFF</div>
            <div class="deal-image">
                <img src="${deal.image}" alt="${deal.name}">
            </div>
            <div class="deal-info">
                <h4 class="deal-title">${deal.name}</h4>
                <div class="deal-price">
                    <span class="original-price">$${deal.price.toFixed(2)}</span>
                    <span class="discounted-price">$${discountedPrice.toFixed(2)}</span>
                </div>
                <button class="btn secondary add-to-cart" data-id="${deal.id}">Add to Cart</button>
            </div>
        `;
        dealsContainer.appendChild(dealCard);
    });
}

// Render stars based on rating
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (halfStar) {
        stars += '½';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars;
}

// Filter products by category
function filterProducts(category) {
    if (category === 'all') {
        renderProducts(products);
        return;
    }
    
    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCart();
    saveCartToLocalStorage();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCartToLocalStorage();
}

// Update quantity in cart
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    item.quantity = newQuantity;
    updateCart();
    saveCartToLocalStorage();
}

// Update cart UI
function updateCart() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartTotalAmount.textContent = '$0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <input type="number" class="quantity-value" value="${item.quantity}" min="1" data-id="${item.id}">
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotalAmount.textContent = `$${total.toFixed(2)}`;
    updateCartCount();
}

// Update cart count in header
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Validate checkout form
function validateForm() {
    let isValid = true;
    const name = document.getElementById('full-name');
    const email = document.getElementById('email');
    const address = document.getElementById('address');
    const payment = document.getElementById('payment');
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
    });
    
    // Validate name
    if (!name.value.trim()) {
        document.getElementById('name-error').textContent = 'Please enter your full name';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        document.getElementById('email-error').textContent = 'Please enter your email';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate address
    if (!address.value.trim()) {
        document.getElementById('address-error').textContent = 'Please enter your shipping address';
        document.getElementById('address-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate payment
    if (!payment.value) {
        document.getElementById('payment-error').textContent = 'Please select a payment method';
        document.getElementById('payment-error').style.display = 'block';
        isValid = false;
    }
    
    return isValid;
}

// Generate random order ID
function generateOrderId() {
    return 'ORD-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProducts(button.dataset.category);
        });
    });
    
    // Category dropdown links
    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector(`.filter-btn[data-category="${category}"]`).classList.add('active');
            filterProducts(category);
        });
    });
    
    // Deals link
    dealsLink.addEventListener('click', (e) => {
        e.preventDefault();
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
        renderProducts(products.filter(product => product.deal));
    });
    
    // Add to cart buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
            
            // Show cart sidebar if it's hidden
            if (!cartSidebar.classList.contains('active')) {
                cartSidebar.classList.add('active');
            }
        }
    });
    
    // Cart toggle
    cartToggle.addEventListener('click', (e) => {
        e.preventDefault();
        cartSidebar.classList.toggle('active');
    });
    
    // Close cart
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });
    
    // Quantity controls in cart
    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('minus')) {
            const productId = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === productId);
            if (item) {
                updateQuantity(productId, item.quantity - 1);
            }
        } else if (e.target.classList.contains('plus')) {
            const productId = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === productId);
            if (item) {
                updateQuantity(productId, item.quantity + 1);
            }
        } else if (e.target.classList.contains('remove-item')) {
            const productId = parseInt(e.target.dataset.id);
            removeFromCart(productId);
        }
    });
    
    // Quantity input changes
    cartItems.addEventListener('change', (e) => {
        if (e.target.classList.contains('quantity-value')) {
            const productId = parseInt(e.target.dataset.id);
            const newQuantity = parseInt(e.target.value);
            if (!isNaN(newQuantity)) {
                updateQuantity(productId, newQuantity);
            }
        }
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add some products before checkout.');
            return;
        }
        checkoutModal.classList.add('active');
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });
    
    // Close confirmation modal
    closeConfirmation.addEventListener('click', () => {
        confirmationModal.classList.remove('active');
    });
    
    // Checkout form submission
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Generate order ID
            const newOrderId = generateOrderId();
            orderId.textContent = newOrderId;
            
            // Close checkout modal and show confirmation
            checkoutModal.classList.remove('active');
            confirmationModal.classList.add('active');
            
            // Clear cart
            cart = [];
            updateCart();
            saveCartToLocalStorage();
        }
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            checkoutModal.classList.remove('active');
        }
        if (e.target === confirmationModal) {
            confirmationModal.classList.remove('active');
        }
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);