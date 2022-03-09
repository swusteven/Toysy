import React from 'react'
import { Link } from 'react-router-dom'

class CategoriesIndex extends React.Component{
  constructor(props){
    super(props)
  };
  
  render(){
    const pairs = {
      "btt": "Baby & Toddler Toys",
      "sap": "Stuffed Animals & Plushies",
      "ls": "Learning & School",
      "daf": "Dolls & Action Figures"
    }

    
    return (
      <>
        <section className='category-top-title'>
          <div>
            <h1>{pairs[this.props.match.params.category]}</h1>
          </div>
        </section>
        <section className='category-wrapper'>

        <h1>hi</h1>


        </section>
        
      </>
    )
  };
};

export default CategoriesIndex