import NavBar from '../components/NavBar'
import React, { useEffect } from 'react'


const Project = () => {
  const openFile = () => {
    const filePath = `${process.env.SRC_URL}./Project.jsx`;
    window.open(filePath, '_blank'); 
  };
  useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <div>
      <div>
        <NavBar />
        <h2>Projects</h2>
      </div>
    </div>
  )
}

export default Project
