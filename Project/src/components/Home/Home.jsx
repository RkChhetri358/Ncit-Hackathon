import React from 'react'
import "./Home.css";
const features = [
  { label: 'Better Security', color: '#4CAF50', icon: '🔒' },
  { label: 'Simple and Efficient', color: '#E91E63', icon: '⚙️' },
  { label: 'Transparency and Accountability', color: '#00BCD4', icon: '🤝' },
  { label: 'Easy Maintenance', color: '#FF9800', icon: '🛠️' },
  { label: 'Instant Access', color: '#2196F3', icon: '⚡' },
  { label: 'Expanded Reach of Governance', color: '#9C27B0', icon: '🏛️' },
  { label: 'Better Service for Citizens', color: '#03A9F4', icon: '👥' },
  { label: 'Cost-Effective', color: '#FFC107', icon: '💰' },
];

export default function Home() {

  return (
    <>
       <div className="egov-container">
     <center> <label htmlFor="services" id='services'>Services</label></center>
      <div className="egov-center">E-Governance</div>
      {features.map((feature, index) => {
        const angle = (index / features.length) * 360;
        return (
          <div
          key={index}
          className="egov-feature"
          style={{
            transform: `rotate(${angle}deg) translate(230px) rotate(-${angle}deg)`
          }}
          >
            <div
              className="egov-button"
              style={{ backgroundColor: feature.color }}
            >
              <div className="egov-icon">{feature.icon}</div>
              <div className="egov-label">{feature.label}</div>
            </div>
          </div>
        );
      })}
    </div>
         </>
  )
}
