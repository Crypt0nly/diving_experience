import { useState, useRef, useCallback } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Upload, X, ChevronRight, ShieldCheck } from 'lucide-react'
import PlaqueMockup from '../components/PlaqueMockup'
import './CustomizePage.css'

const SIZES = {
  mini: { label: 'Mini', dimensions: '10 × 15 cm', price: 29.95 },
  standard: { label: 'Standard', dimensions: '15 × 20 cm', price: 39.95 },
  large: { label: 'Large', dimensions: '20 × 30 cm', price: 54.95 },
}

function CustomizePage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const initialSize = searchParams.get('size') || 'standard'

  const [selectedSize, setSelectedSize] = useState(initialSize)
  const [imagePreview, setImagePreview] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [formData, setFormData] = useState({
    location: '',
    maxDepth: '',
    diveTime: '',
    waterTemp: '',
    wildlife: '',
  })
  const [step, setStep] = useState(1)

  const handleImageUpload = useCallback((e) => {
    const file = e.target.files[0]
    if (!file) return
    if (!file.type.startsWith('image/')) return
    setImageFile(file)
    const reader = new FileReader()
    reader.onload = (ev) => setImagePreview(ev.target.result)
    reader.readAsDataURL(file)
  }, [])

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    e.currentTarget.classList.add('drag-over')
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.currentTarget.classList.remove('drag-over')
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.currentTarget.classList.remove('drag-over')
    const file = e.dataTransfer.files[0]
    if (!file || !file.type.startsWith('image/')) return
    setImageFile(file)
    const reader = new FileReader()
    reader.onload = (ev) => setImagePreview(ev.target.result)
    reader.readAsDataURL(file)
  }, [])

  const removeImage = () => {
    setImagePreview(null)
    setImageFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const canProceedStep1 = imagePreview !== null
  const canProceedStep2 = formData.location.trim() !== ''

  const handleCheckout = () => {
    const orderData = {
      size: selectedSize,
      price: SIZES[selectedSize].price,
      image: imagePreview,
      ...formData,
    }
    sessionStorage.setItem('diveplaque_order', JSON.stringify(orderData))
    navigate('/checkout')
  }

  return (
    <main className="customize-page">
      <div className="container customize-container">
        {/* Left: Form */}
        <div className="customize-form">
          <div className="customize-header">
            <h1>Create Your Plaque</h1>
            <p>Customize your dive log plaque in just a few steps</p>
          </div>

          {/* Progress */}
          <div className="progress-bar">
            {[1, 2, 3].map(s => (
              <div key={s} className={`progress-step ${step >= s ? 'active' : ''} ${step === s ? 'current' : ''}`}>
                <div className="progress-dot">{s}</div>
                <span>{s === 1 ? 'Photo' : s === 2 ? 'Details' : 'Size'}</span>
              </div>
            ))}
          </div>

          {/* Step 1: Photo Upload */}
          {step === 1 && (
            <div className="form-step">
              <h2>Upload Your Dive Photo</h2>
              <p className="step-desc">Choose a high-quality underwater photo. Landscape orientation works best.</p>

              {!imagePreview ? (
                <div className="upload-zone" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()}>
                  <Upload size={40} />
                  <h3>Drag & drop your photo here</h3>
                  <p>or click to browse</p>
                  <span className="upload-hint">JPG, PNG, WEBP — max 20MB</span>
                  <input type="file" ref={fileInputRef} accept="image/*" onChange={handleImageUpload} hidden />
                </div>
              ) : (
                <div className="upload-preview">
                  <img src={imagePreview} alt="Preview" />
                  <button className="remove-image" onClick={removeImage} aria-label="Remove image">
                    <X size={18} />
                  </button>
                </div>
              )}

              <button className="btn btn-primary btn-lg btn-full" disabled={!canProceedStep1} onClick={() => setStep(2)}>
                Continue <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Step 2: Dive Details */}
          {step === 2 && (
            <div className="form-step">
              <h2>Enter Your Dive Details</h2>
              <p className="step-desc">These will be displayed on your plaque. Only location is required.</p>

              <div className="form-group">
                <label>Dive Location *</label>
                <input type="text" placeholder="e.g. Fakarava, French Polynesia" value={formData.location}
                  onChange={e => updateField('location', e.target.value)} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Maximum Depth (m)</label>
                  <input type="number" placeholder="e.g. 27" value={formData.maxDepth}
                    onChange={e => updateField('maxDepth', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Dive Time (min)</label>
                  <input type="number" placeholder="e.g. 48" value={formData.diveTime}
                    onChange={e => updateField('diveTime', e.target.value)} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Water Temp (°C)</label>
                  <input type="number" placeholder="e.g. 26" value={formData.waterTemp}
                    onChange={e => updateField('waterTemp', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Wildlife Spotted</label>
                  <input type="text" placeholder="e.g. Whale shark, barracuda" value={formData.wildlife}
                    onChange={e => updateField('wildlife', e.target.value)} />
                </div>
              </div>

              <div className="form-actions">
                <button className="btn btn-ghost" onClick={() => setStep(1)}>Back</button>
                <button className="btn btn-primary btn-lg" disabled={!canProceedStep2} onClick={() => setStep(3)}>
                  Continue <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Size Selection */}
          {step === 3 && (
            <div className="form-step">
              <h2>Choose Your Size</h2>
              <p className="step-desc">Select the plaque size that's right for you.</p>

              <div className="size-options">
                {Object.entries(SIZES).map(([key, size]) => (
                  <button key={key} className={`size-option ${selectedSize === key ? 'selected' : ''}`} onClick={() => setSelectedSize(key)}>
                    <div className="size-info">
                      <strong>{size.label}</strong>
                      <span>{size.dimensions}</span>
                    </div>
                    <div className="size-price">€{size.price.toFixed(2)}</div>
                  </button>
                ))}
              </div>

              <div className="order-summary">
                <div className="summary-row">
                  <span>DivePlaque — {SIZES[selectedSize].label}</span>
                  <strong>€{SIZES[selectedSize].price.toFixed(2)}</strong>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <strong>€4.95</strong>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <strong>€{(SIZES[selectedSize].price + 4.95).toFixed(2)}</strong>
                </div>
              </div>

              <div className="form-actions">
                <button className="btn btn-ghost" onClick={() => setStep(2)}>Back</button>
                <button className="btn btn-primary btn-lg" onClick={handleCheckout}>
                  Proceed to Checkout <ChevronRight size={18} />
                </button>
              </div>

              <div className="checkout-trust">
                <ShieldCheck size={16} />
                <span>Secure checkout · 30-day money-back guarantee</span>
              </div>
            </div>
          )}
        </div>

        {/* Right: Live Preview */}
        <div className="customize-preview">
          <div className="preview-sticky">
            <h3 className="preview-title">Live Preview</h3>
            <PlaqueMockup data={formData} imagePreview={imagePreview} size={selectedSize} />
            <p className="preview-note">This is an approximation. Final print may vary slightly.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CustomizePage
