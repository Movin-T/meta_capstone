import { Link } from 'react-router-dom';

const Nav = () => {
  const link = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/booking' },
    { name: 'Order Online', path: '/order-online' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav className="nav-section">
      <ul>
        {link.map((item) => (
          <li key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
