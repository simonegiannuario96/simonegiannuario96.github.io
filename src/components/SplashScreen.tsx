import React from 'react'

const SplashScreen: React.FC = () => {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="splash-logo">
          <div className="logo-circle"></div>
          <div className="logo-text">SG</div>
        </div>
        <h1 className="splash-title">Simone Giannuario</h1>
        <p className="splash-subtitle">Frontend Developer</p>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
