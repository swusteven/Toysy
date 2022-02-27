import {connect} from 'react-redux';
import {login} from "../../actions/session"
import Login from './login';

//no need to create mapStateToProps

//this will give us a props called createNewUser in the SignUp form
const mapDispatchToProps = dispatch =>({
  login: formUser => dispatch(login(formUser))
})

export default connect(null, mapDispatchToProps)(Login)

