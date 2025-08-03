import React, { useEffect, useState, useContext } from 'react';
import Product from '../components/Product';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const isDarkTheme = theme === 'theme2';
  const layoutClass = isDarkTheme
    ? 'flex flex-row'
    : theme === 'theme3'
    ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'
    : 'flex flex-wrap gap-4';

  return (
   <>
     <div className="p-8 bg-gradient-to-r from-blue-100 to-purple-100 text-center rounded-lg shadow-lg welcome-section m-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome To Theme Store
            </h1>
            <p className="text-lg md:text-xl mb-4">
                Your one-stop shop for everything!
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
                Shop Now
            </button>
     </div>
     <div className="main-layout">
        {isDarkTheme && (
        <aside className="w-64 min-h-screen bg-gray-800 text-white p-4 rounded-md">
          <h2 className="text-lg font-bold mb-4">Sidebar</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">All Products</a></li>
            <li><a href="#" className="hover:text-gray-300">Categories</a></li>
            <li><a href="#" className="hover:text-gray-300">Offers</a></li>
          </ul>
        </aside>
      )}
      <div className="flex-row">
        {products.map(product => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
    </> 
  );
};

export default Home;
