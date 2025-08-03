import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
  return (
    <footer className="text-center items-center p-4 shadow-md dark:bg-gray-800">
          <div className="text-l font-bold mb-3">Multi Theme App</div>
          <nav className="foooter-links">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
      </footer>
  )
}

export default Footer