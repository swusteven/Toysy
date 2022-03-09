import {connect} from 'react-redux';
import {signup, login, removeErrors} from "../../actions/session"
import Signup from './signup';
import { setModalToClose } from '../../actions/modal';


const mapStateToProps = (state, ownProps) => {
  return{
    modalOpen: ownProps.location.pathname === '/signup' ? true : state.modalOpen,
    errors: Object.values(state.errors)
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    createNewUser: formUser => dispatch(signup(formUser)),
    login: formUser => dispatch(login(formUser)),
    setModalToClose: (currentStatus) => dispatch(setModalToClose(currentStatus)),
    removeErrors: ()=> dispatch(removeErrors()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup)

