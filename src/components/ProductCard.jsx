import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import '@styles/components/ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    // Adicionando valores padrão para size e color
    addToCart(product, product.size || 'M', product.color || 'preto', 1);
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-container">
        <img
          src={product.image}
          alt={product.name}
          className={`product-image ${isHovered ? 'zoomed' : ''}`}
          onError={(e) => {
            e.target.src = '/images/placeholder.jpg';
          }}
        />
        {isHovered && (
          <div className="quick-view">
            Usada
          </div>
        )}
      </div>
      
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="product-meta">
          <span 
            className="color-badge" 
            style={{ '--badge-color': product.color.toLowerCase() }}
          />
          <span>Tamanho: {product.size}</span>
        </div>
        <p className="price">R$ {product.price.toFixed(2)}</p>
        <button 
          onClick={handleAddToCart}
          className="add-to-cart-btn"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}