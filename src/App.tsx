import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { ProductCard } from './components/ProductCard/ProductCard';
import { ProductModal } from './components/ProductModal/ProductModal';
import { fetchProducts } from './services/productService';
import type { Product } from './types/product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <>
      <Header />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <ProductCard product={product} onSelect={setSelectedProduct} />
          </li>
        ))}
      </ul>

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