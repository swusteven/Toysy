import React from 'react'

const ReviewIndex = () =>{
  return (
    <>
      {
        ['first','second','third','fourth','fifth'].map((review)=>{
          return <p>{review} review</p>
        })
      }
    </>
  )
};

export default ReviewIndex


