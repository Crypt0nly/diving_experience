import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
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
          <span className="logo-mark">DP</span>
          <div className="logo-text">
            <span className="logo-name">DivePlaque</span>
            <span className="logo-tagline">est. 2024</span>
          </div>
        </Link>

        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <li><a href="/#collection" onClick={() => setMobileOpen(false)}>Collection</a></li>
          <li><a href="/#process" onClick={() => setMobileOpen(false)}>Process</a></li>
          <li><a href="/#gallery" onClick={() => setMobileOpen(false)}>Gallery</a></li>
          <li><Link to="/partners" onClick={() => setMobileOpen(false)}>Partners</Link></li>
          <li>
            <Link to="/customize" className="btn btn-gold nav-cta" onClick={() => setMobileOpen(false)}>
              Create Yours
            </Link>
          </li>
        </ul>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
