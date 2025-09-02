import React from 'react'
import { Link } from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link to="/" className="header-logo" aria-label="Go to homepage">
      <div className="logo-container">
        <div className="logo-circle-small"></div>
        <span className="logo-text-small">SG</span>
      </div>
    </Link>
  )
}

export default Logo
