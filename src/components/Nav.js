const Nav = () => {
  const link = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Order Online', path: '/order-online' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav>
      <ul>
        {link.map((item) => (
          <li key={item.name}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
