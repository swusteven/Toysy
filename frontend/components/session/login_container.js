import {connect} from 'react-redux';
import {login, removeErrors} from "../../actions/session"
import Login from './login';
import { setModalToClose } from '../../actions/modal';
import {fetchAllCartItemsforUser} from "../../actions/cart"


const mapStateToProps = state => {
  return {
    modalOpen: state.modalOpen,
    errors: Object.values(state.errors),
    currentUser: state.session.currentUser
}};

const mapDispatchToProps = dispatch =>({
  login: formUser => dispatch(login(formUser)),
  setModalToClose: (currentStatus) => dispatch(setModalToClose(currentStatus)),
  removeErrors: ()=> dispatch(removeErrors()),
  fetchAllCartItemsforUser: (userId) => dispatch(fetchAllCartItemsforUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

