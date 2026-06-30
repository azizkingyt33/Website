import { useState, useEffect, useMemo } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch, FaShoppingCart, FaTrash, FaArrowLeft } from "react-icons/fa";
import ProjectPageHeader from "../components/ProjectPageHeader";
import { useCart } from "../context/CartContext";

function StoreHome() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
        setCategories(["all", ...new Set(data.map((p) => p.category))]);
      })
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    return products
      .filter((p) => category === "all" || p.category === category)
      .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
  }, [products, category, search]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-5 py-3 outline-none focus:border-accent transition-colors placeholder:text-white/30"
          />
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-full px-5 py-3 outline-none focus:border-accent capitalize"
        >
          {categories.map((c) => (
            <option key={c} value={c} className="bg-bg capitalize">
              {c}
            </option>
          ))}
        </select>
      </div>

      {loading && <p className="text-center text-white/50">Loading products...</p>}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="glass glow-border rounded-2xl p-5 flex flex-col"
          >
            <Link to={`/store/product/${p.id}`} className="flex-1">
              <div className="h-40 flex items-center justify-center mb-4 bg-white/5 rounded-xl p-4">
                <img src={p.image} alt={p.title} className="max-h-full object-contain" />
              </div>
              <p className="text-sm line-clamp-2 mb-2 font-medium">{p.title}</p>
            </Link>
            <div className="flex items-center justify-between mt-2">
              <span className="text-accent font-bold">${p.price}</span>
              <button
                onClick={() => addToCart(p)}
                className="text-xs px-3 py-2 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-transform"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

function StoreProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((r) => r.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p className="text-center text-white/50">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/store" className="inline-flex items-center gap-2 text-white/60 hover:text-accent mb-6 text-sm">
        <FaArrowLeft /> Back to Store
      </Link>
      <div className="glass rounded-3xl p-8 grid sm:grid-cols-2 gap-8 items-center">
        <div className="h-64 flex items-center justify-center bg-white/5 rounded-2xl p-6">
          <img src={product.image} alt={product.title} className="max-h-full object-contain" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-accent mb-2">{product.category}</p>
          <h2 className="text-2xl font-display font-bold mb-3">{product.title}</h2>
          <p className="text-white/60 text-sm mb-5 leading-relaxed">{product.description}</p>
          <p className="text-3xl font-bold text-accent mb-6">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="px-6 py-3 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-transform"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function StoreCart() {
  const { items, removeFromCart, updateQty, total, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto">
      <Link to="/store" className="inline-flex items-center gap-2 text-white/60 hover:text-accent mb-6 text-sm">
        <FaArrowLeft /> Continue Shopping
      </Link>
      <h2 className="text-2xl font-display font-bold mb-6">Your Cart</h2>

      {items.length === 0 ? (
        <p className="text-white/40 text-center py-10">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {items.map((i) => (
            <div key={i.id} className="glass rounded-2xl p-4 flex items-center gap-4">
              <img src={i.image} alt={i.title} className="w-14 h-14 object-contain bg-white/5 rounded-lg p-1" />
              <div className="flex-1">
                <p className="text-sm font-medium line-clamp-1">{i.title}</p>
                <p className="text-accent text-sm font-bold">${i.price}</p>
              </div>
              <input
                type="number"
                min="1"
                value={i.qty}
                onChange={(e) => updateQty(i.id, Number(e.target.value))}
                className="w-16 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-center outline-none focus:border-accent"
              />
              <button onClick={() => removeFromCart(i.id)} className="text-white/40 hover:text-accent">
                <FaTrash />
              </button>
            </div>
          ))}

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
            <p className="text-lg font-bold">Total: <span className="text-accent">${total.toFixed(2)}</span></p>
            <button onClick={clearCart} className="text-sm text-white/50 hover:text-accent">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Store() {
  const { count } = useCart();

  return (
    <div className="min-h-screen pb-20">
      <ProjectPageHeader title="Store Website" subtitle="A modern shopping experience" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-end mb-6">
          <Link
            to="/store/cart"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass glow-border"
          >
            <FaShoppingCart /> Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>

        <Routes>
          <Route index element={<StoreHome />} />
          <Route path="product/:id" element={<StoreProduct />} />
          <Route path="cart" element={<StoreCart />} />
        </Routes>
      </div>
    </div>
  );
}
