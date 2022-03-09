import React from "react";
import Modal from "react-modal"
import { Link, Redirect } from "react-router-dom";

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
                    email: '',
                    password: ''
                  };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitAsDemoUser = this.handleSubmitAsDemoUser.bind(this);
  }

  componentWillUnmount(){
    this.props.removeErrors()
  }


  handleInput(type){
    return (e)=>{
      this.setState({[type]: e.target.value})    
    }
  }
  
  handleSubmit(e){
    e.preventDefault();    
    this.props.login(this.state)
      .then(()=> this.props.history.push('./'))
  }


  handleSubmitAsDemoUser(e){
    e.preventDefault();
    let demoUser = {email: "awesomeguest@yahoo.com", password: "123456"}
    this.props.login(demoUser)
      .then(()=> this.props.history.push('./'))
  }


 routeToHomePage(){
    return this.props.history.push('./')
  }

  _renderError(error, fieldname){
    if (fieldname === "backend"){
      return error;    
    } else if (fieldname === 'Email' && this.state.email ===""){
      return "Email can't be blank"
    } else if (fieldname === 'Password' &&this.state.password ===""){
      return "Password can't be blank"
    }
  }

  renderErrors(fieldname){
    return this.props.errors.map((error, i)=>(
      <p className="session-error-messages" key={i}>
        {this._renderError(error, fieldname)}
      </p>
    ))
  }

  render(){
    const { setModalToClose, modalOpen } = this.props;
    
    return (
      <div className="session-form-wrapper">
        <Modal  isOpen={modalOpen} 
                ariaHideApp={false}
                onRequestClose={()=>this.routeToHomePage()}
                style={{
                    overlay: {
                      backgroundColor: "rgba(0, 0, 0, .5)",
                    },
                    content: {
                      borderRadius: '24px',
                      width: "300px",
                      margin: "auto",
                      height: "650px",
                      padding: "40px",  
                      overflow: "visible",   //this makes the close button visible outside                  
                    }                    
                  }}        
        >
          
        <div className="modal-close-x">
          <button onClick={() => this.routeToHomePage()}>X</button>
        </div>

             <div className="session-error-invalid-credentials">{this.renderErrors("backend")}</div>
             <br /><br />

        <div className="session-signin-register-divider">
          <div className="signin-signup-message">Sign in</div>
          <Link to="/signup" className="session-register-btn">Register</Link>

        </div>

  
            <form className="session-form">
              <label>Email address
                <br />
                <input 
                  type="text"
                  value={this.state.email}
                  onChange= {this.handleInput('email')}
                />
              </label>
              {this.renderErrors("Email")}
              <br />

              <label>Password
                <br />
                <input 
                  type="password"
                  value={this.state.password}
                  onChange= {this.handleInput('password')}
                />
              </label>
              {this.renderErrors("Password")}
              <br />

              <button className="signin-btn" onClick={this.handleSubmit}>Sign In</button>
              
            </form>

            <p className='session-breakline'><span> OR </span></p>

            <button className="awesome-demo-user-btn" onClick={this.handleSubmitAsDemoUser}>Continue as Demo User</button>

            <p className="session-disclaimer">
                  By clicking Sign in, Sign up or Continue as Demo User, you will find things you will love under Toysy's Terms of Use and Privacy Policy. Most importanlty, Toysy will not send you communications.
            </p>
            
            

        </Modal>
      </div>
    )
  }
}


export default Login