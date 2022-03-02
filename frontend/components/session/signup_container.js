import {connect} from 'react-redux';
import {signup, login} from "../../actions/session"
import Signup from './signup';
import { setModalToClose } from '../../actions/modal';

const mapStateToProps = state => ({
    modalOpen: state.modalOpen,
    errors: state.errors
});

const mapDispatchToProps = dispatch =>({
  createNewUser: formUser => dispatch(signup(formUser)),
  login: formUser => dispatch(login(formUser)),
  setModalToClose: (currentStatus) => dispatch(setModalToClose(currentStatus))

})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

