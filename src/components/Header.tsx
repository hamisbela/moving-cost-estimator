import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Calculator, Info, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <Home className="h-6 w-6" />
            <span className="hidden sm:inline">MovingCostEstimator.com</span>
            <span className="sm:hidden">MCE</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-blue-200">
              <Calculator className="h-5 w-5" />
              <span>Calculator</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-blue-200">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 hover:text-blue-200">
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link 
              to="/" 
              className="block py-2 hover:text-blue-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calculator className="h-5 w-5 inline mr-2" />
              Calculator
            </Link>
            <Link 
              to="/about" 
              className="block py-2 hover:text-blue-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="h-5 w-5 inline mr-2" />
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 hover:text-blue-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail className="h-5 w-5 inline mr-2" />
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;