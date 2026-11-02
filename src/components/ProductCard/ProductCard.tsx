import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const oldPrice = product.price * 1.1; // o JSON não traz preço antigo, então é um valor simulado
  const installment = product.price / 2;

  return (
    <article className="card">
      <img className="card__image" src={product.photo} alt={product.productName} loading="lazy" />
      <h3 className="card__name">{product.descriptionShort}</h3>
      <p className="card__old-price"><s>{formatPrice(oldPrice)}</s></p>
      <p className="card__price">{formatPrice(product.price)}</p>
      <p className="card__installment">ou 2x de {formatPrice(installment)} sem juros</p>
      <p className="card__shipping">Frete grátis</p>
      <button type="button" className="card__button" onClick={() => onSelect(product)}>
        Comprar
      </button>
    </article>
  );
}