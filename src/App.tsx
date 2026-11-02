import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';
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
      <main>
        <ProductShowcase
          title="Produtos relacionados"
          products={products}
          onSelect={setSelectedProduct}
        />
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