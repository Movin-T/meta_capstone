import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <img src="/logo.png" alt="Little Lemon" className="footer-logo" />
          </div>

          <div className="footer-column">
            <h4>Doormat Navigation</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/booking">Reservations</Link>
              </li>
              <li>
                <Link to="/order-online">Order Online</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>Address: 123 Little Lemon St, Chicago, IL</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@littlelemon.com</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Social Media Links</h4>
            <ul>
              <li>
                <a
                  href="https://facebook.com/littlelemon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/littlelemon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/littlelemon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Little Lemon Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
