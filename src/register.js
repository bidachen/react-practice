import React from "react";
import { Button, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

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
    if (this.state.username && this.state.password && this.state.email)
      this.props.submitRegister(list);
    else alert("Incorrect format!");
  }

  render() {
    return (
      <div>
        <div>Username: </div>
        <Input
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={this.usernameChange}
        />
        <div>Password: </div>
        <Input
          type="text"
          placeholder="Password"
          value={this.state.password}
          onChange={this.passwordChange}
        />
        <div>Email: </div>
        <Input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.emailChange}
        />
        <br />
        <Button onClick={this.submitRegister}>register</Button>
      </div>
    );
  }
}

export default Register;
