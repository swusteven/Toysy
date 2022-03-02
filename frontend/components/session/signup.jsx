import React from "react";
import Modal from "react-modal"
import { Link } from "react-router-dom";

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
                    fname: '',
                    email: '',
                    password: ''
                  };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.createNewUser(this.state) 
      .then(()=> this.props.history.push('./'))  //upon sucessfully create a new user. will have a callback function to redirect
  }


  handleSubmitAsDemoUser(e){
    e.preventDefault();
    let demoUser = {email: "awesomeguest@yahoo.com", password: "123456"}
    this.props.login(demoUser)
      .then(()=> this.props.history.push('./'))  //upon sucessfully create a new user. will have a callback function to redirect
  }

  componentDidMount() {
    Modal.setAppElement('#root');
  }

  _renderError(error, fieldname){
    if (error.includes(fieldname) && fieldname === "Fname"){
      return "First name can't be blank";    
    } else {
      return error;
    }
  }

  renderErrors(fieldname){
    return this.props.errors.map((error, i)=>(
      <p className="session-error-messages" key={i}>
        {error.includes(fieldname) ? this._renderError(error, fieldname) : null }
      </p>
    ))
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
          

          <div className="signup-message">
            <p className="signin-signup-message">Create your account</p>
            <p>Registration is easy.</p>
          </div>

          

          <form className="session-form">
            <label>Email address <span className="session-form-red-asteriks">*</span>
              <input 
                type="text"
                value={this.state.email}
                onChange= {this.handleInput('email')}
              />
            </label>
            {this.renderErrors("Email")}
            <br />

            <label>First name <span className="session-form-red-asteriks">*</span>
              <input 
                type="text"
                value={this.state.fname}
                onChange={this.handleInput('fname')}
              />
            </label>
             {this.renderErrors("Fname")}
            <br />

            <label>Password <span className="session-form-red-asteriks">*</span>
              <input 
                type="password"
                value={this.state.password}
                onChange= {this.handleInput('password')}
              />
            </label>
             {this.renderErrors("Password")}
             <br />

            <button className="signup-btn"onClick={this.handleSubmit}>Sign Up</button>
          </form>
          
          <p className='session-breakline'><span> OR </span></p>

          <button className="awesome-demo-user-btn" onClick={this.handleSubmitAsDemoUser}>Sign in as demo user</button>
        </Modal>

      </div>
    )
  }
}


export default Signup