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
    <div className={`plaque plaque-${size}`}>
      <div className="plaque-glass">
        <div className="plaque-glass-shine"></div>
        <div className="plaque-photo-area">
          {imagePreview ? (
            <img src={imagePreview} alt="Your dive photo" className="plaque-user-photo" />
          ) : (
            <div className="plaque-photo-default">
              <span>Your dive photo</span>
            </div>
          )}
        </div>
        <div className="plaque-content">
          <h3 className="plaque-location">{location || 'Your Dive Location'}</h3>
          <div className="plaque-stats-list">
            <div className="plaque-stat-row">
              <Gauge size={14} />
              <span>Maximum Depth: <strong>{maxDepth || '—'} m</strong></span>
            </div>
            <div className="plaque-stat-row">
              <Clock size={14} />
              <span>Dive Time: <strong>{diveTime || '—'} min</strong></span>
            </div>
            <div className="plaque-stat-row">
              <Thermometer size={14} />
              <span>Water Temp: <strong>{waterTemp || '—'}°C</strong></span>
            </div>
            <div className="plaque-stat-row">
              <Fish size={14} />
              <span>Wildlife: <strong>{wildlife || '—'}</strong></span>
            </div>
          </div>
        </div>
      </div>
      <div className="plaque-wood-base">
        <span className="plaque-engraving">Dive Log</span>
      </div>
    </div>
  )
}

export default PlaqueMockup
