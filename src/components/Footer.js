const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <img src="logo.png" alt="Little Lemon" className="footer-logo" />
        </div>

        <div className="footer-section">
          <h3>Doormat Navigation</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order-online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Address: 123 Little Lemon St, Chicago, IL</li>
            <li>Phone: (555) 123-4567</li>
            <li>Email: info@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Social Media Links</h3>
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
    </footer>
  );
};

export default Footer;
