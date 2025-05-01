import { createRoot } from 'react-dom/client';
import { CartProvider } from '../context/CartContext';
import App from './App';
import '../styles/global/variables.css';
import '../styles/global/global.css';


const root = createRoot(document.getElementById('root'));

root.render(
  <CartProvider>
    <App />
  </CartProvider>
);