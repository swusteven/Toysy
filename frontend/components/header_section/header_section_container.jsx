import { connect } from 'react-redux'
import HeaderSection from './header_section';

const mSTP = state =>({
  currentUser: state.session.currentUser
});


export default connect(mSTP, null)(HeaderSection)