import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class GetInput extends React.Component{
  constructor(props){
    super(props)
    this.state={value:''}
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({value:event.target.value})
  }
  render(){
    return <div>
      {this.props.string} name: <br></br><input id={this.props.string}type="text" value={this.state.value} onChange={this.handleChange}/>
    </div>
  }
}

class GetSelection extends React.Component{
  constructor(props){
    super(props)
    this.state={value:'Science Lab'}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  render(){
    return <select id="selection" value={this.state.value}onChange={this.handleChange}>
      <option>Science Lab</option>
      <option>Swimming</option>
      <option>Cooking</option>
      <option>Painting</option>
    </select>
  }
}

class CheckBox extends React.Component{
  constructor(props){
    super(props)
    this.state={checked:false}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ checked: event.target.checked })
  }
  render(){
    return <div>
    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>{this.props.string}<br></br>
    </div>
  }
}

function ResultTable(props){
  return <tr>
    <th>{props.first}</th>
    <th>{props.last}</th>
    <th>{props.activity}</th>
    <th>{props.restrictions}</th>
  </tr>
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={list:[{id:0}]}
    this.addCourse=this.addCourse.bind(this)
    this.delCourse=this.delCourse.bind(this)
  }
  addCourse(event){
    let newItem = {id:this.state.list.id+1,first:}
    let newState=this.state.list.push()
    this.setState()
  }
  delCourse(event){

  }
  render(){
    let resultTable=this.state.list.map((item,index) => {
      return <ResultTable id={item.id} first={item.first} last={item.last} activity={item.activity} restrictions={item.restrictions} />
    });
    return <div>
      <GetInput string={"First"}/>
      <GetInput string={"Last"} />
      <GetSelection />
      <CheckBox string={"a) Dietary Restrictions"}/>
      <CheckBox string={"b) Physical Disabilities"} />
      <CheckBox string={"c) Medical Needs"} />
      <button onClick={this.addCourse}>submit</button>
      <table>
      {resultTable}
      </table>
    </div>
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); 