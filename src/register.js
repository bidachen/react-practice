import React from "react";
import ReactDOM from "react-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "" };
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
  }
  usernameChange(event) {
    this.setState({ username: event.target.value });
  }
  passwordChange(event) {
    this.setState({ password: event.target.value });
  }
  emailChange(event) {
    this.setState({ email: event.target.value });
  }
  submitRegister(props) {
    let list = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };
    this.props.submitRegister(list);
  }

  render() {
    return (
      <div>
        <div>Username: </div>
        <input
          type="text"
          value={this.state.username}
          onChange={this.usernameChange}
        />
        <div>Password: </div>
        <input
          type="text"
          value={this.state.password}
          onChange={this.passwordChange}
        />
        <br />
        <div>Email: </div>
        <input
          type="text"
          value={this.state.email}
          onChange={this.emailChange}
        />
        <br />
        <button onClick={this.submitRegister}>submit</button>
      </div>
    );
  }
}

export default Register;
