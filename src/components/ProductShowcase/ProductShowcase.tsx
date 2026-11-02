import { useState } from 'react';
import type { Product } from '../../types/product';
import { useVisibleCount } from '../../hooks/useVisibleCount';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductShowcase.scss';

const TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'];

interface ProductShowcaseProps {
  title: string;
  products: Product[];
  onSelect: (product: Product) => void;
}

export function ProductShowcase({ title, products, onSelect }: ProductShowcaseProps) {
  const [start, setStart] = useState(0);
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const visibleCount = useVisibleCount();

  const maxStart = Math.max(0, products.length - visibleCount);
  const safeStart = Math.min(start, maxStart);
  const visibleProducts = products.slice(safeStart, safeStart + visibleCount);

  return (
    <section className="showcase">
      <h2 className="showcase__title">{title}</h2>

      <ul className="showcase__tabs" role="tablist">
        {TABS.map((tab) => (
          <li key={tab} className="showcase__tab-item" role="presentation">
            <button
              type="button"
              role="tab"
              aria-selected={tab === activeTab}
              className={
                tab === activeTab
                  ? 'showcase__tab showcase__tab--active'
                  : 'showcase__tab'
              }
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <div className="showcase__carousel">
        <button
          type="button"
          className="showcase__arrow"
          aria-label="Anterior"
          disabled={safeStart === 0}
          onClick={() => setStart(Math.max(0, safeStart - 1))}
        >
          ‹
        </button>

        <ul className="showcase__list">
          {visibleProducts.map((product, index) => (
            <li key={safeStart + index}>
              <ProductCard product={product} onSelect={onSelect} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="showcase__arrow"
          aria-label="Próximo"
          disabled={safeStart === maxStart}
          onClick={() => setStart(Math.min(maxStart, safeStart + 1))}
        >
          ›
        </button>
      </div>
    </section>
  );
}