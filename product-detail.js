const MOCK_PRODUCTS = [
    { id: 1, name: 'Sunset Terracotta Wall Plate', category: 'Home Decor', description: 'A warm, hand-painted accent that brings the quiet beauty of the artisan studio into your home.', price: 599, image: 'https://aakriti.store/cdn/shop/files/AAC-41-26-07-D1_1-1-scaled.jpg?v=1742582071&width=1680', images: ['https://aakriti.store/cdn/shop/files/AAC-41-26-07-D1_1-1-scaled.jpg?v=1742582071&width=1680', 'https://aakriti.store/cdn/shop/files/AAC-41-26-07-D1_1.png?v=1782213116&width=1200','https://aakriti.store/cdn/shop/files/AAC-41-26-07-D1_6.png?v=1782213117&width=1400'], stock: 8, material: 'Terracotta, natural mineral pigments', care: 'Wipe gently with a dry, soft cloth. Keep away from prolonged moisture.', details: 'Each plate is shaped, painted, and finished by hand. Small variations in brushwork make every piece one of a kind.' },
    { id: 2, name: 'Mitti Bloom Planter', category: 'Home Decor', description: 'A softly textured planter inspired by garden mornings and the earthy language of clay.', price: 199, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAKYmqLz8X2GtUnn-0LzYcHZxPEbhGw83DvDjp9VsekXSMFhBLCjy310&s=10', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAKYmqLz8X2GtUnn-0LzYcHZxPEbhGw83DvDjp9VsekXSMFhBLCjy310&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfS6ZX4ou2w6pM8H4QaOdjZCQ22g7-knto5X67xy3ExQ&s'], stock: 14, material: 'Hand-thrown terracotta', care: 'Use a pot liner indoors and allow the surface to dry between cleanings.', details: 'Crafted in small batches on a traditional wheel, then finished with a softly irregular rim.' },
    { id: 3, name: 'Indigo Loom Cushion', category: 'Textiles', description: 'A handwoven cotton cushion with a calm indigo pattern and a beautifully tactile finish.', price: 349, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=85', images: ['https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=85'], stock: 6, material: 'Handloom cotton, hidden zip', care: 'Spot clean or use a gentle cold wash. Dry in shade.', details: 'Woven slowly by independent makers using traditional shuttle looms and low-impact dyes.' },
    { id: 4, name: 'Brass Sunburst Mirror', category: 'Art & Craft', description: 'A sculptural sunburst mirror that catches the light and adds a little celebration to any wall.', price: 299, image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85', images: ['https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85'], stock: 3, material: 'Brass-finished iron, glass mirror', care: 'Dust with a microfiber cloth. Avoid abrasive cleaners.', details: 'Hand-assembled rays give this small-batch piece its lively, imperfect silhouette.' },
    { id: 5, name: 'Wildflower Soy Candle', category: 'Beauty & Wellness', description: 'A slow-burning botanical candle scented with soft florals, cedar, and a hint of wild honey.', price: 249, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85', images: ['https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85'], stock: 20, material: 'Soy wax, cotton wick, essential oils', care: 'Trim the wick before each burn and never leave a lit candle unattended.', details: 'Poured by hand in small batches with a clean-burning cotton wick.' },
    { id: 6, name: 'Handwoven Jute Basket', category: 'Home Decor', description: 'A versatile handwoven basket made from natural jute fibers, perfect for storage or decoration.', price: 389, image: 'https://m.media-amazon.com/images/I/812o3HU-DaL._AC_UF1000,1000_QL80_.jpghttps://assets.myntassets.com/assets/images/29721242/2024/5/23/43ae5822-2a1b-4b82-937f-b2c3c80297f31716414849040FruitandVegetableBasket4.jpg', images: ['https://assets.myntassets.com/assets/images/29721242/2024/5/23/0649b588-9e2c-445b-8670-b7d0a4476fbe1716414849090FruitandVegetableBasket1.jpg' , 'https://assets.myntassets.com/assets/images/29721242/2024/5/23/43ae5822-2a1b-4b82-937f-b2c3c80297f31716414849040FruitandVegetableBasket4.jpg'], stock: 10, material: 'Natural jute fibers', care: 'Keep dry and avoid prolonged exposure to sunlight.', details: 'Each basket is handwoven by skilled artisans, making each piece unique.' },
    { id: 7, name: 'Ceramic Teapot Set', category: 'Kitchenware', description: 'A charming ceramic teapot set with a matching cup, perfect for enjoying your favorite tea.', price: 399, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHG3ckshckpEh8YoeMdkGLE1CA2tOxVx7QkvnhvKXSqfjU2v-lWRMNzw&s=10https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85', images: ['https://www.earthstore.in/cdn/shop/files/96cb5a36-c0de-496d-874d-2515ebb0c89b.webp?crop=center&height=800&v=1778578520&width=800https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85','https://www.earthstore.in/cdn/shop/files/66da11a5-836a-49b2-b278-538300b98e18.webp?crop=center&height=800&v=1778578520&width=800'], stock: 5, material: 'Ceramic', care: 'Hand wash recommended. Avoid sudden temperature changes.', details: 'Handcrafted by skilled artisans, each teapot is unique and adds a touch of elegance to your tea time.' },
    { id: 8, name: 'Handcrafted Wooden Jewelry Box', category: 'Accessories', description: 'A beautifully handcrafted wooden jewelry box with intricate carvings and a soft velvet lining.', price: 259, image: 'https://m.media-amazon.com/images/I/71K8vs7h3dL._SL1500_.jpg', images: ['https://m.media-amazon.com/images/I/81R4z1JOPtL._SL1500_.jpg','https://m.media-amazon.com/images/I/61jZj9w9N2L._SL1500_.jpg','https://m.media-amazon.com/images/I/717n3of+05L._SL1500_.jpg','https://m.media-amazon.com/images/I/81Gg2E2jIaL._SL1500_.jpg'], stock: 7, material: 'Solid wood, velvet lining', care: 'Dust with a soft cloth. Avoid exposure to moisture.', details: 'Each jewelry box is carved by hand, making it a unique and elegant storage solution for your precious items.' },
    { id: 9, name: 'Handmade Ceramic Vase', category: 'Home Decor', description: 'A delicate handmade ceramic vase with a smooth finish and a minimalist design.', price: 499, image: 'https://arthaliving.in/cdn/shop/files/2fb78a51-df1e-4f78-86c3-dd522ee8e749.png?v=1764742454', images: ['https://arthaliving.in/cdn/shop/files/2fb78a51-df1e-4f78-86c3-dd522ee8e749.png?v=1764742454','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WoZCW5GBVqRbWVJKFD4OWsFOPwOr4FIbEMpI0B1kIQ&s'], stock: 12, material: 'Ceramic', care: 'Wipe with a damp cloth. Avoid harsh chemicals.', details: 'Each vase is shaped and glazed by hand, resulting in a unique piece for your home.' },
    { id: 10, name: 'Handwoven Cotton Throw Blanket', category: 'Textiles', description: 'A cozy handwoven cotton throw blanket with a soft texture and a timeless design.', price: 799, image: 'https://www.peepultree.world/cdn/shop/files/cotton-bed-cover-handwoven-in-blue-and-off-white-in-a-striped-design-queen-size-90-x-108-inchesbed-sheetspt-bc-9553-hs-2673703.png?v=1785510728&width=1080', images: ['https://www.peepultree.world/cdn/shop/files/cotton-bed-cover-handwoven-in-blue-and-off-white-in-a-striped-design-queen-size-90-x-108-inchesbed-sheetspt-bc-9553-hs-2673703.png?v=1785510728&width=1080'], stock: 15, material: 'Handloom cotton', care: 'Machine wash cold on gentle cycle. Tumble dry low.', details: 'Woven by skilled artisans using traditional techniques, this throw blanket adds warmth and style to any space.' },
    { id: 11, name: 'Crafts Metal Rajasthani Musicians Item Showpiece - Decorative Items For Home | Gift Items | Showpieces | Home Decoration Items Stylish | Table Decorative Items (10X9X30 Cm) (Multicolour)', category: 'Showpiece', description: 'Bring traditional Rajasthani charm to your home with this multicolour metal musician figurine. Its decorative style suits a living room or pooja room, and makes a thoughtful gift for colleagues or corporate occasions.', price: 349, image: 'https://m.media-amazon.com/images/I/81kcPg3kNxL.jpg', images: ['https://m.media-amazon.com/images/I/81kcPg3kNxL.jpg','https://m.media-amazon.com/images/I/91lfGpQId0L.jpg','https://m.media-amazon.com/images/I/71UV7WHjaEL._SX679_.jpg','https://m.media-amazon.com/images/I/71+vrInRBvL._SY879_.jpg','https://m.media-amazon.com/images/I/61P3B+u8qKL._SX679_.jpg'], stock: 10, material: 'Metal with multicolour finish', care: 'Dust with a soft, dry cloth. Keep away from moisture and abrasive cleaners.', details: 'A decorative Rajasthani musician showpiece with a multicolour finish. Dimensions: 10 x 9 x 30 cm.' },
    { id: 12, name: 'Gift Showpiece for Home Decor/Gift Items for Colleagues/Corporate Gift Item/Figurine/Home Decorative Items/Home Decor Items for Living Room/Pooja Room - Gift Items', category: 'Home Decor', description: 'Add a decorative touch to your living room or pooja room with this gift-worthy showpiece. Its versatile style also makes a thoughtful present for colleagues and corporate occasions.', price: 599, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85', images: ['https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85'], stock: 25, material: 'Solid wood', care: 'Wipe with a damp cloth and dry immediately. Avoid soaking in water.', details: 'Each coaster is hand-carved and finished with a natural oil to enhance the wood grain.' }
];

// Map API and fallback product shapes to the fields used by the page.
function normalizeProduct(rawProduct) {
    const image = rawProduct.image || rawProduct.image_url || 'https://placehold.co/900x900/f2eee7/1f2a24?text=Handmade+Bliss';
    return { ...rawProduct, name: rawProduct.name || rawProduct.title, image, images: rawProduct.images || [image], category: rawProduct.category || 'Handmade collection', details: rawProduct.details || 'Thoughtfully made by independent artisans.' };
}

const byId = id => document.getElementById(id);
const CART_STORAGE_KEY = 'handmade-bliss-cart';
const WISHLIST_STORAGE_KEY = 'handmade-bliss-wishlist';
function readStoredItems(key) { try { const items = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(items) ? items : []; } catch { return []; } }
const state = { product: null, quantity: 1, wishlist: readStoredItems(WISHLIST_STORAGE_KEY).map(item => typeof item === 'object' ? item : { id: Number(item), name: 'Saved product', image: '', price: 0 }), cart: readStoredItems(CART_STORAGE_KEY), shoppingTab: 'cart', usingFallback: false };

function showToast(message) { const toast = byId('toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600); }
function renderGallery(product) { const list = byId('thumbnail-list'); list.innerHTML = ''; product.images.slice(0, 4).forEach((imageUrl, index) => { const button = document.createElement('button'); button.className = `thumbnail${index === 0 ? ' active' : ''}`; button.type = 'button'; button.setAttribute('aria-label', `View image ${index + 1}`); button.innerHTML = `<img src="${imageUrl}" alt="${product.name} image ${index + 1}">`; button.addEventListener('click', () => { byId('main-product-image').src = imageUrl; list.querySelectorAll('.thumbnail').forEach(item => item.classList.remove('active')); button.classList.add('active'); }); list.appendChild(button); }); }
function renderProduct(product) { state.product = product; state.quantity = 1; const stock = Number(product.stock) || 0; byId('main-product-image').src = product.image; byId('main-product-image').alt = product.name; byId('product-name').textContent = product.name; byId('product-category').textContent = product.category; byId('product-price').textContent = `₹${product.price.toLocaleString('en-IN')}`; byId('product-description').textContent = product.description; byId('product-id').textContent = `Product ID: HB-${String(product.id).padStart(3, '0')}`; byId('quantity').value = 1; byId('quantity').max = stock; byId('breadcrumb-category').textContent = product.category; byId('breadcrumb-name').textContent = product.name; byId('product-details').textContent = product.details || 'Thoughtfully made by independent artisans.'; byId('product-material').textContent = product.material || 'See product description'; byId('product-care').textContent = product.care || ''; byId('availability-heading').textContent = stock > 0 ? 'Ready to ship' : 'Currently unavailable'; byId('availability-copy').textContent = stock > 0 ? `${stock} pieces available. Your order will be carefully packed and dispatched within 2-3 business days.` : 'This piece is currently out of stock. Check back soon for the next artisan batch.'; byId('stock-message').textContent = stock > 0 ? `${stock} available` : 'Out of stock'; document.querySelector('.availability-dot').style.background = stock > 0 ? '#3cb27c' : '#e87568'; byId('add-to-cart').disabled = stock === 0; byId('cart-icon').disabled = stock === 0; byId('add-to-wishlist').disabled = false; byId('wishlist-icon').disabled = false; renderGallery(product); updateWishlistButton(); document.title = `Handmade Bliss | ${product.name}`; }
function renderSimilarProducts(products) { const currentId = state.product.id; const grid = byId('similar-grid'); grid.innerHTML = ''; products.filter(product => Number(product.id) !== Number(currentId)).slice(0, 6).forEach(rawProduct => { const product = normalizeProduct(rawProduct); const card = document.createElement('a'); card.className = 'similar-card'; card.href = `product-detail.html?id=${product.id}`; card.innerHTML = `<div class="similar-image"><img src="${product.image}" alt="${product.name}" loading="lazy"></div><h3>${product.name}</h3><p>${product.category}</p><p class="similar-price">₹${Number(product.price).toLocaleString('en-IN')}</p>`; card.addEventListener('click', event => { event.preventDefault(); history.pushState({}, '', card.href); loadPage(); window.scrollTo({ top: 0, behavior: 'smooth' }); }); grid.appendChild(card); }); }
function updateWishlistButton() { if (!state.product) return; const added = state.wishlist.some(item => Number(item.id) === Number(state.product.id)); const button = byId('add-to-wishlist'); button.classList.toggle('is-added', added); button.innerHTML = added ? '<span aria-hidden="true">&#9829;</span> Added to wishlist' : '<span aria-hidden="true">&#9825;</span> Add to wishlist'; byId('wishlist-icon').innerHTML = added ? '&#9829;' : '&#9825;'; }
function changeQuantity(amount) { const max = Number(state.product.stock) || 1; state.quantity = Math.max(1, Math.min(max, state.quantity + amount)); byId('quantity').value = state.quantity; }
function saveShoppingState() { localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart)); localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(state.wishlist)); updateCartCount(); updateWishlistButton(); renderShoppingPanel(); }
function updateCartCount() { const count = state.cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0); const badge = byId('cart-count'); badge.textContent = count; badge.hidden = count === 0; }
function createShoppingItem(item, tab) {
    const row = document.createElement('article'); row.className = 'shopping-item';
    const image = document.createElement('img'); image.src = item.image || 'https://placehold.co/100x100/f2eee7/1f2a24?text=HB'; image.alt = item.name || 'Handmade product';
    const details = document.createElement('div'); details.className = 'shopping-item-details';
    const name = document.createElement('strong'); name.textContent = item.name || 'Saved product';
    const price = document.createElement('span'); price.textContent = `₹${Number(item.price || 0).toLocaleString('en-IN')}`;
    details.append(name, price);
    if (tab === 'cart') {
        const quantity = document.createElement('div'); quantity.className = 'shopping-quantity';
        const decrease = document.createElement('button'); decrease.type = 'button'; decrease.dataset.action = 'decrease'; decrease.dataset.id = item.id; decrease.setAttribute('aria-label', 'Decrease quantity'); decrease.textContent = '-';
        const count = document.createElement('span'); count.textContent = item.quantity;
        const increase = document.createElement('button'); increase.type = 'button'; increase.dataset.action = 'increase'; increase.dataset.id = item.id; increase.setAttribute('aria-label', 'Increase quantity'); increase.textContent = '+';
        quantity.append(decrease, count, increase);
        details.appendChild(quantity);
    }
    const remove = document.createElement('button'); remove.className = 'shopping-remove'; remove.type = 'button'; remove.dataset.action = 'remove'; remove.dataset.id = item.id; remove.textContent = 'Remove';
    row.append(image, details, remove);
    return row;
}
function renderShoppingPanel() {
    const tab = state.shoppingTab;
    const isCart = tab === 'cart';
    const items = isCart ? state.cart : state.wishlist;
    byId('shopping-panel-title').textContent = isCart ? 'Your cart' : 'Your wishlist';
    byId('cart-tab').setAttribute('aria-selected', String(isCart));
    byId('wishlist-tab').setAttribute('aria-selected', String(!isCart));
    const list = byId('shopping-items'); list.replaceChildren();
    if (!items.length) {
        const empty = document.createElement('p'); empty.className = 'shopping-empty'; empty.textContent = isCart ? 'Your cart is empty.' : 'Your wishlist is empty.'; list.appendChild(empty);
    } else items.forEach(item => list.appendChild(createShoppingItem(item, tab)));
    const total = byId('cart-total');
    total.hidden = !isCart || !items.length;
    if (isCart && items.length) total.textContent = `Subtotal · ₹${state.cart.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0), 0).toLocaleString('en-IN')}`;
}
function openShoppingPanel(tab) { state.shoppingTab = tab; renderShoppingPanel(); byId('shopping-panel').hidden = false; }
function addCurrentProductToCart() {
    if (!state.product) return;
    const productId = Number(state.product.id);
    const existing = state.cart.find(item => Number(item.id) === productId);
    const stock = Number(state.product.stock) || state.quantity;
    if (existing) existing.quantity = Math.min(stock, Number(existing.quantity) + state.quantity);
    else state.cart.push({ id: productId, name: state.product.name, image: state.product.image, price: Number(state.product.price) || 0, stock, quantity: Math.min(stock, state.quantity) });
    saveShoppingState(); openShoppingPanel('cart'); showToast('Added to your cart.');
}
async function loadPage() {
    const requestedId = Number(new URLSearchParams(window.location.search).get('id')) || 1;
    try {
        const [rawProduct, products] = await Promise.all([
            fetchApi(`/api/products/${requestedId}`),
            fetchApi('/api/products?limit=100')
        ]);
        state.usingFallback = false;
        renderProduct(normalizeProduct(rawProduct));
        renderSimilarProducts(products);
    } catch (error) {
        const fallbackProduct = MOCK_PRODUCTS.find(product => product.id === requestedId) || MOCK_PRODUCTS[0];
        state.usingFallback = true;
        renderProduct(normalizeProduct(fallbackProduct));
        renderSimilarProducts(MOCK_PRODUCTS);
        showToast('Live products are unavailable; showing the local product preview.');
    }
}

initAccountPanel();
byId('decrease-quantity').addEventListener('click', () => changeQuantity(-1));
byId('increase-quantity').addEventListener('click', () => changeQuantity(1));
byId('add-to-cart').addEventListener('click', addCurrentProductToCart);
byId('cart-icon').addEventListener('click', () => openShoppingPanel('cart'));
byId('wishlist-icon').addEventListener('click', () => openShoppingPanel('wishlist'));
byId('add-to-wishlist').addEventListener('click', () => {
    if (!state.product) return;
    const productId = Number(state.product.id);
    const existingIndex = state.wishlist.findIndex(item => Number(item.id) === productId);
    const isSaved = existingIndex !== -1;
    if (isSaved) state.wishlist.splice(existingIndex, 1);
    else state.wishlist.push({ id: productId, name: state.product.name, image: state.product.image, price: Number(state.product.price) || 0 });
    saveShoppingState();
    showToast(isSaved ? 'Removed from your wishlist.' : 'Saved to your wishlist.');
});
byId('cart-tab').addEventListener('click', () => { state.shoppingTab = 'cart'; renderShoppingPanel(); });
byId('wishlist-tab').addEventListener('click', () => { state.shoppingTab = 'wishlist'; renderShoppingPanel(); });
byId('shopping-close').addEventListener('click', () => { byId('shopping-panel').hidden = true; });
byId('shopping-items').addEventListener('click', event => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const itemId = Number(button.dataset.id);
    const action = button.dataset.action;
    if (state.shoppingTab === 'cart') {
        const item = state.cart.find(entry => Number(entry.id) === itemId);
        if (!item) return;
        if (action === 'remove') state.cart = state.cart.filter(entry => Number(entry.id) !== itemId);
        else if (action === 'increase') item.quantity = Math.min(Number(item.stock) || Infinity, Number(item.quantity) + 1);
        else if (action === 'decrease') item.quantity = Math.max(1, Number(item.quantity) - 1);
    } else if (action === 'remove') state.wishlist = state.wishlist.filter(entry => Number(entry.id) !== itemId);
    saveShoppingState();
});
window.addEventListener('popstate', loadPage);
updateCartCount();
renderShoppingPanel();
loadPage();
