import React from 'react'
import WhatIsArtsy from './whatIsArtsy'

const Footer = () =>{
  return(
    <>
      <div className="footer-what-is-artsy">
        <WhatIsArtsy />
      </div>


      <div className="footer-powered-by-renewable-elec">
        <i class="fa-solid fa-hand-peace fa-2x"></i>
        <p>Artsy is powered by 100% renewable electricity.</p>
      </div>


      <div className="footer-my-info">
        <div className="footer-my-info-left">
          <i class="fa-solid fa-earth-americas fa-2x"></i>
          <p>  United States   |   English (US)   |   $ (USD)</p>
        </div>

   

        <div className="footer-my-info-right">
          <div>
            <p>I would like to say thank you and would love to connect.  </p>
            <br />
            <p>Please reach out to me on LinkedIn</p>
          </div>
          <a href="https://www.linkedin.com/in/steven-wu-cams-29814136/" target="_blank"><i class="fa-brands fa-linkedin fa-4x"></i> LinkedIn</a>
          <a href="https://github.com/swusteven" target="_blank"><i class="fa-brands fa-github fa-4x"></i> GitHub</a>
        </div>
      </div>
    </>
  )
}

export default Footer