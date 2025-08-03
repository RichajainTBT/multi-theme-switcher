import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (e) => setTheme(e.target.value);

  return (
    <header className="flex justify-between items-center p-4 shadow-md dark:bg-gray-800">
      <h1 className="text-xl font-bold">Multi Theme App</h1>
      <nav className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
      <select value={theme} onChange={handleChange} className="ml-4 p-1 border rounded">
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
    </header>
  );
};

export default Header;
