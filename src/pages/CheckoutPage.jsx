import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ShieldCheck, Lock, CreditCard, Truck, ArrowLeft, Check } from 'lucide-react'
import PlaqueMockup from '../components/PlaqueMockup'
import './CheckoutPage.css'

const SIZES = {
  mini: { label: 'The Mini', dimensions: '10 × 15 cm', price: 29.95 },
  standard: { label: 'The Standard', dimensions: '15 × 20 cm', price: 39.95 },
  large: { label: 'The Grand', dimensions: '20 × 30 cm', price: 54.95 },
}

function CheckoutPage() {
  const navigate = useNavigate()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [shipping, setShipping] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', zip: '', country: '',
  })
  const [payment, setPayment] = useState({
    cardNumber: '', expiry: '', cvc: '', nameOnCard: '',
  })

  useEffect(() => {
    const stored = sessionStorage.getItem('diveplaque_order')
    if (!stored) { navigate('/customize'); return }
    setOrder(JSON.parse(stored))
  }, [navigate])

  const updateShipping = (f, v) => setShipping(prev => ({ ...prev, [f]: v }))

  const updatePayment = (f, v) => {
    if (f === 'cardNumber') { v = v.replace(/\D/g, '').slice(0, 16); v = v.replace(/(\d{4})(?=\d)/g, '$1 ') }
    if (f === 'expiry') { v = v.replace(/\D/g, '').slice(0, 4); if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2) }
    if (f === 'cvc') v = v.replace(/\D/g, '').slice(0, 4)
    setPayment(prev => ({ ...prev, [f]: v }))
  }

  const shipValid = shipping.firstName && shipping.lastName && shipping.email && shipping.address && shipping.city && shipping.zip && shipping.country
  const payValid = payment.cardNumber.replace(/\s/g, '').length >= 15 && payment.expiry.length === 5 && payment.cvc.length >= 3 && payment.nameOnCard

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!shipValid || !payValid) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 2000))
    setLoading(false)
    setCompleted(true)
    sessionStorage.removeItem('diveplaque_order')
  }

  if (!order) return null

  const sizeInfo = SIZES[order.size] || SIZES.standard
  const shippingCost = 4.95
  const total = sizeInfo.price + shippingCost

  if (completed) {
    return (
      <main className="checkout-page">
        <div className="container">
          <div className="order-done">
            <div className="done-icon"><Check size={36} /></div>
            <h1>Order Confirmed</h1>
            <p className="done-order-id">Order #DP-{Math.random().toString(36).slice(2, 8).toUpperCase()}</p>
            <p className="done-desc">Thank you. We've sent a confirmation email with your order details and tracking information.</p>
            <div className="done-info">
              <div className="done-info-item"><Truck size={18} /><div><strong>Delivery</strong><span>5–7 business days</span></div></div>
              <div className="done-info-item"><ShieldCheck size={18} /><div><strong>Guarantee</strong><span>30-day money-back</span></div></div>
            </div>
            <Link to="/" className="btn btn-gold btn-lg">Return Home</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="checkout-page">
      <div className="container checkout-grid">
        <div className="checkout-form-col">
          <Link to="/customize" className="back-btn"><ArrowLeft size={14} /> Back to customizer</Link>
          <h1>Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="checkout-block">
              <h2><Truck size={18} /> Shipping</h2>
              <div className="ch-row">
                <div className="ch-field"><label>First Name *</label><input type="text" required value={shipping.firstName} onChange={e => updateShipping('firstName', e.target.value)} /></div>
                <div className="ch-field"><label>Last Name *</label><input type="text" required value={shipping.lastName} onChange={e => updateShipping('lastName', e.target.value)} /></div>
              </div>
              <div className="ch-row">
                <div className="ch-field"><label>Email *</label><input type="email" required value={shipping.email} onChange={e => updateShipping('email', e.target.value)} /></div>
                <div className="ch-field"><label>Phone</label><input type="tel" value={shipping.phone} onChange={e => updateShipping('phone', e.target.value)} /></div>
              </div>
              <div className="ch-field"><label>Address *</label><input type="text" required value={shipping.address} onChange={e => updateShipping('address', e.target.value)} /></div>
              <div className="ch-row ch-row-3">
                <div className="ch-field"><label>City *</label><input type="text" required value={shipping.city} onChange={e => updateShipping('city', e.target.value)} /></div>
                <div className="ch-field"><label>State / Province</label><input type="text" value={shipping.state} onChange={e => updateShipping('state', e.target.value)} /></div>
                <div className="ch-field"><label>ZIP *</label><input type="text" required value={shipping.zip} onChange={e => updateShipping('zip', e.target.value)} /></div>
              </div>
              <div className="ch-field">
                <label>Country *</label>
                <select required value={shipping.country} onChange={e => updateShipping('country', e.target.value)}>
                  <option value="">Select country...</option>
                  <option value="US">United States</option><option value="GB">United Kingdom</option>
                  <option value="DE">Germany</option><option value="FR">France</option>
                  <option value="ES">Spain</option><option value="IT">Italy</option>
                  <option value="NL">Netherlands</option><option value="AU">Australia</option>
                  <option value="EG">Egypt</option><option value="MV">Maldives</option>
                  <option value="TH">Thailand</option><option value="MX">Mexico</option>
                  <option value="ID">Indonesia</option><option value="PH">Philippines</option>
                  <option value="MY">Malaysia</option><option value="JP">Japan</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="checkout-block">
              <h2><CreditCard size={18} /> Payment</h2>
              <div className="ch-field"><label>Name on Card *</label><input type="text" required value={payment.nameOnCard} onChange={e => updatePayment('nameOnCard', e.target.value)} /></div>
              <div className="ch-field"><label>Card Number *</label><input type="text" placeholder="1234 5678 9012 3456" required value={payment.cardNumber} onChange={e => updatePayment('cardNumber', e.target.value)} /></div>
              <div className="ch-row">
                <div className="ch-field"><label>Expiry *</label><input type="text" placeholder="MM/YY" required value={payment.expiry} onChange={e => updatePayment('expiry', e.target.value)} /></div>
                <div className="ch-field"><label>CVC *</label><input type="text" placeholder="123" required value={payment.cvc} onChange={e => updatePayment('cvc', e.target.value)} /></div>
              </div>
              <div className="pay-secure"><Lock size={12} /><span>Encrypted and secure</span></div>
            </div>

            <button type="submit" className="btn btn-gold btn-lg btn-full" disabled={loading || !shipValid || !payValid}>
              {loading ? 'Processing...' : `Pay €${total.toFixed(2)}`}
            </button>
          </form>
        </div>

        <div className="checkout-summary-col">
          <div className="summary-card">
            <span className="summary-label">Order Summary</span>
            <div className="summary-plaque-wrap">
              <PlaqueMockup data={order} imagePreview={order.image} size={order.size} />
            </div>
            <div className="summary-lines">
              <div className="summary-line"><span>{sizeInfo.label} ({sizeInfo.dimensions})</span><strong>€{sizeInfo.price.toFixed(2)}</strong></div>
              <div className="summary-line"><span>Location: {order.location}</span></div>
              {order.maxDepth && <div className="summary-line"><span>Depth: {order.maxDepth} m</span></div>}
              <div className="summary-divider"></div>
              <div className="summary-line"><span>Shipping (worldwide)</span><strong>€{shippingCost.toFixed(2)}</strong></div>
              <div className="summary-line summary-total"><span>Total</span><strong>€{total.toFixed(2)}</strong></div>
            </div>
            <div className="summary-guarantees">
              <div className="guarantee-item"><ShieldCheck size={14} /><span>30-day guarantee</span></div>
              <div className="guarantee-item"><Truck size={14} /><span>5–7 day delivery</span></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CheckoutPage
