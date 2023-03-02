import React from 'react'

const Header = () => {
  return (
    <>
      <nav>
        <NavContent />
        
      </nav>
    </>
  )
};

const NavContent = () => (
  <>
    <h2>Satyam.</h2>
    <div className='header-section'>
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#services">Services</a>
      <a href="#samples">Samples</a>
      <a href="#timeline">Timeline</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact Us</a>

    </div>

    <a href="mailto:imintrouble0117@gmail.com" className='mailtoButton'>
      <button>E-mail</button>
    </a>

  </>
)

export default Header