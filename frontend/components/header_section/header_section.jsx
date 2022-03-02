import React from 'react'

const loggedOutMessage = <h1 className="header-section-message-logged-out">Explore one-of-a-kind finds from independent makers</h1>


const HeaderSection = ({currentUser}) =>{
  return(
    <div className='header-section-wrapper'> 
      <div className='header-section-top'>
        {currentUser ? <h1 className="header-section-message-logged-in">{`Welcome! ${currentUser.fname}` }</h1> : loggedOutMessage }
      </div>

      <div className='header-section-bottom'>

        <div className='header-section-bottom-contents'>

          <div className="header-section-bottom-contents-container">
            <img src="https://i.etsystatic.com/9622611/r/il/379693/1487501389/il_1140xN.1487501389_s5f3.jpg" alt="" /><br />
            Personalized Gifts
          </div>

          <div className="header-section-bottom-contents-container">
            <img src="https://i.etsystatic.com/15428306/r/il/18a5ab/3115774139/il_1140xN.3115774139_i3n8.jpg" alt="" /><br />
            Puzzles
          </div>

          <div className="header-section-bottom-contents-container">
            <img src="https://i.etsystatic.com/15889684/r/il/fc6e71/3442069743/il_1140xN.3442069743_a9qv.jpg" alt="" /><br />
            Games
          </div>
          
          <div className="header-section-bottom-contents-container">
            <img src="https://i.etsystatic.com/10854692/r/il/f6e1b6/3003335858/il_794xN.3003335858_qjfp.jpg" alt="" /><br />
           Outdoor Recreation
          </div>

          <div className="header-section-bottom-contents-container">
            <img src="https://i.etsystatic.com/11995091/r/il/f1c017/1331186084/il_1140xN.1331186084_ac2h.jpg" alt="" /><br />
          Do It Yourself
          </div>

          <div className="header-section-bottom-contents-container">
            <img src="https://i.etsystatic.com/32351657/r/il/022a26/3704764509/il_1140xN.3704764509_n4j5.jpg" alt="" /><br />
            Coloring
          </div>
          
        </div> 
      </div>

    </div>    
  ) 
}

export default HeaderSection