import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Cadastroclient.css';

export default function CadastroClient() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register:', { name, email, password });
  };

  return (
    <div className="cadastro-page">
      <h2>Crie sua Conta</h2>
      <form onSubmit={handleRegister} className="cadastro-form">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="cadastro-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="cadastro-input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="cadastro-input"
        />
        <button type="submit" className="cadastro-button">Registrar</button>
      </form>
      <p className="cadastro-login-link">
        Já tem uma conta? <Link to="/login">Acesse aqui</Link>
      </p>
    </div>
  );
}