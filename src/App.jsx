import React from 'react'
import './App.css'
import bgVideo from '/images/earth-bg.mp4'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Banner from './components/Banner'
import Banner_sec from './components/Banner_sec'
import Footer from './components/Footer'

function App() {

  return (
    <>

      <div className='h-[700px] relative'>

        <video autoPlay loop muted className='fixed rigth-0 top-0 h-[700px] w-full object-cover z[-1]'>

          <source src={bgVideo} type='video/mp4' />

        </video>

        <Header />
        <Hero />

      </div>

      <Services />
      <Banner />
      <Banner_sec />
      <Footer />

    </>
  )
}

export default App
