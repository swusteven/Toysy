import React from 'react'


class OrderIndex extends React.Component{
  componentDidMount(){
    this.props.fetchOrders(currentUser.id)
  }

  render(){
    debugger
    return (
      <section className='order-index-wrapper'>
        <div>
            <h1>Order History</h1>


        </div>
        


      </section>
    )
  }
}


export default  OrderIndex