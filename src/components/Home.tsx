import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <section className="section">
      <h1>Hi, I'm Simone Giannuario</h1>
      <p>Frontend Developer specializing in building accessible, performant web apps with React, TypeScript, and modern tooling.</p>
      <div className="cta-row">
        <Link to="/projects" className="btn">View Projects</Link>
        <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
      </div>
    </section>
  )
}

export default Home
