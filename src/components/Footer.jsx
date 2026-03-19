import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-mark">DP</span>
              <div className="logo-text">
                <span className="logo-name">DivePlaque</span>
                <span className="logo-tagline">est. 2024</span>
              </div>
            </div>
            <p>Handcrafted acrylic dive log plaques, mounted on premium hardwood. Every piece tells the story of a dive worth remembering.</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/customize">Create a Plaque</Link></li>
              <li><a href="/#collection">Collection</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Partners</h4>
            <ul>
              <li><Link to="/partners">For Dive Centers</Link></li>
              <li><Link to="/partners#apply">Become a Partner</Link></li>
              <li><a href="#">Wholesale</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>&copy; 2026 DivePlaque. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
