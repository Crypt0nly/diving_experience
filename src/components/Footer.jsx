import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <h4><span>🤿</span> DivePlaque</h4>
            <p>Turning dive memories into premium display pieces.</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/customize">Create a Plaque</Link></li>
              <li><a href="/#products">Sizes & Pricing</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Business</h4>
            <ul>
              <li><a href="/#b2b">Dive Center Partners</a></li>
              <li><a href="/#b2b-form">Become a Partner</a></li>
              <li><a href="#">Wholesale Pricing</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 DivePlaque. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
