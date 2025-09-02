import { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import SplashScreen from './components/SplashScreen'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Styled from './components/StyledComponent'
import Header from './components/Header'
import Footer from './components/Footer'

const SPLASH_DURATION = 2000; // 2 seconds

const PAGE_TITLES: Record<string, string> = {
  '/': 'Simone Giannuario — Frontend Developer',
  '/projects': 'Projects — Simone Giannuario',
  '/skills': 'Skills — Simone Giannuario',
  '/contact': 'Contact — Simone Giannuario',
  '/home': 'Prova home — Simone Giannuario',
};
const DEFAULT_TITLE = 'Simone Giannuario';

function App() {
  const mainRef = useRef<HTMLElement | null>(null)
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time and show splash screen
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, SPLASH_DURATION)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Update document title per route
    document.title = PAGE_TITLES[location.pathname] ?? DEFAULT_TITLE;

    // Move focus to main content on route change for screen readers/keyboard users
    if (mainRef.current) {
      mainRef.current.focus()
    }
    // Ensure scroll at top without motion
    window.scrollTo(0, 0)
  }, [location.pathname])

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <div className="app">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main ref={mainRef} id="main" tabIndex={-1} className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Styled />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
