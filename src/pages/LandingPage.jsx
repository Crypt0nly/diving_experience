import { Link } from 'react-router-dom'
import { ArrowRight, Star, ChevronRight } from 'lucide-react'
import './LandingPage.css'

const PRODUCT_IMAGES = {
  hero: '/images/product-hero.jpg',
  reef: '/images/product-reef.jpg',
  flatlay: '/images/product-flatlay.jpg',
}

function LandingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-ambient">
          <div className="ambient-orb ambient-1"></div>
          <div className="ambient-orb ambient-2"></div>
        </div>
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-label">Premium Dive Keepsakes</span>
            <h1 className="hero-title">
              Your Dive.<br />
              <span className="hero-italic">Immortalized.</span>
            </h1>
            <p className="hero-desc">
              Handcrafted acrylic plaques with your dive photo, location, depth,
              and wildlife — mounted on premium hardwood. A luxury keepsake for
              every dive worth remembering.
            </p>
            <div className="hero-actions">
              <Link to="/customize" className="btn btn-gold btn-lg">
                Create Your Plaque
                <ArrowRight size={18} />
              </Link>
              <a href="#collection" className="btn btn-outline btn-lg">View Collection</a>
            </div>
            <div className="hero-trust">
              <div className="trust-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#c9a55c" color="#c9a55c" />)}
              </div>
              <span>Trusted by 2,400+ divers across 50 countries</span>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-frame">
              <img src={PRODUCT_IMAGES.hero} alt="DivePlaque - Fakarava French Polynesia dive log plaque on premium walnut stand" />
              <div className="hero-image-glow"></div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Statement */}
      <section className="section statement">
        <div className="container-narrow">
          <p className="statement-text">
            "We don't sell acrylic. We turn <em>your best dive</em> into a piece
            you'll display for a lifetime."
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section process" id="process">
        <div className="container">
          <span className="section-label">The Process</span>
          <h2 className="section-title">From Ocean to Display</h2>
          <div className="divider"></div>
          <p className="section-sub">Three steps. Two minutes. One unforgettable keepsake.</p>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num">01</div>
              <div className="step-line"></div>
              <h3>Upload Your Photo</h3>
              <p>Choose your best underwater moment — a selfie with a whale shark, a reef panorama, or a buddy shot at depth.</p>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <div className="step-line"></div>
              <h3>Add Your Dive Data</h3>
              <p>Enter your location, maximum depth, dive time, water temperature, and the wildlife you encountered.</p>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <div className="step-line"></div>
              <h3>We Craft & Ship</h3>
              <p>UV-printed on optical-grade acrylic, mounted on premium hardwood. Delivered worldwide in 5–7 business days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="section collection" id="collection">
        <div className="container">
          <span className="section-label">The Collection</span>
          <h2 className="section-title">Choose Your Format</h2>
          <div className="divider"></div>
          <p className="section-sub">Each plaque is individually crafted with UV-resistant inks on optical-grade acrylic.</p>

          <div className="collection-grid">
            {/* Mini */}
            <div className="collection-item">
              <div className="item-image">
                <img src={PRODUCT_IMAGES.reef} alt="Mini DivePlaque - Great Barrier Reef turtle plaque" />
              </div>
              <div className="item-details">
                <span className="item-label">Compact</span>
                <h3>The Mini</h3>
                <p className="item-dimensions">10 × 15 cm</p>
                <p className="item-desc">Perfect for desks and nightstands. Beech wood base with gift-ready packaging.</p>
                <ul className="item-features">
                  <li>HD UV print on acrylic</li>
                  <li>Beech wood stand</li>
                  <li>Gift-ready packaging</li>
                </ul>
                <div className="item-footer">
                  <span className="item-price">€29<sup>95</sup></span>
                  <Link to="/customize?size=mini" className="btn btn-outline">
                    Customize <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Standard */}
            <div className="collection-item featured">
              <div className="featured-tag">Most Popular</div>
              <div className="item-image">
                <img src={PRODUCT_IMAGES.hero} alt="Standard DivePlaque - Fakarava dive plaque on walnut stand" />
              </div>
              <div className="item-details">
                <span className="item-label">Classic</span>
                <h3>The Standard</h3>
                <p className="item-dimensions">15 × 20 cm</p>
                <p className="item-desc">The signature format. The perfect balance of detail and display presence on a walnut base.</p>
                <ul className="item-features">
                  <li>HD UV print on acrylic</li>
                  <li>Walnut wood stand</li>
                  <li>Gift-ready packaging</li>
                  <li>Dive sticker collection</li>
                </ul>
                <div className="item-footer">
                  <span className="item-price">€39<sup>95</sup></span>
                  <Link to="/customize?size=standard" className="btn btn-gold">
                    Customize <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Large */}
            <div className="collection-item">
              <div className="item-image">
                <img src={PRODUCT_IMAGES.flatlay} alt="Large DivePlaque - flat lay product shot" />
              </div>
              <div className="item-details">
                <span className="item-label">Statement</span>
                <h3>The Grand</h3>
                <p className="item-dimensions">20 × 30 cm</p>
                <p className="item-desc">A commanding display piece for living rooms, offices, and dive center walls. Oak base.</p>
                <ul className="item-features">
                  <li>HD UV print on acrylic</li>
                  <li>Oak wood stand</li>
                  <li>Premium gift box</li>
                  <li>Dive sticker collection</li>
                </ul>
                <div className="item-footer">
                  <span className="item-price">€54<sup>95</sup></span>
                  <Link to="/customize?size=large" className="btn btn-outline">
                    Customize <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gallery" id="gallery">
        <div className="container">
          <span className="section-label">The Gallery</span>
          <h2 className="section-title">Every Dive Tells a Story</h2>
          <div className="divider"></div>
          <p className="section-sub">Real plaques, real dives, real memories.</p>

          <div className="gallery-mosaic">
            {[
              { location: 'Great Barrier Reef', country: 'Australia', stats: '32 m · 55 min · Manta ray', gradient: 'linear-gradient(135deg, #064e3b, #0f766e)' },
              { location: 'Blue Hole', country: 'Belize', stats: '40 m · 35 min · Hammerhead', gradient: 'linear-gradient(135deg, #0c4a6e, #0ea5e9)' },
              { location: 'Ras Mohammed', country: 'Egypt', stats: '18 m · 62 min · Turtle, moray eel', gradient: 'linear-gradient(135deg, #1e3a5f, #3b82f6)' },
              { location: 'South Ari Atoll', country: 'Maldives', stats: '22 m · 50 min · Whale shark', gradient: 'linear-gradient(135deg, #134e4a, #14b8a6)' },
              { location: 'Cenotes', country: 'Mexico', stats: '15 m · 45 min · Cave formations', gradient: 'linear-gradient(135deg, #3f3f46, #71717a)' },
              { location: 'Sipadan', country: 'Malaysia', stats: '28 m · 52 min · Barracuda tornado', gradient: 'linear-gradient(135deg, #1e3a5f, #2563eb)' },
            ].map((item, i) => (
              <div className={`gallery-tile tile-${i + 1}`} key={i}>
                <div className="tile-bg" style={{ background: item.gradient }}></div>
                <div className="tile-content">
                  <span className="tile-country">{item.country}</span>
                  <h4>{item.location}</h4>
                  <p>{item.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Words from Our Divers</h2>
          <div className="divider"></div>

          <div className="testimonial-grid">
            {[
              {
                text: "Got this as a gift for my dive buddy after our Maldives trip. He was absolutely blown away. The print quality is insane and the walnut base feels truly premium.",
                author: "Sarah M.", context: "Whale Shark dive, Maldives"
              },
              {
                text: "We run a dive center in Hurghada and started offering these to our guests. It's become our #1 upsell — way more meaningful than a t-shirt or keychain.",
                author: "Ahmed K.", context: "Red Sea Diving Center, Egypt"
              },
              {
                text: "I now have four of these from different dives. They look stunning on my shelf. Every diver who visits asks where I got them. The ordering process took two minutes.",
                author: "Marco V.", context: "Cenotes, Mexico"
              },
            ].map((review, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-quote">"</div>
                <p>{review.text}</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">{review.author[0]}</div>
                  <div>
                    <strong>{review.author}</strong>
                    <span>{review.context}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Teaser */}
      <section className="section b2b-teaser">
        <div className="container">
          <div className="b2b-teaser-box">
            <div className="b2b-teaser-content">
              <span className="section-label" style={{ textAlign: 'left' }}>For Dive Centers & Resorts</span>
              <h2>Offer Your Guests a Souvenir Worth Keeping</h2>
              <p>
                White-label plaques with your branding. Bulk pricing from €14.95/unit.
                QR-based guest ordering. Drop-ship worldwide. Zero effort for your staff.
              </p>
              <Link to="/partners" className="btn btn-gold">
                Learn About Partnerships
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="b2b-teaser-stats">
              <div className="b2b-stat">
                <span className="b2b-stat-num">150+</span>
                <span className="b2b-stat-label">Partner Centers</span>
              </div>
              <div className="b2b-stat">
                <span className="b2b-stat-num">€25</span>
                <span className="b2b-stat-label">Margin per Plaque</span>
              </div>
              <div className="b2b-stat">
                <span className="b2b-stat-num">24h</span>
                <span className="b2b-stat-label">Partner Setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta">
        <div className="container-narrow">
          <span className="section-label">Ready?</span>
          <h2 className="cta-title">Your Next Dive Deserves to Be Remembered</h2>
          <div className="divider"></div>
          <p className="cta-desc">Create your custom plaque in under two minutes. Shipped worldwide with a 30-day satisfaction guarantee.</p>
          <Link to="/customize" className="btn btn-gold btn-lg">
            Create Your Plaque — From €29.95
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default LandingPage
