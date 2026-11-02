import { useState, useEffect } from 'react';
import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import './ProductModal.scss'

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''
    };
  }, [onClose]);
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" aria-label="Fechar" onClick={onClose}>×</button>
        <img src={product.photo} alt={product.productName} />
        <h2 id="modal-title">{product.productName}</h2>
        <p>{formatPrice(product.price)}</p>
        <p>{product.descriptionShort}</p>

        <div>
          <button
            type="button"
            aria-label="Diminuir"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            aria-label="Aumentar"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        <button type="button">Comprar</button>
      </div>
    </div>
  );
}