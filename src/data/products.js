export const products = Array.from({ length: 36 }, (_, i) => {
  const id = i + 1;
  const colors = ['Preta', 'Branca', 'Cinza', 'Vermelha', 'Azul', 'Verde'];
  const sizes = ['P', 'M', 'G', 'GG'];

  return {
    id,
    name: `Camiseta Estilo ${id}`,
    price: 29.90 + (id % 10), // MANTÉM COMO NÚMERO
    color: colors[id % colors.length],
    size: sizes[id % sizes.length],
    image: `/images/camisetas${id}.jpg`,
    description: `Camiseta premium edição limitada número ${id}`
  };
});
