// Wool Sneakers E-commerce - Main JavaScript
// Natural wool meets urban tech

// Product Data
const products = [
    {
        id: 'wool-runner-oat',
        name: 'Wool Runner',
        brand: 'Urban Wool',
        price: 95,
        colors: ['oat', 'mist-grey', 'charcoal'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/www.allbirds.com/e0ae1a61c935b8d6683c1fb4a62bcc79de549c13.jpg',
        description: 'Premium merino wool sneaker with natural comfort and urban style',
        features: ['Moisture-wicking', 'Odor-resistant', 'Sustainable', 'Machine washable'],
        category: 'lifestyle'
    },
    {
        id: 'wool-runner-mist',
        name: 'Wool Runner',
        brand: 'Urban Wool',
        price: 95,
        colors: ['oat', 'mist-grey', 'charcoal'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/neemans.com/5a91af01683e91101d13762ee9284ad8613ab10e.jpg',
        description: 'Premium merino wool sneaker in mist grey with natural comfort',
        features: ['Moisture-wicking', 'Odor-resistant', 'Sustainable', 'Machine washable'],
        category: 'lifestyle'
    },
    {
        id: 'wool-high-top-oat',
        name: 'Wool High-Top',
        brand: 'Urban Wool',
        price: 115,
        colors: ['oat', 'charcoal', 'sage'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/www.kastelshoes.com/5bbf28986d9e7a06648bb6d1fa44cf2c7742607c',
        description: 'Ankle-high wool sneaker with enhanced support and weather resistance',
        features: ['Water-repellent', 'Ankle support', 'Temperature regulating', 'Carbon neutral'],
        category: 'urban'
    },
    {
        id: 'wool-slip-on-charcoal',
        name: 'Wool Slip-On',
        brand: 'Urban Wool',
        price: 85,
        colors: ['charcoal', 'oat', 'mist-grey'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/cdn.shopify.com/22a4fd11e55c02548f2d3eeb0653cfb3321e036a.jpg',
        description: 'Easy-on wool slip-on for ultimate comfort and convenience',
        features: ['Slip-on design', 'Elastic gore', 'Odor-resistant', 'Lightweight'],
        category: 'casual'
    },
    {
        id: 'wool-trail-sage',
        name: 'Wool Trail',
        brand: 'Urban Wool',
        price: 135,
        colors: ['sage', 'charcoal', 'oat'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/www.baabuk.com/df979fbd5616828e0e6e56608a4b605fbc0788ac.jpg',
        description: 'All-terrain wool sneaker with micro-grip sole for outdoor adventures',
        features: ['All-terrain sole', 'Water-resistant', '4-season use', 'Micro-grip technology'],
        category: 'outdoor'
    },
    {
        id: 'wool-hiker-mist',
        name: 'Wool Hiker',
        brand: 'Urban Wool',
        price: 145,
        colors: ['mist-grey', 'charcoal', 'sage'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/spy.com/fee3d4d56eb06fd553dddd27a86333f7048be8db.jpg',
        description: 'Rugged wool hiking shoe with enhanced support and durability',
        features: ['Rugged outsole', 'Enhanced support', 'Durable construction', 'All-weather'],
        category: 'outdoor'
    },
    {
        id: 'wool-lifestyle-cream',
        name: 'Wool Lifestyle',
        brand: 'Urban Wool',
        price: 105,
        colors: ['cream', 'oat', 'mist-grey'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/saola.com/1922b2e7c9019f1c283809cf95b2ffd94a1c13dc.jpg',
        description: 'Versatile wool sneaker perfect for everyday urban adventures',
        features: ['Versatile design', 'All-day comfort', 'Breathable', 'Stylish'],
        category: 'lifestyle'
    },
    {
        id: 'wool-urban-charcoal',
        name: 'Wool Urban',
        brand: 'Urban Wool',
        price: 110,
        colors: ['charcoal', 'sage', 'oat'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/i.insider.com/5f2f9d0d16f69acc7c86abf6ec5f53171b6942f0',
        description: 'Modern wool sneaker designed for city life and urban exploration',
        features: ['Urban design', 'City-ready', 'Comfort focused', 'Durable'],
        category: 'urban'
    },
    {
        id: 'wool-performance-oat',
        name: 'Wool Performance',
        brand: 'Urban Wool',
        price: 125,
        colors: ['oat', 'charcoal', 'mist-grey'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/footwearnews.com/9f4bcb08d4efd34276034fb06c91cf7a2ec93dae.jpg',
        description: 'High-performance wool sneaker for active lifestyles',
        features: ['Performance fit', 'Active comfort', 'Quick-dry', 'Athletic support'],
        category: 'athletic'
    },
    {
        id: 'wool-minimal-sage',
        name: 'Wool Minimal',
        brand: 'Urban Wool',
        price: 90,
        colors: ['sage', 'oat', 'cream'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/images.fastcompany.com/e60eb0b586384b028b3377d0bb6f8038b6c07fc3.jpg',
        description: 'Minimalist wool sneaker with clean lines and essential comfort',
        features: ['Minimalist design', 'Essential comfort', 'Clean aesthetic', 'Lightweight'],
        category: 'lifestyle'
    },
    {
        id: 'wool-classic-mist',
        name: 'Wool Classic',
        brand: 'Urban Wool',
        price: 100,
        colors: ['mist-grey', 'charcoal', 'oat'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/www.drcomfort.com/8a67b1a28831801fc31e05f3f2dfde93da2d550c.jpg',
        description: 'Timeless wool sneaker design with modern comfort technology',
        features: ['Classic design', 'Modern comfort', 'Timeless appeal', 'Reliable'],
        category: 'lifestyle'
    },
    {
        id: 'wool-premium-charcoal',
        name: 'Wool Premium',
        brand: 'Urban Wool',
        price: 155,
        colors: ['charcoal', 'sage', 'mist-grey'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/yoursole.com/5ff2d0c53ff64a36654cbeae2aec6beabbf4577f',
        description: 'Luxury wool sneaker with premium materials and craftsmanship',
        features: ['Premium materials', 'Luxury finish', 'Handcrafted', 'Exclusive'],
        category: 'luxury'
    },
    {
        id: 'wool-street-oat',
        name: 'Wool Street',
        brand: 'Urban Wool',
        price: 115,
        colors: ['oat', 'charcoal', 'sage'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/f873804be7c2c9e007d14d24fec35911e70a9fb8.jpg',
        description: 'Street-style wool sneaker with bold design and urban attitude',
        features: ['Street style', 'Bold design', 'Urban attitude', 'Trendy'],
        category: 'urban'
    },
    {
        id: 'wool-comfort-mist',
        name: 'Wool Comfort',
        brand: 'Urban Wool',
        price: 95,
        colors: ['mist-grey', 'oat', 'cream'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/www.gottstein.com/01eacabef4f544118ee353e222840684ab4a8ce5.webp',
        description: 'Maximum comfort wool sneaker designed for all-day wear',
        features: ['Maximum comfort', 'All-day wear', 'Cushioned', 'Supportive'],
        category: 'comfort'
    },
    {
        id: 'wool-eco-sage',
        name: 'Wool Eco',
        brand: 'Urban Wool',
        price: 120,
        colors: ['sage', 'oat', 'mist-grey'],
        sizes: [7, 8, 9, 10, 11, 12],
        image: 'https://kimi-web-img.moonshot.cn/img/assets.vogue.com/1c0e1ebedc54b032c10a6027f77deb1a16fe6312.jpg',
        description: 'Eco-conscious wool sneaker made with sustainable practices',
        features: ['Eco-conscious', 'Sustainable', 'Carbon neutral', 'Green'],
        category: 'sustainable'
    }
];

// Shopping Cart Management
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartBadge();
    }

    loadCart() {
        const saved = localStorage.getItem('woolCart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('woolCart', JSON.stringify(this.items));
        this.updateCartBadge();
    }

    addItem(productId, size, color, quantity = 1) {
        const existingItem = this.items.find(item => 
            item.productId === productId && 
            item.size === size && 
            item.color === color
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                productId,
                size,
                color,
                quantity,
                id: Date.now() + Math.random()
            });
        }

        this.saveCart();
        this.showAddToCartAnimation();
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveCart();
        this.updateCartDisplay();
    }

    updateQuantity(itemId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeItem(itemId);
            return;
        }

        const item = this.items.find(item => item.id === itemId);
        if (item) {
            item.quantity = newQuantity;
            this.saveCart();
            this.updateCartDisplay();
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            const product = products.find(p => p.id === item.productId);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    }

    getTax() {
        return this.getTotal() * 0.09; // 9% tax
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    updateCartBadge() {
        const badge = document.querySelector('.cart-badge');
        const count = this.getItemCount();
        
        if (badge) {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'block' : 'none';
        }
    }

    updateCartDisplay() {
        const cartContainer = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const cartTax = document.getElementById('cart-tax');
        const cartFinal = document.getElementById('cart-final');

        if (!cartContainer) return;

        if (this.items.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <p>Your cart is empty</p>
                    <a href="products.html" class="btn btn-primary">Continue Shopping</a>
                </div>
            `;
            if (cartTotal) cartTotal.textContent = '$0.00';
            if (cartTax) cartTax.textContent = '$0.00';
            if (cartFinal) cartFinal.textContent = '$0.00';
            return;
        }

        cartContainer.innerHTML = this.items.map(item => {
            const product = products.find(p => p.id === item.productId);
            if (!product) return '';

            return `
                <div class="cart-item" data-item-id="${item.id}">
                    <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4>${product.name}</h4>
                        <p>Size: ${item.size} | Color: ${item.color}</p>
                        <p class="cart-item-price">$${product.price}</p>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                        <button class="remove-btn" onclick="cart.removeItem('${item.id}')">×</button>
                    </div>
                </div>
            `;
        }).join('');

        const total = this.getTotal();
        const tax = this.getTax();
        const finalTotal = total + tax;

        if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
        if (cartTax) cartTax.textContent = `$${tax.toFixed(2)}`;
        if (cartFinal) cartFinal.textContent = `$${finalTotal.toFixed(2)}`;
    }

    showAddToCartAnimation() {
        // Create a temporary notification
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = 'Added to cart!';
        document.body.appendChild(notification);

        // Animate the notification
        anime({
            targets: notification,
            translateY: [-50, 0],
            opacity: [0, 1, 1, 0],
            duration: 2000,
            easing: 'easeOutQuart',
            complete: () => notification.remove()
        });

        // Animate cart badge
        const badge = document.querySelector('.cart-badge');
        if (badge) {
            anime({
                targets: badge,
                scale: [1, 1.3, 1],
                duration: 300,
                easing: 'easeOutBack'
            });
        }
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartDisplay();
    }
}

// Product Filtering and Search
class ProductFilter {
    constructor() {
        this.filters = {
            category: 'all',
            size: 'all',
            color: 'all',
            priceRange: 'all',
            search: ''
        };
        this.sortBy = 'name';
        this.init();
    }

    init() {
        this.bindEvents();
        this.renderProducts();
    }

    bindEvents() {
        // Category filters
        document.querySelectorAll('.category-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filters.category = e.target.dataset.category;
                this.updateActiveFilter(e.target, '.category-filter');
                this.renderProducts();
            });
        });

        // Size filters
        document.querySelectorAll('.size-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filters.size = e.target.dataset.size;
                this.updateActiveFilter(e.target, '.size-filter');
                this.renderProducts();
            });
        });

        // Color filters
        document.querySelectorAll('.color-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filters.color = e.target.dataset.color;
                this.updateActiveFilter(e.target, '.color-filter');
                this.renderProducts();
            });
        });

        // Price range filter
        const priceRange = document.getElementById('price-range');
        if (priceRange) {
            priceRange.addEventListener('change', (e) => {
                this.filters.priceRange = e.target.value;
                this.renderProducts();
            });
        }

        // Search
        const searchInput = document.getElementById('product-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filters.search = e.target.value.toLowerCase();
                this.renderProducts();
            });
        }

        // Sort
        const sortSelect = document.getElementById('sort-products');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortBy = e.target.value;
                this.renderProducts();
            });
        }
    }

    updateActiveFilter(activeElement, selector) {
        document.querySelectorAll(selector).forEach(btn => {
            btn.classList.remove('active');
        });
        activeElement.classList.add('active');
    }

    filterProducts() {
        let filtered = products.filter(product => {
            // Category filter
            if (this.filters.category !== 'all' && product.category !== this.filters.category) {
                return false;
            }

            // Size filter
            if (this.filters.size !== 'all' && !product.sizes.includes(parseInt(this.filters.size))) {
                return false;
            }

            // Color filter
            if (this.filters.color !== 'all' && !product.colors.includes(this.filters.color)) {
                return false;
            }

            // Price range filter
            if (this.filters.priceRange !== 'all') {
                const [min, max] = this.filters.priceRange.split('-').map(Number);
                if (product.price < min || product.price > max) {
                    return false;
                }
            }

            // Search filter
            if (this.filters.search && !product.name.toLowerCase().includes(this.filters.search)) {
                return false;
            }

            return true;
        });

        // Sort products
        filtered.sort((a, b) => {
            switch (this.sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'name':
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

        return filtered;
    }

    renderProducts() {
        const container = document.getElementById('products-grid');
        if (!container) return;

        const filteredProducts = this.filterProducts();

        if (filteredProducts.length === 0) {
            container.innerHTML = `
                <div class="no-products">
                    <p>No products found matching your criteria.</p>
                    <button onclick="productFilter.clearFilters()" class="btn btn-primary">Clear Filters</button>
                </div>
            `;
            return;
        }

        container.innerHTML = filteredProducts.map(product => `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-overlay">
                        <button class="quick-view-btn" onclick="showQuickView('${product.id}')">Quick View</button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-brand">${product.brand}</p>
                    <p class="product-price">$${product.price}</p>
                    <div class="product-colors">
                        ${product.colors.map(color => `<span class="color-swatch ${color}"></span>`).join('')}
                    </div>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">Add to Cart</button>
            </div>
        `).join('');

        // Animate product cards
        anime({
            targets: '.product-card',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(100),
            duration: 600,
            easing: 'easeOutQuart'
        });
    }

    clearFilters() {
        this.filters = {
            category: 'all',
            size: 'all',
            color: 'all',
            priceRange: 'all',
            search: ''
        };

        // Reset UI
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.filter-btn[data-value="all"]').forEach(btn => btn.classList.add('active'));
        
        const searchInput = document.getElementById('product-search');
        if (searchInput) searchInput.value = '';
        
        const priceRange = document.getElementById('price-range');
        if (priceRange) priceRange.value = 'all';

        this.renderProducts();
    }
}

// Quick View Modal
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quick-view-modal');
    const modalContent = document.getElementById('quick-view-content');
    
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
        <div class="quick-view-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="quick-view-details">
            <h2>${product.name}</h2>
            <p class="brand">${product.brand}</p>
            <p class="price">$${product.price}</p>
            <p class="description">${product.description}</p>
            
            <div class="size-selector">
                <label>Size:</label>
                <select id="quick-view-size">
                    ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                </select>
            </div>
            
            <div class="color-selector">
                <label>Color:</label>
                <select id="quick-view-color">
                    ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                </select>
            </div>
            
            <div class="features">
                <h4>Features:</h4>
                <ul>
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <button class="btn btn-primary" onclick="addToCartFromQuickView('${product.id}')">Add to Cart</button>
            <button class="btn btn-secondary" onclick="closeQuickView()">Close</button>
        </div>
    `;

    modal.style.display = 'flex';
    
    // Animate modal
    anime({
        targets: modal,
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });

    anime({
        targets: '.quick-view-content',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 400,
        delay: 100,
        easing: 'easeOutBack'
    });
}

function closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    if (modal) {
        anime({
            targets: modal,
            opacity: [1, 0],
            duration: 300,
            easing: 'easeOutQuart',
            complete: () => {
                modal.style.display = 'none';
            }
        });
    }
}

function addToCartFromQuickView(productId) {
    const size = document.getElementById('quick-view-size').value;
    const color = document.getElementById('quick-view-color').value;
    
    cart.addItem(productId, parseInt(size), color, 1);
    closeQuickView();
}

// Add to cart helper function
function addToCart(productId) {
    // Show size and color selection if needed
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // For simplicity, use first available size and color
    const size = product.sizes[0];
    const color = product.colors[0];
    
    cart.addItem(productId, size, color, 1);
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.classList.contains('fade-in')) {
                    anime({
                        targets: element,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 800,
                        easing: 'easeOutQuart'
                    });
                }
                
                if (element.classList.contains('slide-in-left')) {
                    anime({
                        targets: element,
                        opacity: [0, 1],
                        translateX: [-50, 0],
                        duration: 800,
                        easing: 'easeOutQuart'
                    });
                }
                
                if (element.classList.contains('slide-in-right')) {
                    anime({
                        targets: element,
                        opacity: [0, 1],
                        translateX: [50, 0],
                        duration: 800,
                        easing: 'easeOutQuart'
                    });
                }

                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all animation elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Product Card Hover Effects
function initProductCardEffects() {
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.02,
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                duration: 300,
                easing: 'easeOutQuart'
            });
        });

        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                rotateY: 0,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
    });
}

// Newsletter Signup
function initNewsletterSignup() {
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            // Simulate newsletter signup
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            button.textContent = 'Subscribing...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Subscribed! ✓';
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    form.reset();
                }, 2000);
            }, 1000);
        });
    }
}

// Checkout Form Handling
function initCheckoutForm() {
    const form = document.getElementById('checkout-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate checkout process
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            button.textContent = 'Processing...';
            button.disabled = true;
            
            setTimeout(() => {
                showOrderConfirmation();
                cart.clearCart();
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        });
    }
}

function showOrderConfirmation() {
    const modal = document.createElement('div');
    modal.className = 'order-confirmation-modal';
    modal.innerHTML = `
        <div class="confirmation-content">
            <h2>Order Confirmed!</h2>
            <p>Thank you for your purchase. Your order has been successfully placed.</p>
            <button onclick="closeOrderConfirmation()" class="btn btn-primary">Continue Shopping</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    anime({
        targets: modal,
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
}

function closeOrderConfirmation() {
    const modal = document.querySelector('.order-confirmation-modal');
    if (modal) {
        anime({
            targets: modal,
            opacity: [1, 0],
            duration: 300,
            easing: 'easeOutQuart',
            complete: () => modal.remove()
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize global objects
    window.cart = new ShoppingCart();
    window.productFilter = new ProductFilter();
    
    // Initialize components
    initScrollAnimations();
    initProductCardEffects();
    initNewsletterSignup();
    initCheckoutForm();
    
    // Update cart display if on cart page
    if (window.location.pathname.includes('cart.html')) {
        cart.updateCartDisplay();
    }
    
    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            if (e.target.id === 'quick-view-modal') {
                closeQuickView();
            } else {
                e.target.style.display = 'none';
            }
        }
    });
});

// Export for use in HTML
window.showQuickView = showQuickView;
window.closeQuickView = closeQuickView;
window.addToCart = addToCart;
window.addToCartFromQuickView = addToCartFromQuickView;
window.closeOrderConfirmation = closeOrderConfirmation;