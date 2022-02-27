import {connect} from 'react-redux';
import {login} from "../../actions/session"
import Login from './login';
import { setModalToClose } from '../../actions/modal';

//no need to create mapStateToProps
const mapStateToProps = state => {

  return {
    modalOpen: state.modalOpen
  }
}

//this will give us a props called createNewUser in the SignUp form
const mapDispatchToProps = dispatch =>({
  login: formUser => dispatch(login(formUser)),
  setModalToClose: (currentStatus) => dispatch(setModalToClose(currentStatus))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

