import React from 'react'


class ProductItem extends React.Component{
  

componentDidMount(){
  return this.props.fetchSingleProduct(this.props.match.params.id)
}  


render(){
  const {product} = this.props

  return(
    <>
      <h1>{product.name}</h1>
      <h1>{product.description}</h1>
      <h3>{product.price}</h3>
      <img src={product.imageUrl} alt="" />

    </>
  )
  }

}

export default ProductItem