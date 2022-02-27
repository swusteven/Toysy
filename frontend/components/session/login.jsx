import React from "react";
import Modal from "react-modal"

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
                    email: '',
                    password: ''
                  };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type){
    return (e)=>{
      this.setState({[type]: e.target.value})    
    }
  }

  handleSubmit(e){
    e.preventDefault();    //remember to invoke it
    this.props.login(this.state)    //login a user
      .then(()=> this.props.history.push('./'))  //upon sucessfully create a new user. will have a callback function to redirect
  }

  

  render(){
    const { setModalToClose, modalOpen } = this.props;
    
    return (
      <div className="session-form-wrapper">
        <Modal  isOpen={modalOpen} 
                onRequestClose={()=>setModalToClose()}
                style={
                  {
                    overlay: {
                      backgroundColor: "rgba(0, 0, 0, .4)",
                    },
                    content: {
                      borderRadius: '24px',
                      width: "325px",
                      margin: "auto",
                      height: "600px",
                      padding: "40px",
                      
                    }
                    
                  }
                }        
        >
        
        <div className="modal-close-xxx">
          <span onClick={() => setModalToClose(false)}>X</span>
        </div>

        <div className="session-signin-register-divider">
          <h2>Sign In</h2>
          <button className="session-register-btn">Register</button>
        </div>
            <form className="session-form">
              <label>Email address:
                <br />
                <input 
                  type="text"
                  value={this.state.email}
                  onChange= {this.handleInput('email')}
                />
              </label>
              
              <br />

              <label>Password:
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
        </Modal>
      </div>
    )
  }
}


export default Login