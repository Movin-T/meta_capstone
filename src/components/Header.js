import Nav from './Nav';

const Header = () => {
  return (
    <header className="header-section">
      <div className="container">
        <img src="/logo.png" alt="Little Lemon" />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
