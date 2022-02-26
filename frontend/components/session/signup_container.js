import {connect} from 'react-redux';
import {signup} from "../../actions/session"
import Signup from './signup'

//no need to create mapStateToProps

//this will give us a props called createNewUser in the SignUp form
const mapDispatchToProps = dispatch =>({
  createNewUser: formUser => dispatch(signup(formUser))
})

export default connect(null, mapDispatchToProps)(Signup)

