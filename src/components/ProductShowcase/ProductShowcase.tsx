import { useState } from 'react';
import type { Product } from '../../types/product';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductShowcase.scss';

const VISIBLE = 4;

interface ProductShowcaseProps {
  title: string;
  products: Product[];
  onSelect: (product: Product) => void;
}

export function ProductShowcase({ title, products, onSelect }: ProductShowcaseProps) {
  const [start, setStart] = useState(0);

  const maxStart = Math.max(0, products.length - VISIBLE);
  const visibleProducts = products.slice(start, start + VISIBLE);

  return (
    <section className="showcase">
      <h2 className="showcase__title">{title}</h2>

      <div className="showcase__carousel">
        <button
          type="button"
          className="showcase__arrow"
          aria-label="Anterior"
          disabled={start === 0}
          onClick={() => setStart(Math.max(0, start - 1))}
        >
          ‹
        </button>

        <ul className="showcase__list">
          {visibleProducts.map((product, index) => (
            <li key={start + index}>
              <ProductCard product={product} onSelect={onSelect} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="showcase__arrow"
          aria-label="Próximo"
          disabled={start === maxStart}
          onClick={() => setStart(Math.min(maxStart, start + 1))}
        >
          ›
        </button>
      </div>
    </section>
  );
}