import React from 'react';
import "./Home.css";

const features = [
  { label: 'Better Security', color: '#4CAF50', icon: '🔒' },
  { label: 'Simple', color: '#E91E63', icon: '⚙️' },
  { label: 'Transparency', color: '#00BCD4', icon: '🤝' },
  { label: 'Easy Maintenance', color: '#FF9800', icon: '🛠️' },
  { label: 'Instant Access', color: '#2196F3', icon: '⚡' },
  { label: 'Expanded Reach', color: '#9C27B0', icon: '🏛️' },
  { label: 'Better Service', color: '#03A9F4', icon: '👥' },
  { label: 'Cost-Effective', color: '#FFC107', icon: '💰' },
];

export default function Home() {
  const calculateRadius = () => {
    const viewportWidth = Math.min(window.innerWidth, 600);
    return Math.min(viewportWidth * 0.35, 230);
  };

  return (
    <div className="e-gov-section">
      <h1 id="services">Our E-Governance Services</h1>
      
      <div className="egov-wrapper">
        <div className="egov-container">
          <div className="egov-center" aria-label="E-Governance Hub">
            <span>E-Gov</span>
          </div>
          
          {features.map((feature, index) => {
            const angle = (index / features.length) * 360;
            const radius = calculateRadius();
            
            return (
              <div
                key={index}
                className="egov-feature"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                  zIndex: features.length - index
                }}
              >
                <div
                  className="egov-button"
                  style={{ 
                    backgroundColor: feature.color,
                    '--hover-color': `${feature.color}CC`
                  }}
                  aria-label={feature.label}
                >
                  <div className="egov-icon" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div className="egov-label">
                    {feature.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}