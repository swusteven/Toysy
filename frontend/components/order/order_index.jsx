import React from 'react'

class OrderIndex extends React.Component{
  componentDidMount(){
    this.props.fetchOrders(this.props.currentUser.id)
}

  componentWillUnmount(){
    this.props.clearOrderHistoryCheckout()
  }

 
  render(){
    const {orders} = this.props
    return (
      !orders ? null :      
      <section className='order-index-wrapper'>
        <div>
            <h1>Order History</h1>
            {
              (Object.values(orders)).map(order=>(
                <section className='order-index-at-order-level'>
                  {
                  Object.values(order).map(item=>(
                   <div className='order-index-order-level-items'>
                        <h1>Name: {item.name}</h1><br />
                        <h3>Quanitity: {item.quantity}</h3>
                   </div>
                  ))
                }
                </section>

              ))
            }
        </div>
        


      </section>
    )
  }
}


export default  OrderIndex