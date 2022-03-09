import {connect} from 'react-redux';
import {login, removeErrors} from "../../actions/session"
import Login from './login';
import { setModalToClose } from '../../actions/modal';


const mapStateToProps = (state, ownProps) => {
  return {
    modalOpen: ownProps.location.pathname === '/login' ? true : state.modalOpen,
    errors: Object.values(state.errors),
    currentUser: state.session.currentUser
}};


const mapDispatchToProps = dispatch =>({
  login: formUser => dispatch(login(formUser)),
  setModalToClose: (currentStatus) => dispatch(setModalToClose(currentStatus)),
  removeErrors: ()=> dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

