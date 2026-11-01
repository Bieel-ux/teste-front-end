import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const oldPrice = product.price * 1.1; // o JSON não traz preço antigo, então é um valor simulado
  const installment = product.price / 2;

  return (
    <article>
      <img src={product.photo} alt={product.productName} />
      <h3>{product.descriptionShort}</h3>
      <p><s>{formatPrice(oldPrice)}</s></p>
      <p>{formatPrice(product.price)}</p>
      <p>ou 2x de {formatPrice(installment)} sem juros</p>
      <p>Frete grátis</p>
      <button type="button" onClick={() => onSelect(product)}>Comprar</button>
    </article>
  );
}