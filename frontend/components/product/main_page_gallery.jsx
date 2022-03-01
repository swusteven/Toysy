import React from 'react'


class MainPageGallery extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props)
    debugger
    this.props.fetchAllProducts();
    debugger
    console.log(this.props.products)
  }

  render(){
    const { products } = this.props
    debugger
    return (
      <>
        <h1>d</h1>
      </>
    )
  }

}



export default MainPageGallery

