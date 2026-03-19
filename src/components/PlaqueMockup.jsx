import { Gauge, Clock, Thermometer, Fish } from 'lucide-react'
import './PlaqueMockup.css'

function PlaqueMockup({ data = {}, imagePreview = null, size = 'standard' }) {
  const {
    location = 'Fakarava, French Polynesia',
    maxDepth = '27',
    diveTime = '48',
    waterTemp = '26',
    wildlife = 'Whale shark, barracuda, dolphins...',
  } = data

  return (
    <div className={`plaque-mockup plaque-${size}`}>
      <div className="plaque-frame">
        <div className="plaque-photo-area">
          {imagePreview ? (
            <img src={imagePreview} alt="Your dive photo" className="plaque-user-photo" />
          ) : (
            <div className="plaque-photo-placeholder">
              <div className="placeholder-content">
                <span className="placeholder-icon">📸</span>
                <span>Your dive photo</span>
              </div>
            </div>
          )}
        </div>
        <div className="plaque-details">
          <h3 className="plaque-location">{location || 'Your Dive Location'}</h3>
          <div className="plaque-stats">
            <div className="plaque-stat">
              <Gauge size={16} />
              <span>Maximum Depth: <strong>{maxDepth || '—'} m</strong></span>
            </div>
            <div className="plaque-stat">
              <Clock size={16} />
              <span>Dive Time: <strong>{diveTime || '—'} min</strong></span>
            </div>
            <div className="plaque-stat">
              <Thermometer size={16} />
              <span>Water Temp: <strong>{waterTemp || '—'}°C</strong></span>
            </div>
            <div className="plaque-stat">
              <Fish size={16} />
              <span>Wildlife: <strong>{wildlife || '—'}</strong></span>
            </div>
          </div>
        </div>
      </div>
      <div className="plaque-base">
        <span>Dive Log</span>
      </div>
    </div>
  )
}

export default PlaqueMockup
