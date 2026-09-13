// Example: Node.js/Express API
const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Use the cors middleware for robust CORS handling.
app.use(cors({ origin: true, credentials: true }));

// Proxy all /api requests to the deployed backend to avoid cross-origin issues.
app.use('/api', createProxyMiddleware({
  target: 'https://handmadebliss-backend-3-h5ms.onrender.com',
  changeOrigin: true,
  pathRewrite: { '^/api': '/api' },
  logLevel: 'warn'
}));

app.use(express.json());

const products = [
  {
    id: 1,
    title: "Lippan Art Wall Hanging",
    price: 299,
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=80",
    description: "A unique handmade accent crafted by skilled artisans for warm, welcoming spaces.",
    material: "Wood, clay, and mirror work",
    usage: "Home decor and gifting",
    style: "Traditional artisan design",
    dimensions: "30 x 30 cm",
    weight: "450 g",
    stock: 10,
    handmade: true
  },
  {
    id: 2,
    title: "Handcrafted Decorative Vase",
    price: 499,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80",
    description: "A handcrafted decorative vase made for warm, welcoming spaces.",
    material: "Ceramic",
    usage: "Home decor and gifting",
    style: "Contemporary handmade design",
    dimensions: "12 x 8 cm",
    weight: "650 g",
    stock: 10,
    handmade: true
  },
  {
    id: 3,
    title: "Artisan Cotton Throw",
    price: 799,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80",
    description: "A soft artisan cotton throw that adds texture and comfort to your home.",
    material: "Cotton",
    usage: "Home styling and personal use",
    style: "Woven contemporary design",
    dimensions: "140 x 200 cm",
    weight: "900 g",
    stock: 10,
    handmade: true
  },
  {
    id: 4,
    title: "Hand-painted Terracotta Planter",
    price: 399,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80",
    description: "A hand-painted terracotta planter that brings an earthy touch to your plants.",
    material: "Terracotta",
    usage: "Indoor plants and gifting",
    style: "Earthy folk-art design",
    dimensions: "16 x 16 cm",
    weight: "800 g",
    stock: 8,
    handmade: true
  },
  {
    id: 5,
    title: "Woven Jute Basket",
    price: 549,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80",
    description: "A sturdy woven basket for organizing everyday essentials with natural texture.",
    material: "Natural jute",
    usage: "Storage and home styling",
    style: "Rustic woven design",
    dimensions: "28 x 22 x 18 cm",
    weight: "500 g",
    stock: 12,
    handmade: true
  }
];

// Serve frontend static files from repository root
app.use(express.static(path.join(__dirname)));

// Root -> product.html for convenience
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'product.html'));
});

// Get product details
app.get('/api/products/:id', (req, res) => {
  const product = products.find(item => String(item.id) === String(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// Get products list
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Add to cart
app.post('/api/cart', (req, res) => {
  const { productId, quantity, purchaseType } = req.body;
  res.json({ success: true, message: `Added ${quantity} item(s)` });
});

app.listen(3000, () => console.log('API running on port 3000'));