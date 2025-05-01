import { useState } from 'react';
import '../styles/pages/Home.css';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home-page">
      <h1>Bazar dos Alunos Senac</h1>
      
      <div className="products-grid">
        {currentProducts.map(product => {
          const isValidProduct =
            product &&
            product.id &&
            product.name &&
            typeof product.price === 'number' &&
            product.image &&
            product.size &&
            product.color;

          if (!isValidProduct) {
            console.warn('Produto inválido ignorado:', product);
            return null;
          }

          return <ProductCard key={product.id} product={product} />;
        })}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
