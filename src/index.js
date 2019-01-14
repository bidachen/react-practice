import React from "react";
import ReactDOM from "react-dom";
import App from "./login.js";
import Register from "./register.js";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Input } from "reactstrap";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      login: false,
      register: false,
      list: {
        chen: { username: "chen", password: "chen", email: "chen@gmail.com" }
      }
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegis = this.handleRegis.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
  }
  usernameChange(event) {
    this.setState({ username: event.target.value });
  }
  passwordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleLogin(event) {
    let usernameInput = this.state.username;
    let passwordInput = this.state.password;
    if (this.state.list[usernameInput] === undefined)
      alert("incorret password");
    if (this.state.list[usernameInput].password === passwordInput)
      this.setState({ login: true });
    else alert("incorret password");
  }
  handleRegis(event) {
    this.setState({ register: true });
  }
  submitRegister(props) {
    let usernameInput = props.username;
    if (this.state.list[usernameInput] === undefined) {
      this.setState(prevState => ({
        register: false,
        list: {
          ...prevState.list,
          [usernameInput]: {
            username: usernameInput,
            password: props.password,
            email: props.email
          }
        }
      }));
    }
  }
  render() {
    if (this.state.login) return <App />;
    if (this.state.register)
      return <Register submitRegister={this.submitRegister} />;
    return (
      <div>
        <div>Username:</div>
        <Input
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={this.usernameChange}
        />
        <div>Password:</div>
        <Input
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.passwordChange}
        />
        <br />
        <Button onClick={this.handleLogin}>sign in</Button>
        <Button className="register_button" onClick={this.handleRegis}>
          register
        </Button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);
