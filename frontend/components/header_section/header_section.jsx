import React from 'react'
import { Link } from 'react-router-dom'
import {shuffleArray} from '../../utils/shuffle_products.array'

const loggedOutMessage = <h1 className="header-section-message-logged-out">Explore one-of-a-kind finds from independent makers</h1>


const HeaderSection = ({currentUser, products}) =>{
  
  const classic = products.length === 0 ? null : shuffleArray([products[2], products[16], products[17], products[18], products[15]], 1)[0]
  const personalized = products.length === 0 ? null : shuffleArray([products[0], products[3]], 1)[0]
  const learning = products.length === 0 ? null : shuffleArray([products[1], products[11], products[12]], 1)[0]
  const doll = products.length === 0 ? null : shuffleArray([products[9], products[8], products[7], products[10]], 1)[0]
  const toddler = products.length === 0 ? null : shuffleArray([products[4], products[5], products[6]], 1)[0]
  const puzzle = products.length === 0 ? null : shuffleArray([products[1], products[13], products[14]], 1)[0]
  

  return(products.length === 0 ? null : 
    
    <section className='header-section-wrapper'> 
      <div className='header-section-top'>
        {currentUser ? <h1 className="header-section-message-logged-in">{`Welcome! ${currentUser.fname}` }</h1> : loggedOutMessage }
      </div>

      <div className='header-section-bottom'>
        <div className='header-section-bottom-contents'>

          <div className="header-section-bottom-contents-container">
            <Link to={`products/${classic.id}`}><img src={classic.imageUrl}/>
            <p>Classic</p>
            </Link>
            
          </div>
          
          <div className="header-section-bottom-contents-container">
            <Link to={`products/${personalized.id}`}><img src={personalized.imageUrl}/>
              <p>Personalized Gifts</p>
            </Link>
          </div>

          <div className="header-section-bottom-contents-container">
            <Link to={`products/${learning.id}`}><img src={learning.imageUrl}/>
              <p>Learning</p>
            </Link>
          </div>

          <div className="header-section-bottom-contents-container">
            <Link to={`products/${doll.id}`}><img src={doll.imageUrl}/>            
              <p>Plush</p>
            </Link>
          </div>

          <div className="header-section-bottom-contents-container">
            <Link to={`products/${toddler.id}`}><img src={toddler.imageUrl}/>
              <p>Gift for Toddler</p>            
            </Link>
          </div>

          <div className="header-section-bottom-contents-container">
            <Link to={`products/${puzzle.id}`}><img src={puzzle.imageUrl}/>
              <p>Puzzle</p>
            </Link>
          </div>



          
        </div> 
      </div>

    </section>    
  ) 
}

export default HeaderSection