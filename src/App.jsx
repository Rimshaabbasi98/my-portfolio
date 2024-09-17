import React from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/Pages/Home/MainContent'

const App = () => {
  return (
    <div className="lg:flex">
      <Navbar />
      <MainContent />

    </div>
  )
}

export default App
