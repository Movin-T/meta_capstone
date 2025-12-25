import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/booking' },
    { name: 'Order Online', path: '/order-online' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav className="nav-section">
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`burger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>
      <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
        {navLinks.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              aria-label="On Click"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
