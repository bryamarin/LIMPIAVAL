import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Features from './components/Features'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Services from './components/Services'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Features />
        <About />
        <WhyChooseUs />
        <Pricing />
        <Gallery />
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
