import '../styles/pages/Cart.css';
import { useCart } from '../hooks/useCart';

export default function Cart() {
  const { cart, removeFromCart, clearCart, totalItems } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h1>Seu Carrinho ({totalItems} itens)</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Seu carrinho está vazio</p>
          <a href="/" className="continue-shopping">Continuar Comprando</a>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <div className="item-meta">
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
            ))}
          </div>

          <div className="cart-summary">
            <h3>Resumo do Pedido</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Frete</span>
              <span>Grátis</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Finalizar Compra</button>
            <button 
              onClick={clearCart}
              className="clear-cart-btn"
            >
              Limpar Carrinho
            </button>
          </div>
        </>
      )}
    </div>
  );
}
