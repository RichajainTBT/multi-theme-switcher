import { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="product-card shadow-md rounded-lg p-4">
          <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
          <p className="text-sm">{product.description.slice(0, 100)}...</p>
          <div className="font-bold text-green-600 mt-2">${product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Product;
