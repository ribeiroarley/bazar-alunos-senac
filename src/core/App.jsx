import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import LoginClient from '../pages/Loginclient';
import CadastroClient from '../pages/Cadastroclient';
import AtendimentoClient from '../pages/Atendimentoclient';
import Navbar from '@components/Navbar';
import Footer from '@pages/Footer';
import { CartProvider } from '@context/CartContext';
import '@styles/global/global.css';
import '@styles/global/variables.css';

function App() {
  return (
    <BrowserRouter basename="/bazar-alunos-senac/">
      <CartProvider>
        <div className="app-wrapper">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<LoginClient />} />
              <Route path="/entrar-cadastrar" element={<CadastroClient />} />
              <Route path="/atendimento" element={<AtendimentoClient />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
