import { useState } from 'react'
import { Building2, QrCode, Truck, DollarSign, Globe, Users, ArrowRight, Check, Mail } from 'lucide-react'
import './PartnersPage.css'

function PartnersPage() {
  const [form, setForm] = useState({
    name: '', email: '', center: '', location: '', type: '', volume: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="partners-page">
      {/* Hero */}
      <section className="partners-hero">
        <div className="partners-hero-ambient">
          <div className="ambient-orb ambient-p1"></div>
          <div className="ambient-orb ambient-p2"></div>
        </div>
        <div className="container-narrow partners-hero-content">
          <span className="section-label">B2B & B2E Partnerships</span>
          <h1>A Better Souvenir<br />for <span className="hero-italic">Your Guests</span></h1>
          <p>
            Partner with DivePlaque and offer every diver a premium, branded keepsake
            of their experience. White-label ready. Drop-shipped worldwide. Zero
            operational burden.
          </p>
          <a href="#apply" className="btn btn-gold btn-lg">
            Apply to Partner
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Value Props */}
      <section className="section partners-value">
        <div className="container">
          <span className="section-label">Why Partner With Us</span>
          <h2 className="section-title">Built for Dive Centers</h2>
          <div className="divider"></div>
          <p className="section-sub">
            Whether you're an independent dive center, a resort, or a liveaboard —
            DivePlaque fits seamlessly into your guest experience.
          </p>

          <div className="value-grid">
            <div className="value-card">
              <div className="value-icon"><Building2 size={28} /></div>
              <h3>White-Label Branding</h3>
              <p>Your dive center logo engraved on every plaque. Your brand, our craft. Guests remember <em>your</em> center every time they look at their shelf.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><QrCode size={28} /></div>
              <h3>QR Guest Ordering</h3>
              <p>Display a QR code at your front desk. Guests scan, upload their dive photo, enter their stats, and order — no work for your staff whatsoever.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Truck size={28} /></div>
              <h3>Drop-Ship Worldwide</h3>
              <p>We handle everything — production, quality control, packaging, and shipping directly to your guests' home addresses in 50+ countries.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><DollarSign size={28} /></div>
              <h3>High-Margin Revenue</h3>
              <p>With wholesale pricing from €14.95 and a retail price of €39.95, you earn up to €25 per plaque with absolutely no inventory risk.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Globe size={28} /></div>
              <h3>Any Location, Any Dive</h3>
              <p>Red Sea, Maldives, Caribbean, Southeast Asia — our plaques work for every destination and every dive type. Universal appeal.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Users size={28} /></div>
              <h3>Revenue Share Model</h3>
              <p>Earn a commission on every plaque your guests order through your unique partner link. Passive revenue from every dive you run.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section partners-pricing">
        <div className="container">
          <span className="section-label">Wholesale Pricing</span>
          <h2 className="section-title">Pricing That Works for You</h2>
          <div className="divider"></div>
          <p className="section-sub">Volume-based pricing with no minimums to start. The more you order, the more you earn.</p>

          <div className="pricing-table">
            <div className="pricing-tier">
              <span className="tier-name">Starter</span>
              <span className="tier-volume">20–49 plaques</span>
              <div className="tier-price-wrap">
                <span className="tier-price-value">€18<sup>95</sup></span>
                <span className="tier-price-unit">per plaque</span>
              </div>
              <span className="tier-margin">Your margin: ~€21/plaque</span>
            </div>

            <div className="pricing-tier tier-highlighted">
              <span className="tier-badge">Recommended</span>
              <span className="tier-name">Growth</span>
              <span className="tier-volume">50–99 plaques</span>
              <div className="tier-price-wrap">
                <span className="tier-price-value">€16<sup>95</sup></span>
                <span className="tier-price-unit">per plaque</span>
              </div>
              <span className="tier-margin">Your margin: ~€23/plaque</span>
            </div>

            <div className="pricing-tier">
              <span className="tier-name">Enterprise</span>
              <span className="tier-volume">100+ plaques</span>
              <div className="tier-price-wrap">
                <span className="tier-price-value">€14<sup>95</sup></span>
                <span className="tier-price-unit">per plaque</span>
              </div>
              <span className="tier-margin">Your margin: ~€25/plaque</span>
            </div>
          </div>

          <p className="pricing-note">
            Retail price: €39.95 · No minimum commitment · Free to join · Cancel anytime
          </p>
        </div>
      </section>

      {/* How it works for partners */}
      <section className="section partners-how">
        <div className="container">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Get Started in 24 Hours</h2>
          <div className="divider"></div>

          <div className="how-steps">
            <div className="how-step">
              <div className="how-num">01</div>
              <h3>Apply</h3>
              <p>Fill out the form below. We review and approve partners within 24 hours.</p>
            </div>
            <div className="how-connector"></div>
            <div className="how-step">
              <div className="how-num">02</div>
              <h3>Setup</h3>
              <p>We create your white-label page, generate your QR code, and send your starter kit.</p>
            </div>
            <div className="how-connector"></div>
            <div className="how-step">
              <div className="how-num">03</div>
              <h3>Earn</h3>
              <p>Display the QR code. Guests order. We produce and ship. You earn per plaque.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section partners-apply" id="apply">
        <div className="container-narrow">
          <span className="section-label">Get Started</span>
          <h2 className="section-title">Partner Application</h2>
          <div className="divider"></div>
          <p className="section-sub">Tell us about your dive center and we'll have you set up within 24 hours.</p>

          {submitted ? (
            <div className="apply-success">
              <div className="success-check"><Check size={36} /></div>
              <h3>Application Received</h3>
              <p>Thank you for your interest. We'll review your application and respond within 24 hours.</p>
              <div className="success-contact">
                <Mail size={16} />
                <span>Check your email for a confirmation</span>
              </div>
            </div>
          ) : (
            <form className="apply-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Contact Name *</label>
                  <input type="text" required value={form.name} onChange={e => updateField('name', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" required value={form.email} onChange={e => updateField('email', e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Dive Center Name *</label>
                  <input type="text" required value={form.center} onChange={e => updateField('center', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Location *</label>
                  <input type="text" placeholder="e.g. Sharm El Sheikh, Egypt" required value={form.location} onChange={e => updateField('location', e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Business Type *</label>
                  <select required value={form.type} onChange={e => updateField('type', e.target.value)}>
                    <option value="">Select...</option>
                    <option value="dive-center">Independent Dive Center</option>
                    <option value="resort">Resort / Hotel Dive Center</option>
                    <option value="liveaboard">Liveaboard</option>
                    <option value="school">Dive School / Training Center</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Estimated Monthly Volume</label>
                  <select value={form.volume} onChange={e => updateField('volume', e.target.value)}>
                    <option value="">Select...</option>
                    <option value="1-20">1–20 plaques/month</option>
                    <option value="20-50">20–50 plaques/month</option>
                    <option value="50-100">50–100 plaques/month</option>
                    <option value="100+">100+ plaques/month</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Tell us about your dive center and what you're looking for..." value={form.message} onChange={e => updateField('message', e.target.value)} />
              </div>
              <button type="submit" className="btn btn-gold btn-lg btn-full">Submit Application</button>
              <p className="apply-note">No commitment required. We respond within 24 hours.</p>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default PartnersPage
