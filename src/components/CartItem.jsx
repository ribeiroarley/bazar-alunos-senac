import { useCart } from '../hooks/useCart';
import '../styles/pages/CartItem.css';

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img 
        src={item.image} 
        alt={item.name}
        className="cart-item-image"
        onError={(e) => {
          e.target.src = '/images/placeholder.jpg';
        }}
      />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <div className="item-meta">
          <span>Cor: {item.color}</span>
          <span>Tamanho: {item.size}</span>
          <span>Quantidade: {item.quantity}</span>
        </div>
        <p className="item-price">R$ {(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button 
        onClick={() => removeFromCart(item.id, item.size)}
        className="remove-item-btn"
      >
        ×
      </button>
    </div>
  );
}