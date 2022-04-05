import React from 'react'
import WhatIsToysy from './what_is_toysy'

const Footer = () =>{
  return(
    <>
      <section className="footer-what-is-toysy">
        <WhatIsToysy />
      </section>


      <section className="footer-powered-by-renewable-elec">
        <i className="fa-solid fa-hand-peace fa-2x"></i>
        <p>Toysy is made possible by React and Ruby on Rails technologies.</p>
        <i className="fa-solid fa-hand-peace fa-2x"></i>
      </section>


      <section className="footer-my-info">
        <div className='footer-my-info-container'>
        <div className="footer-my-info-left">
          <i className="fa-solid fa-earth-americas fa-2x"></i>
          <p>  New York, United States </p>
        </div>

        <div className="footer-my-info-right">
          <div>
            <p>I would like to say thank you for visiting. Please connect with me on LinkedIn </p>
            
          </div>
          <a href="https://www.linkedin.com/in/swusteven/" target="_blank"><i className="fa-brands fa-linkedin fa-3x"></i> LinkedIn</a>
          <a href="https://github.com/swusteven" target="_blank"><i className="fa-brands fa-github fa-3x"></i> GitHub</a>
        </div>
        </div>
      </section>
    </>
  )
}

export default Footer