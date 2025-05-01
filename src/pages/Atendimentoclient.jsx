import React from 'react';

export default function AtendimentoClient() {
  const vendedores = [
    { nome: 'Antonio Roni', telefone: '61983758126' },
    { nome: 'Arley Ribeiro', telefone: '61998464274' },
    { nome: 'Lucas Praça', telefone: '61999656581' }
  ];

  return (
    <div className="atendimento-page" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#f0f0f0',
      padding: '2rem',
      position: 'relative'
    }}>
      <h2>Atendimento ao Cliente</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '300px',
        background: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        {vendedores.map((vendedor, index) => (
          <a
            key={index}
            href={`https://wa.me/55${vendedor.telefone}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#333',
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              background: '#fff',
              transition: 'background 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#e0e0e0'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
          >
            <p>{vendedor.nome}</p>
            <p>{vendedor.telefone}</p>
          </a>
        ))}
      </div>
    </div>
  );
}