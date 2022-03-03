import React from 'react'

const WhatIsArtsy = () =>{
  return(
    <>
      <div className="footer-WIA-wrapper">
        
        <div className="footer-WIA-left footer-WIA-inner">
          <div className='footer-WIA-top'></div>
          <div className='footer-WIA-bottom'>
            <h2>A community doing good</h2>
            <p>Artsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.</p>
          </div>    
        </div>


        <div className="footer-WIA-center footer-WIA-inner">
          <div className='footer-WIA-top'>
             <h1>What is Artsy?</h1>
          </div>
           <div className='footer-WIA-bottom'>
            <h2>Support independent creators</h2>
            <p>There’s no Artsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
               <h3>Have a question? Well, we’ve got some answers.</h3>
               <a className="footer-question-contact" href="https://www.linkedin.com/in/steven-wu-cams-29814136/" target="_blank"><i class="fa-brands fa-linkedin fa-2x"></i>   <span>Contact me on LinkedIn</span> </a>
            
          </div>    
        </div>


        <div className="footer-WIA-right footer-WIA-inner">
            <div className='footer-WIA-top'></div>
            <div className='footer-WIA-bottom'>
            <h2>Peace of mind</h2>
            <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
            </div>
        </div> 
      </div>
    </>
  )
}

export default WhatIsArtsy