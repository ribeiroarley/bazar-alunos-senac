import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { FaHome, FaShoppingCart, FaHeadset, FaUser } from 'react-icons/fa';
import '../styles/components/Navbar.css';

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <FaHome /> Home
      </Link>

      <Link to="/atendimento" className="nav-link">
        <FaHeadset /> Atendimento
      </Link>

      <Link to="/entrar-cadastrar" className="nav-link">
        <FaUser /> Entrar/Cadastrar
      </Link>

      <Link to="/cart" className="nav-link cart-link">
        <FaShoppingCart /> Carrinho
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </Link>
    </nav>
  );
}
