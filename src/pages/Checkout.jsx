import '../styles/pages/Checkout.css';
import { useCart } from '../hooks/useCart';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
    clearCart();
  };

  return (
    <div className="checkout-page">
      <h1>Finalizar Compra</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          placeholder="Nome completo"
          required
          className="checkout-input"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="checkout-input"
        />
        <input
          type="text"
          placeholder="Endereço"
          required
          className="checkout-input"
        />
        <button type="submit" className="checkout-button">Confirmar Compra</button>
      </form>
    </div>
  );
}