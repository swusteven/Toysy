import React from "react";
import Modal from "react-modal"
import { Link } from "react-router-dom";

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

  handleInput(type){
    return (e)=>{
      this.setState({[type]: e.target.value})    
    }
  }

  handleSubmit(e){
    e.preventDefault();    
    this.props.login(this.state)
      .then(()=> this.props.history.push('./'))  //upon sucessfully create a new user. will have a callback function to redirect
  }


  handleSubmitAsDemoUser(e){
    e.preventDefault();
    let demoUser = {email: "awesomeguest@yahoo.com", password: "123456"}
    this.props.login(demoUser)
      .then(()=> this.props.history.push('./'))  //upon sucessfully create a new user. will have a callback function to redirect
  }


  render(){
    const { setModalToClose, modalOpen } = this.props;
    
    return (
      <div className="session-form-wrapper">
        <Modal  isOpen={modalOpen} 
                ariaHideApp={false}
                onRequestClose={()=>setModalToClose()}
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
          <button onClick={() => setModalToClose(false)}>X</button>
        </div>

        <h2 className="session-welcome-message">Weclome to Toysy! A project clone of 
          <a href="https://www.etsy.com/"> Etsy!</a>
          
        </h2>

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
              
              <br />

              <label>Password
                <br />
                <input 
                  type="password"
                  value={this.state.password}
                  onChange= {this.handleInput('password')}
                />
              </label>
              <br />

              <button className="signin-btn" onClick={this.handleSubmit}>Sign In</button>
              
            </form>

            <p className='session-breakline'><span> OR </span></p>

            <button className="awesome-demo-user-btn" onClick={this.handleSubmitAsDemoUser}>Sign in as demo user</button>

            
            

        </Modal>
      </div>
    )
  }
}


export default Login