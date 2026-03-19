import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🤿</span>
          <span className="logo-text">DivePlaque</span>
        </Link>

        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <li><a href="/#how-it-works" onClick={() => setMobileOpen(false)}>How It Works</a></li>
          <li><a href="/#products" onClick={() => setMobileOpen(false)}>Products</a></li>
          <li><a href="/#b2b" onClick={() => setMobileOpen(false)}>Dive Centers</a></li>
          <li><a href="/#reviews" onClick={() => setMobileOpen(false)}>Reviews</a></li>
          <li>
            <Link to="/customize" className="btn btn-primary nav-cta" onClick={() => setMobileOpen(false)}>
              Create Yours
            </Link>
          </li>
        </ul>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
