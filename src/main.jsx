import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlurText from './components/BlurText'
import SplitText from './components/SplitText'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <BlurText
      text="Welcome to my Portfolio"
      delay={150}
      animateBy="words"
      direction="top"
      onAnimationComplete={() => console.log('Animation completed!')}
      className="text-4xl text-center mb-8 absolute top-20 left-1/2 transform -translate-x-1/2"
    />
  </StrictMode>,
)
