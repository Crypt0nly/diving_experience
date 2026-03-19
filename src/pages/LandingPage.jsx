import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Camera, PenLine, Package, Star, ChevronRight, Anchor, Globe, Users, Award, Building2, Ship, GraduationCap, QrCode, Truck, DollarSign } from 'lucide-react'
import PlaqueMockup from '../components/PlaqueMockup'
import './LandingPage.css'

function LandingPage() {
  const [partnerForm, setPartnerForm] = useState({
    name: '', email: '', center: '', location: '', type: '', volume: '', message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handlePartnerSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-tag">The original dive log plaque</span>
            <h1>Turn Your Best Dive Into a <span className="gradient-text">Display Piece</span></h1>
            <p className="hero-sub">
              Custom acrylic plaques with your dive photo, location, depth, time, and wildlife — mounted on a premium wooden stand. The perfect gift for divers.
            </p>
            <div className="hero-cta">
              <Link to="/customize" className="btn btn-primary btn-lg">
                Create Your Plaque — €39.95
                <ChevronRight size={20} />
              </Link>
              <a href="#how-it-works" className="btn btn-ghost btn-lg">See How It Works</a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars">
                <div className="avatar" style={{ background: '#0077b6' }}>SM</div>
                <div className="avatar" style={{ background: '#00b4d8' }}>AK</div>
                <div className="avatar" style={{ background: '#0096c7' }}>MV</div>
                <div className="avatar" style={{ background: '#005f8a' }}>JL</div>
              </div>
              <div className="proof-text">
                <div className="proof-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />)}
                </div>
                <span>Loved by <strong>2,400+</strong> divers worldwide</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <PlaqueMockup />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <Globe size={24} />
              <div>
                <strong>50+</strong>
                <span>Countries shipped</span>
              </div>
            </div>
            <div className="stat-item">
              <Users size={24} />
              <div>
                <strong>2,400+</strong>
                <span>Happy divers</span>
              </div>
            </div>
            <div className="stat-item">
              <Anchor size={24} />
              <div>
                <strong>150+</strong>
                <span>Partner dive centers</span>
              </div>
            </div>
            <div className="stat-item">
              <Award size={24} />
              <div>
                <strong>4.9/5</strong>
                <span>Average rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works" id="how-it-works">
        <div className="container">
          <span className="section-tag">Simple Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-sub">From your dive to your shelf in 3 simple steps</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon-wrap">
                <Camera size={32} />
              </div>
              <h3>Upload Your Photo</h3>
              <p>Choose your best underwater shot — selfie, wildlife, reef, or anything that captures the moment.</p>
            </div>
            <div className="step-connector">
              <ChevronRight size={24} />
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon-wrap">
                <PenLine size={32} />
              </div>
              <h3>Add Your Dive Stats</h3>
              <p>Enter location, max depth, dive time, water temp, and wildlife spotted. We format it beautifully.</p>
            </div>
            <div className="step-connector">
              <ChevronRight size={24} />
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon-wrap">
                <Package size={32} />
              </div>
              <h3>We Print & Ship</h3>
              <p>Printed on premium acrylic with a solid wood base. Ships worldwide in 5–7 business days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section products" id="products">
        <div className="container">
          <span className="section-tag">Our Plaques</span>
          <h2 className="section-title">Choose Your Size</h2>
          <p className="section-sub">Three sizes, one unforgettable memory</p>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image-area">
                <PlaqueMockup size="mini" />
              </div>
              <div className="product-info">
                <span className="product-badge">Compact</span>
                <h3>Mini Plaque</h3>
                <p className="product-size">10 × 15 cm</p>
                <p className="product-desc">Perfect for desks and shelves. Acrylic with wooden stand included.</p>
                <ul className="product-features">
                  <li>HD UV print on acrylic</li>
                  <li>Beech wood stand</li>
                  <li>Gift-ready packaging</li>
                </ul>
                <div className="product-price">€29.95</div>
                <Link to="/customize?size=mini" className="btn btn-secondary btn-full">Customize</Link>
              </div>
            </div>

            <div className="product-card featured">
              <div className="featured-badge">Most Popular</div>
              <div className="product-image-area">
                <PlaqueMockup size="standard" />
              </div>
              <div className="product-info">
                <span className="product-badge">Classic</span>
                <h3>Standard Plaque</h3>
                <p className="product-size">15 × 20 cm</p>
                <p className="product-desc">The classic format. Perfect balance of detail and display presence.</p>
                <ul className="product-features">
                  <li>HD UV print on acrylic</li>
                  <li>Beech wood stand</li>
                  <li>Gift-ready packaging</li>
                  <li>Free dive sticker pack</li>
                </ul>
                <div className="product-price">€39.95</div>
                <Link to="/customize?size=standard" className="btn btn-primary btn-full">Customize</Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-area">
                <PlaqueMockup size="large" />
              </div>
              <div className="product-info">
                <span className="product-badge">Premium</span>
                <h3>Large Plaque</h3>
                <p className="product-size">20 × 30 cm</p>
                <p className="product-desc">Make a statement. Ideal for living rooms, offices, and dive center walls.</p>
                <ul className="product-features">
                  <li>HD UV print on acrylic</li>
                  <li>Oak wood stand</li>
                  <li>Premium gift box</li>
                  <li>Free dive sticker pack</li>
                </ul>
                <div className="product-price">€54.95</div>
                <Link to="/customize?size=large" className="btn btn-secondary btn-full">Customize</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gallery">
        <div className="container">
          <span className="section-tag">Gallery</span>
          <h2 className="section-title">Every Dive Tells a Story</h2>
          <p className="section-sub">See what our divers are creating</p>
          <div className="gallery-grid">
            {[
              { location: 'Great Barrier Reef, Australia', stats: '32 m · 55 min · Manta ray', gradient: 'linear-gradient(135deg, #0077b6, #00b4d8)' },
              { location: 'Blue Hole, Belize', stats: '40 m · 35 min · Hammerhead shark', gradient: 'linear-gradient(135deg, #023e8a, #0096c7)' },
              { location: 'Ras Mohammed, Egypt', stats: '18 m · 62 min · Turtle, moray eel', gradient: 'linear-gradient(135deg, #005f73, #94d2bd)' },
              { location: 'South Ari Atoll, Maldives', stats: '22 m · 50 min · Whale shark', gradient: 'linear-gradient(135deg, #1b4965, #62b6cb)' },
              { location: 'Cenotes, Mexico', stats: '15 m · 45 min · Cave formations', gradient: 'linear-gradient(135deg, #004e64, #25a18e)' },
              { location: 'Sipadan, Malaysia', stats: '28 m · 52 min · Barracuda tornado', gradient: 'linear-gradient(135deg, #003049, #669bbc)' },
            ].map((item, i) => (
              <div className="gallery-item" key={i}>
                <div className="gallery-photo" style={{ background: item.gradient }}>
                  <div className="gallery-overlay">
                    <strong>{item.location}</strong>
                    <span>{item.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="section b2b" id="b2b">
        <div className="container">
          <div className="b2b-grid">
            <div className="b2b-content">
              <span className="section-tag">For Dive Centers & Resorts</span>
              <h2>Give Your Divers a Souvenir They'll <span className="gradient-text">Actually Keep</span></h2>
              <p className="b2b-intro">
                Partner with DivePlaque and offer your customers a premium, branded keepsake of their dive experience. Perfect for resort dive centers, liveaboards, and dive schools.
              </p>
              <div className="b2b-features">
                <div className="b2b-feature">
                  <div className="b2b-feature-icon"><Building2 size={20} /></div>
                  <div>
                    <strong>White-label ready</strong>
                    <span>Add your dive center logo and branding to every plaque</span>
                  </div>
                </div>
                <div className="b2b-feature">
                  <div className="b2b-feature-icon"><DollarSign size={20} /></div>
                  <div>
                    <strong>Bulk pricing from €14.95/unit</strong>
                    <span>Wholesale rates starting at 20 units. Higher volumes = better margins</span>
                  </div>
                </div>
                <div className="b2b-feature">
                  <div className="b2b-feature-icon"><QrCode size={20} /></div>
                  <div>
                    <strong>QR ordering for guests</strong>
                    <span>Guests scan, upload their photo, enter stats, and order — no work for your staff</span>
                  </div>
                </div>
                <div className="b2b-feature">
                  <div className="b2b-feature-icon"><Truck size={20} /></div>
                  <div>
                    <strong>Drop-ship worldwide</strong>
                    <span>We handle production and shipping directly to your guests</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="b2b-pricing">
              <div className="pricing-card">
                <h3>Partner Pricing</h3>
                <div className="pricing-tiers">
                  <div className="tier">
                    <span className="tier-range">20–49 units</span>
                    <span className="tier-price">€18.95 <small>/plaque</small></span>
                  </div>
                  <div className="tier">
                    <span className="tier-range">50–99 units</span>
                    <span className="tier-price">€16.95 <small>/plaque</small></span>
                  </div>
                  <div className="tier best">
                    <span className="tier-badge">Best Value</span>
                    <span className="tier-range">100+ units</span>
                    <span className="tier-price">€14.95 <small>/plaque</small></span>
                  </div>
                </div>
                <p className="pricing-note">Retail price: €39.95 — your margin: up to <strong>€25/plaque</strong></p>
                <a href="#b2b-form" className="btn btn-primary btn-full">Become a Partner</a>
                <p className="pricing-sub">Free to join · No minimums · Setup in 24h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Form */}
      <section className="section b2b-form-section" id="b2b-form">
        <div className="container-sm">
          <h2 className="section-title">Partner Application</h2>
          <p className="section-sub">Tell us about your dive center and we'll get you set up within 24 hours</p>

          {formSubmitted ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>Application Received!</h3>
              <p>We'll review your application and get back to you within 24 hours. Check your email for a confirmation.</p>
            </div>
          ) : (
            <form className="partner-form" onSubmit={handlePartnerSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="b2b-name">Contact Name *</label>
                  <input type="text" id="b2b-name" required value={partnerForm.name}
                    onChange={e => setPartnerForm({...partnerForm, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="b2b-email">Email *</label>
                  <input type="email" id="b2b-email" required value={partnerForm.email}
                    onChange={e => setPartnerForm({...partnerForm, email: e.target.value})} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="b2b-center">Dive Center Name *</label>
                  <input type="text" id="b2b-center" required value={partnerForm.center}
                    onChange={e => setPartnerForm({...partnerForm, center: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="b2b-location">Location *</label>
                  <input type="text" id="b2b-location" placeholder="e.g. Sharm El Sheikh, Egypt" required
                    value={partnerForm.location}
                    onChange={e => setPartnerForm({...partnerForm, location: e.target.value})} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="b2b-type">Business Type *</label>
                  <select id="b2b-type" required value={partnerForm.type}
                    onChange={e => setPartnerForm({...partnerForm, type: e.target.value})}>
                    <option value="">Select...</option>
                    <option value="dive-center">Independent Dive Center</option>
                    <option value="resort">Resort / Hotel Dive Center</option>
                    <option value="liveaboard">Liveaboard</option>
                    <option value="school">Dive School / Training Center</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="b2b-volume">Estimated Monthly Volume</label>
                  <select id="b2b-volume" value={partnerForm.volume}
                    onChange={e => setPartnerForm({...partnerForm, volume: e.target.value})}>
                    <option value="">Select...</option>
                    <option value="1-20">1–20 plaques/month</option>
                    <option value="20-50">20–50 plaques/month</option>
                    <option value="50-100">50–100 plaques/month</option>
                    <option value="100+">100+ plaques/month</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="b2b-message">Anything else?</label>
                <textarea id="b2b-message" rows="3" placeholder="Tell us about your needs..."
                  value={partnerForm.message}
                  onChange={e => setPartnerForm({...partnerForm, message: e.target.value})} />
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-full">Submit Partnership Application</button>
            </form>
          )}
        </div>
      </section>

      {/* Reviews */}
      <section className="section reviews" id="reviews">
        <div className="container">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Divers Are Saying</h2>
          <p className="section-sub">Real reviews from real divers</p>
          <div className="reviews-grid">
            {[
              {
                text: "Got this as a gift for my dive buddy after our trip to the Maldives. He was absolutely blown away. The print quality is insane and the wooden base is really premium.",
                author: "Sarah M.", dive: "Whale Shark dive, Maldives"
              },
              {
                text: "We run a dive center in Hurghada and started offering these to our guests. They love it — it's become our #1 upsell. Way better than a t-shirt or keychain.",
                author: "Ahmed K.", dive: "Red Sea Diving Center, Egypt"
              },
              {
                text: "I now have 4 of these from different dives. They look amazing on my shelf. Every diver who visits my apartment asks where I got them. Ordering is super easy too.",
                author: "Marco V.", dive: "Cenotes, Mexico"
              },
            ].map((review, i) => (
              <div className="review-card" key={i}>
                <div className="review-stars">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#f59e0b" color="#f59e0b" />)}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-author">
                  <div className="review-avatar">{review.author[0]}</div>
                  <div>
                    <strong>{review.author}</strong>
                    <span>{review.dive}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta-final">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Immortalize Your Dive?</h2>
            <p>Create your custom plaque in under 2 minutes. Ships worldwide.</p>
            <Link to="/customize" className="btn btn-primary btn-lg">
              Create Your Plaque — €39.95
              <ChevronRight size={20} />
            </Link>
            <p className="cta-guarantee">100% satisfaction guarantee · Free returns within 30 days</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LandingPage
