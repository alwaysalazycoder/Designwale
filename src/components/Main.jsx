import React from 'react'
import Contact from './Contact'
import Header from './Header'
import Home from './Home'
import Testimonials from './Testimonials'
import Timeline from './Timeline'
import Services from './Services'
import Work from './Work'
import Samples from './Samples'

const Main = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Work/>
    <Services/>
    <Samples/>
    <Timeline/>
    <Testimonials/>
    <Contact/>
    </>
  )
}

export default Main