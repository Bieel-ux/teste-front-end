import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { ProductCard } from './components/ProductCard/ProductCard';
import { ProductModal } from './components/ProductModal/ProductModal';
import { fetchProducts } from './services/productService';
import type { Product } from './types/product';
import './App.scss';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <>
      <Header />
      <main className="showcase">
        <ul className="showcase__list">
          {products.map((product, index) => (
            <li key={index}>
              <ProductCard product={product} onSelect={setSelectedProduct} />
            </li>
          ))}
        </ul>
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default App;