import React from 'react'
import { Link } from 'react-router-dom'
import { formatDateTime} from '../../utils/date_util'

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
              (Object.values(orders)).reverse().map(order=>(
                <section className='order-index-at-order-level'>
                  {
                  Object.values(order).map(item=>(
                   <div className='order-index-order-level-items'>
                        <div>
                          <Link to={`products/${item.product_id}`}><img src={item.imageUrl}/></Link>
                          <h1>Name: {item.name}</h1>
                          <h3>Quantity: {item.quantity}</h3>
                          <h3>Price: ${item.price}</h3>
                          <h3>Order Date: {formatDateTime(item.created_at)}</h3>
                        </div><br />
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