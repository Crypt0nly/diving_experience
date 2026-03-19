import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ShieldCheck, Lock, CreditCard, Truck, ArrowLeft, Check } from 'lucide-react'
import PlaqueMockup from '../components/PlaqueMockup'
import './CheckoutPage.css'

const SIZES = {
  mini: { label: 'Mini', dimensions: '10 × 15 cm', price: 29.95 },
  standard: { label: 'Standard', dimensions: '15 × 20 cm', price: 39.95 },
  large: { label: 'Large', dimensions: '20 × 30 cm', price: 54.95 },
}

function CheckoutPage() {
  const navigate = useNavigate()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [shippingData, setShippingData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', zip: '', country: '',
  })
  const [paymentData, setPaymentData] = useState({
    cardNumber: '', expiry: '', cvc: '', nameOnCard: '',
  })

  useEffect(() => {
    const stored = sessionStorage.getItem('diveplaque_order')
    if (!stored) {
      navigate('/customize')
      return
    }
    setOrder(JSON.parse(stored))
  }, [navigate])

  const updateShipping = (field, value) => {
    setShippingData(prev => ({ ...prev, [field]: value }))
  }

  const updatePayment = (field, value) => {
    if (field === 'cardNumber') {
      value = value.replace(/\D/g, '').slice(0, 16)
      value = value.replace(/(\d{4})(?=\d)/g, '$1 ')
    }
    if (field === 'expiry') {
      value = value.replace(/\D/g, '').slice(0, 4)
      if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2)
    }
    if (field === 'cvc') {
      value = value.replace(/\D/g, '').slice(0, 4)
    }
    setPaymentData(prev => ({ ...prev, [field]: value }))
  }

  const isShippingValid = shippingData.firstName && shippingData.lastName && shippingData.email && shippingData.address && shippingData.city && shippingData.zip && shippingData.country
  const isPaymentValid = paymentData.cardNumber.replace(/\s/g, '').length >= 15 && paymentData.expiry.length === 5 && paymentData.cvc.length >= 3 && paymentData.nameOnCard

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isShippingValid || !isPaymentValid) return
    setLoading(true)
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
    setCompleted(true)
    sessionStorage.removeItem('diveplaque_order')
  }

  if (!order) return null

  const sizeInfo = SIZES[order.size] || SIZES.standard
  const shipping = 4.95
  const total = sizeInfo.price + shipping

  if (completed) {
    return (
      <main className="checkout-page">
        <div className="container">
          <div className="order-complete">
            <div className="complete-icon"><Check size={40} /></div>
            <h1>Order Confirmed!</h1>
            <p className="complete-order-id">Order #DP-{Math.random().toString(36).slice(2, 8).toUpperCase()}</p>
            <p>Thank you for your order! We've sent a confirmation email with your order details.</p>
            <div className="complete-details">
              <div className="complete-detail">
                <Truck size={20} />
                <div>
                  <strong>Estimated Delivery</strong>
                  <span>5–7 business days</span>
                </div>
              </div>
              <div className="complete-detail">
                <ShieldCheck size={20} />
                <div>
                  <strong>Quality Guarantee</strong>
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
            <Link to="/" className="btn btn-primary btn-lg">Back to Home</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="checkout-page">
      <div className="container checkout-container">
        {/* Left: Form */}
        <div className="checkout-form">
          <Link to="/customize" className="back-link">
            <ArrowLeft size={16} /> Back to customizer
          </Link>
          <h1>Checkout</h1>

          <form onSubmit={handleSubmit}>
            {/* Shipping */}
            <div className="checkout-section">
              <h2><Truck size={20} /> Shipping Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" required value={shippingData.firstName}
                    onChange={e => updateShipping('firstName', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" required value={shippingData.lastName}
                    onChange={e => updateShipping('lastName', e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" required value={shippingData.email}
                    onChange={e => updateShipping('email', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" value={shippingData.phone}
                    onChange={e => updateShipping('phone', e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label>Address *</label>
                <input type="text" required value={shippingData.address}
                  onChange={e => updateShipping('address', e.target.value)} />
              </div>
              <div className="form-row form-row-3">
                <div className="form-group">
                  <label>City *</label>
                  <input type="text" required value={shippingData.city}
                    onChange={e => updateShipping('city', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>State / Province</label>
                  <input type="text" value={shippingData.state}
                    onChange={e => updateShipping('state', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>ZIP / Postal Code *</label>
                  <input type="text" required value={shippingData.zip}
                    onChange={e => updateShipping('zip', e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label>Country *</label>
                <select required value={shippingData.country}
                  onChange={e => updateShipping('country', e.target.value)}>
                  <option value="">Select country...</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="ES">Spain</option>
                  <option value="IT">Italy</option>
                  <option value="NL">Netherlands</option>
                  <option value="AU">Australia</option>
                  <option value="EG">Egypt</option>
                  <option value="MV">Maldives</option>
                  <option value="TH">Thailand</option>
                  <option value="MX">Mexico</option>
                  <option value="ID">Indonesia</option>
                  <option value="PH">Philippines</option>
                  <option value="MY">Malaysia</option>
                  <option value="JP">Japan</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Payment */}
            <div className="checkout-section">
              <h2><CreditCard size={20} /> Payment Details</h2>
              <div className="form-group">
                <label>Name on Card *</label>
                <input type="text" required value={paymentData.nameOnCard}
                  onChange={e => updatePayment('nameOnCard', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Card Number *</label>
                <input type="text" placeholder="1234 5678 9012 3456" required value={paymentData.cardNumber}
                  onChange={e => updatePayment('cardNumber', e.target.value)} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry *</label>
                  <input type="text" placeholder="MM/YY" required value={paymentData.expiry}
                    onChange={e => updatePayment('expiry', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>CVC *</label>
                  <input type="text" placeholder="123" required value={paymentData.cvc}
                    onChange={e => updatePayment('cvc', e.target.value)} />
                </div>
              </div>
              <div className="payment-secure">
                <Lock size={14} />
                <span>Your payment information is encrypted and secure</span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-full" disabled={loading || !isShippingValid || !isPaymentValid}>
              {loading ? (
                <span className="loading-spinner">Processing...</span>
              ) : (
                <>Pay €{total.toFixed(2)}</>
              )}
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="checkout-summary">
          <div className="summary-sticky">
            <h2>Order Summary</h2>
            <div className="summary-plaque">
              <PlaqueMockup data={order} imagePreview={order.image} size={order.size} />
            </div>
            <div className="summary-details">
              <div className="summary-line">
                <span>DivePlaque — {sizeInfo.label} ({sizeInfo.dimensions})</span>
                <strong>€{sizeInfo.price.toFixed(2)}</strong>
              </div>
              <div className="summary-line">
                <span>Location: {order.location}</span>
              </div>
              {order.maxDepth && <div className="summary-line"><span>Depth: {order.maxDepth} m</span></div>}
              {order.diveTime && <div className="summary-line"><span>Time: {order.diveTime} min</span></div>}
              <div className="summary-divider"></div>
              <div className="summary-line">
                <span>Shipping (worldwide)</span>
                <strong>€{shipping.toFixed(2)}</strong>
              </div>
              <div className="summary-line total">
                <span>Total</span>
                <strong>€{total.toFixed(2)}</strong>
              </div>
            </div>
            <div className="summary-guarantees">
              <div className="guarantee">
                <ShieldCheck size={16} />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="guarantee">
                <Truck size={16} />
                <span>Ships in 5–7 business days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CheckoutPage
