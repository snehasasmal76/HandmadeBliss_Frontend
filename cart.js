const PRODUCTS = [
    { id: 1, name: 'Sunset Terracotta Wall Plate', category: 'Home Decor', price: 1299, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Mitti Bloom Planter', category: 'Home Decor', price: 899, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Indigo Loom Cushion', category: 'Textiles', price: 749, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Brass Sunburst Mirror', category: 'Art & Craft', price: 1899, image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=500&q=80' },
    { id: 5, name: 'Wildflower Soy Candle', category: 'Beauty & Wellness', price: 599, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=500&q=80' }
];
const cartKey = 'handmade-bliss-cart';
let cart = JSON.parse(localStorage.getItem(cartKey) || '[]');
const money = value => `₹${value.toLocaleString('en-IN')}`;
function saveCart() { localStorage.setItem(cartKey, JSON.stringify(cart)); }
function renderCart() {
    const content = document.getElementById('cart-content');
    const items = cart.map(item => ({ ...item, product: PRODUCTS.find(product => product.id === Number(item.productId)) })).filter(item => item.product);
    const count = items.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-subtitle').textContent = count ? `${count} ${count === 1 ? 'item' : 'items'} ready for your review` : 'Your cart is waiting for something beautifully handmade.';
    if (!items.length) { content.innerHTML = '<div class="empty-cart"><h2>Your cart is empty</h2><p>Discover a thoughtful piece made by independent artisans.</p><a class="shop-button" href="product-detail.html">Explore products</a></div>'; return; }
    const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    content.innerHTML = `<div class="cart-layout"><div class="cart-items">${items.map(item => `<article class="cart-item"><img class="cart-item-image" src="${item.product.image}" alt="${item.product.name}"><div><h2>${item.product.name}</h2><p>${item.product.category}</p><p class="item-price">${money(item.product.price)}</p></div><div class="item-controls"><div class="item-quantity"><button type="button" data-action="decrease" data-id="${item.product.id}">-</button><span>${item.quantity}</span><button type="button" data-action="increase" data-id="${item.product.id}">+</button></div><button class="remove-button" type="button" data-action="remove" data-id="${item.product.id}">Remove</button></div></article>`).join('')}</div><aside class="summary"><h2>Order summary</h2><div class="summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div class="summary-row"><span>Shipping</span><strong>Free</strong></div><div class="summary-row summary-total"><span>Total</span><strong>${money(subtotal)}</strong></div><button class="checkout-button" type="button" id="checkout">Proceed to checkout</button></aside></div>`;
    content.querySelectorAll('[data-action]').forEach(button => button.addEventListener('click', () => { const id = Number(button.dataset.id); const item = cart.find(entry => Number(entry.productId) === id); if (button.dataset.action === 'remove') cart = cart.filter(entry => Number(entry.productId) !== id); else if (item) item.quantity = Math.max(1, item.quantity + (button.dataset.action === 'increase' ? 1 : -1)); saveCart(); renderCart(); }));
    document.getElementById('checkout').addEventListener('click', () => { document.getElementById('toast').textContent = 'Checkout will be available soon.'; document.getElementById('toast').classList.add('show'); setTimeout(() => document.getElementById('toast').classList.remove('show'), 2500); });
}
renderCart();
