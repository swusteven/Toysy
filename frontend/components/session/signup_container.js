import {connect} from 'react-redux';
import {signup} from "../../actions/session"
import Signup from './signup';
import { setModalToClose } from '../../actions/modal';

const mapStateToProps = state => ({
    modalOpen: state.modalOpen
});

const mapDispatchToProps = dispatch =>({
  createNewUser: formUser => dispatch(signup(formUser)),
  setModalToClose: (currentStatus) => dispatch(setModalToClose(currentStatus))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

