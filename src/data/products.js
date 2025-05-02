export const products = Array.from({ length: 36 }, (_, i) => {
  const id = i + 1;
  const sizes = ['P', 'M', 'G', 'GG'];

  return {
    id,
    name: `Camiseta Estilo ${id}`,
    price: 29.90 + (id % 10),
    size: sizes[id % sizes.length],
    image: `${import.meta.env.BASE_URL}images/camisetas${id}.jpg`,
    description: `Camiseta premium edição limitada número ${id}`
  };
});
