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

  calculateTotalAmount(cart){
    let total = null;
    Object.values(cart).forEach(item => {
      total = total + Number(((Number(item.quantity) * Number(item.price))))
    })
    return total ? total.toFixed(2) : 0
  }
 
  render(){
    const {orders} = this.props
    return (
      !orders ? null :      
      <main className='order-index-wrapper'>
        <section className='category-top-title'>
            <div className='category-top-inner'>
              <h1>Order History</h1>
            </div>
        </section>

        <section className='category-bottom-main'>
            <div className='category-bottom-inner'>
                {
                  (Object.values(orders)).reverse().map((order, idx)=>(
                    <section className='order-index-at-order-level' key={"section"+order+idx}>
                      <div className='order-index-header' key={order+idx}>
                          <h3>Purchased from <i className="fa-solid fa-store"></i> {Object.values(order)[0].seller}'s store  on {formatDateTime(Object.values(order)[0].created_at)}</h3>
                          <h2>Total: ${this.calculateTotalAmount(order)}</h2>
                      </div>
                      
                    {
                      Object.values(order).map((item, idx)=>(
                      <div className='order-index-order-level-items' key={item+idx}>
                            <div className="order-index-order-level-details" >
                              <Link to={`products/${item.product_id}`}><img src={item.imageUrl}/></Link>
                              <Link to={`products/${item.product_id}`}><h1>{item.name}</h1></Link>
                              <h3>Price: ${item.price}</h3>
                              <h3>Quantity: {item.quantity}</h3>
                            </div><br />
                      </div>
                      ))
                    }
                    </section>

                  ))
                }
            </div>
        
      </section>

      </main>
    )
  }
}


export default  OrderIndex