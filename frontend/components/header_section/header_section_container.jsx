import { connect } from 'react-redux'
import HeaderSection from './header_section';

const mSTP = state =>{
  return {
    currentUser: state.session.currentUser,
    products: Object.values(state.products)
  }
};


export default connect(mSTP, null)(HeaderSection)