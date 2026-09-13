const FALLBACK_PRODUCTS = [
    { id: 1, name: 'Sunset Terracotta Wall Plate', category: 'Home Decor', price: 1299, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=700&q=80' },
    { id: 2, name: 'Mitti Bloom Planter', category: 'Home Decor', price: 899, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80' },
    { id: 3, name: 'Indigo Loom Cushion', category: 'Textiles', price: 749, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80' },
    { id: 4, name: 'Brass Sunburst Mirror', category: 'Art & Craft', price: 1899, image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=80' },
    { id: 5, name: 'Wildflower Soy Candle', category: 'Beauty & Wellness', price: 599, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80' }
];
const wishlistKey = 'handmade-bliss-wishlist';
let wishlist = JSON.parse(localStorage.getItem(wishlistKey) || '[]');
async function renderWishlist() {
    let availableProducts;
    try { availableProducts = await fetchApi('/api/products?limit=100'); } catch (error) { availableProducts = FALLBACK_PRODUCTS; }
    const products = wishlist.map(id => availableProducts.find(product => product.id === Number(id))).filter(Boolean).map(product => ({ ...product, image: product.image || product.image_url }));
    document.getElementById('wishlist-subtitle').textContent = products.length ? `${products.length} ${products.length === 1 ? 'piece' : 'pieces'} saved for later` : 'Keep the pieces that make you smile close at hand.';
    const content = document.getElementById('wishlist-content');
    if (!products.length) { content.innerHTML = '<div class="empty-wishlist"><h2>Your wishlist is empty</h2><p>Save beautiful handmade pieces here while you decide.</p><a class="shop-button" href="product-detail.html">Explore products</a></div>'; return; }
    content.innerHTML = `<div class="wishlist-grid">${products.map(product => `<article class="wishlist-card"><button class="remove-wishlist" type="button" data-id="${product.id}" aria-label="Remove ${product.name}" title="Remove from wishlist">&#9829;</button><a href="product-detail.html?id=${product.id}"><div class="wishlist-image"><img src="${product.image}" alt="${product.name}" loading="lazy"></div><h2>${product.name}</h2><p>${product.category}</p><p class="price">₹${product.price.toLocaleString('en-IN')}</p></a></article>`).join('')}</div>`;
    content.querySelectorAll('.remove-wishlist').forEach(button => button.addEventListener('click', () => { wishlist = wishlist.filter(id => Number(id) !== Number(button.dataset.id)); localStorage.setItem(wishlistKey, JSON.stringify(wishlist)); renderWishlist(); showToast('Removed from your wishlist.'); }));
}
function showToast(message) { const toast = document.getElementById('toast'); toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2400); }
renderWishlist();
