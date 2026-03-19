import { useState, useRef, useCallback } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Upload, X, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react'
import PlaqueMockup from '../components/PlaqueMockup'
import './CustomizePage.css'

const SIZES = {
  mini: { label: 'The Mini', dimensions: '10 × 15 cm', price: 29.95, wood: 'Beech' },
  standard: { label: 'The Standard', dimensions: '15 × 20 cm', price: 39.95, wood: 'Walnut' },
  large: { label: 'The Grand', dimensions: '20 × 30 cm', price: 54.95, wood: 'Oak' },
}

function CustomizePage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const initialSize = searchParams.get('size') || 'standard'

  const [selectedSize, setSelectedSize] = useState(initialSize)
  const [imagePreview, setImagePreview] = useState(null)
  const [formData, setFormData] = useState({
    location: '', maxDepth: '', diveTime: '', waterTemp: '', wildlife: '',
  })
  const [step, setStep] = useState(1)

  const handleImageUpload = useCallback((e) => {
    const file = e.target.files[0]
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = (ev) => setImagePreview(ev.target.result)
    reader.readAsDataURL(file)
  }, [])

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    e.currentTarget.classList.add('drag-active')
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.currentTarget.classList.remove('drag-active')
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.currentTarget.classList.remove('drag-active')
    const file = e.dataTransfer.files[0]
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = (ev) => setImagePreview(ev.target.result)
    reader.readAsDataURL(file)
  }, [])

  const removeImage = () => {
    setImagePreview(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const updateField = (field, value) => setFormData(prev => ({ ...prev, [field]: value }))

  const handleCheckout = () => {
    const orderData = {
      size: selectedSize, price: SIZES[selectedSize].price,
      image: imagePreview, ...formData,
    }
    sessionStorage.setItem('diveplaque_order', JSON.stringify(orderData))
    navigate('/checkout')
  }

  const sizeInfo = SIZES[selectedSize]

  return (
    <main className="customize-page">
      <div className="container customize-layout">
        {/* Form side */}
        <div className="customize-form-col">
          <div className="customize-header">
            <span className="section-label" style={{ textAlign: 'left' }}>Customizer</span>
            <h1>Create Your Plaque</h1>
          </div>

          {/* Progress indicator */}
          <div className="progress-track">
            {['Photo', 'Details', 'Size'].map((label, i) => (
              <div key={i} className={`track-step ${step > i + 1 ? 'done' : ''} ${step === i + 1 ? 'active' : ''}`}>
                <div className="track-dot">{step > i + 1 ? '✓' : i + 1}</div>
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* Step 1: Photo */}
          {step === 1 && (
            <div className="cust-step">
              <h2>Upload Your Dive Photo</h2>
              <p className="cust-step-desc">Landscape orientation works best. High resolution recommended.</p>

              {!imagePreview ? (
                <div className="upload-area" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()}>
                  <Upload size={36} />
                  <h3>Drag & drop your photo</h3>
                  <p>or click to browse</p>
                  <span className="upload-formats">JPG, PNG, WEBP — max 20MB</span>
                  <input type="file" ref={fileInputRef} accept="image/*" onChange={handleImageUpload} hidden />
                </div>
              ) : (
                <div className="upload-result">
                  <img src={imagePreview} alt="Preview" />
                  <button className="upload-remove" onClick={removeImage} aria-label="Remove"><X size={16} /></button>
                </div>
              )}

              <button className="btn btn-gold btn-full" disabled={!imagePreview} onClick={() => setStep(2)}>
                Continue <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <div className="cust-step">
              <h2>Dive Details</h2>
              <p className="cust-step-desc">This data will appear on your plaque. Only location is required.</p>

              <div className="cust-field">
                <label>Dive Location *</label>
                <input type="text" placeholder="e.g. Fakarava, French Polynesia" value={formData.location} onChange={e => updateField('location', e.target.value)} />
              </div>
              <div className="cust-row">
                <div className="cust-field">
                  <label>Maximum Depth (m)</label>
                  <input type="number" placeholder="27" value={formData.maxDepth} onChange={e => updateField('maxDepth', e.target.value)} />
                </div>
                <div className="cust-field">
                  <label>Dive Time (min)</label>
                  <input type="number" placeholder="48" value={formData.diveTime} onChange={e => updateField('diveTime', e.target.value)} />
                </div>
              </div>
              <div className="cust-row">
                <div className="cust-field">
                  <label>Water Temp (°C)</label>
                  <input type="number" placeholder="26" value={formData.waterTemp} onChange={e => updateField('waterTemp', e.target.value)} />
                </div>
                <div className="cust-field">
                  <label>Wildlife Spotted</label>
                  <input type="text" placeholder="Whale shark, barracuda..." value={formData.wildlife} onChange={e => updateField('wildlife', e.target.value)} />
                </div>
              </div>

              <div className="cust-actions">
                <button className="btn btn-outline" onClick={() => setStep(1)}><ArrowLeft size={14} /> Back</button>
                <button className="btn btn-gold" disabled={!formData.location.trim()} onClick={() => setStep(3)}>Continue <ArrowRight size={16} /></button>
              </div>
            </div>
          )}

          {/* Step 3: Size */}
          {step === 3 && (
            <div className="cust-step">
              <h2>Select Your Size</h2>
              <p className="cust-step-desc">Choose the format that suits your space.</p>

              <div className="size-choices">
                {Object.entries(SIZES).map(([key, size]) => (
                  <button key={key} className={`size-choice ${selectedSize === key ? 'selected' : ''}`} onClick={() => setSelectedSize(key)}>
                    <div>
                      <strong>{size.label}</strong>
                      <span>{size.dimensions} · {size.wood} base</span>
                    </div>
                    <span className="size-choice-price">€{size.price.toFixed(2)}</span>
                  </button>
                ))}
              </div>

              <div className="order-summary-box">
                <div className="summary-line"><span>{sizeInfo.label}</span><strong>€{sizeInfo.price.toFixed(2)}</strong></div>
                <div className="summary-line"><span>Worldwide shipping</span><strong>€4.95</strong></div>
                <div className="summary-line summary-total"><span>Total</span><strong>€{(sizeInfo.price + 4.95).toFixed(2)}</strong></div>
              </div>

              <div className="cust-actions">
                <button className="btn btn-outline" onClick={() => setStep(2)}><ArrowLeft size={14} /> Back</button>
                <button className="btn btn-gold" onClick={handleCheckout}>Checkout <ArrowRight size={16} /></button>
              </div>

              <div className="cust-trust">
                <ShieldCheck size={14} />
                <span>Secure checkout · 30-day money-back guarantee</span>
              </div>
            </div>
          )}
        </div>

        {/* Preview side */}
        <div className="customize-preview-col">
          <div className="preview-container">
            <span className="preview-label">Live Preview</span>
            <PlaqueMockup data={formData} imagePreview={imagePreview} size={selectedSize} />
            <p className="preview-note">Approximate rendering. Final product may differ slightly.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CustomizePage
