import NavBar from '../components/NavBar'
import React, { useEffect } from 'react'




const Contact = () => {
  useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <div>
      <NavBar />
      <h2>contact</h2>
    </div>
  )
}

export default Contact
