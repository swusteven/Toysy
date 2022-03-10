import { connect } from 'react-redux'
import OrderIndex from './order_index'
import { fetchOrders, clearOrderHistoryCheckout } from '../../actions/order'

const mSTP = state =>{
  return {
    orders: state.orders,
    currentUser: state.session.currentUser
  }
}


const mDTP = dispatch =>{
  return {
    fetchOrders: (userId) => dispatch(fetchOrders(userId)),
    clearOrderHistoryCheckout: () => dispatch(clearOrderHistoryCheckout())
  }
}

export default connect(mSTP, mDTP)(OrderIndex)