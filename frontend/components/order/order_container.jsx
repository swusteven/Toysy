import { connect } from 'react-redux'
import OrderIndex from './order_index'
import { fetchOrders } from '../../actions/order'

const mSTP = state =>{
  return {
    orders: state.orders,
    currentUser: state.session.currentUser
  }
}


const mDTP = dispatch =>{

  return {
    fetchOrders: (userId) => dispatch(fetchOrders(userId))    
  }
}

export default connect(mSTP, mDTP)(OrderIndex)