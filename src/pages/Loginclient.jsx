import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Loginclient.css';

export default function LoginClient() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="login-page">
      <h2>Acesse ou Crie Conta</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">Entrar</button>
      </form>
      <p className="login-register-link">
        Não tem uma conta? <Link to="/entrar-cadastrar">Crie uma conta</Link>
      </p>
    </div>
  );
}