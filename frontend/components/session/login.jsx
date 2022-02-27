import React from "react";

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
    return (
      <div className="session-form">
        <h2>Log In!</h2>
        <form>
          <label>Email:
            <input 
              type="text"
              value={this.state.email}
              onChange= {this.handleInput('email')}
            />
          </label>
          <label>Password:
            <input 
              type="password"
              value={this.state.password}
              onChange= {this.handleInput('password')}
            />
          </label>
          <button onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    )
  }
}


export default Login