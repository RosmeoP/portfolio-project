import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlurText from './components/BlurText'
import ScrollToTopButton from './components/ScrollToTop.jsx'
import Footer from './components/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <BlurText
      text="Welcome to my Portfolio"
      delay={150}
      animateBy="words"
      direction="top"
      onAnimationComplete={() => console.log('Animation completed!')}
      className="text-4xl font-bold text-center mb-8 absolute top-20 left-1/2 transform -translate-x-1/2"
    />
    <ScrollToTopButton />
    <Footer />

  </StrictMode>,
)
