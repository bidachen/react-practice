import React from "react";
import ReactDOM from "react-dom";



let temp={first:"jie",last:"lan",activity:"null",restrictions:[1,2,3]};

class GetInput extends React.Component{
    constructor(props){
        super(props)
        this.state={value:''}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        temp[this.props.id] = event.target.value;
    }
    render(){

        return <div>
            {this.props.string} name: <br></br><input id={this.props.string} type="text" onChange={this.handleChange}/>
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
        temp[this.props.id] = event.target.value;
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
        this.state={
            list:[],

        }
        this.addCourse=this.addCourse.bind(this)
        this.delCourse=this.delCourse.bind(this)
        this.handleChange = this.handleChange(this)
    }
    addCourse(event){
        // let newItem = {id:this.state.list.id+1}
        // let newState=this.state.list.push()
        // this.setState()
        this.setState({ list: [...this.state.list, temp] })
    }

    handleChange(event) {

    }

    delCourse(event){

    }
    render(){
        let resultTable=this.state.list.map((item,index) => {
            return <ResultTable id={index} first={item.first} last={item.last} activity={item.activity} restrictions={item.restrictions} />
        });
        return <div>
            <GetInput string={"First"} id ="first" change ={this.handleChange}/>
            <GetInput string={"Last"} id ="last" change ={this.handleChange} />

            <GetSelection id ="activity"/>

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

// class App extends React.Component {
//     constructor() {
//         super();
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleSubmit(event) {
//         event.preventDefault();
//         const data = new FormData(event.target);
//         console.log(data)
//         // fetch('/api/form-submit-url', {
//         //     method: 'POST',
//         //     body: data,
//         // });
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label htmlFor="username">Enter username</label>
//                 <input id="username" name="username" type="text" />
//
//                 <label htmlFor="email">Enter your email</label>
//                 <input id="email" name="email" type="email" />
//
//                 <label htmlFor="birthdate">Enter your birth date</label>
//                 <input id="birthdate" name="birthdate" type="text" />
//
//                 <button>Send data!</button>
//             </form>
//         );
//     }
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
        
        
        
        
        class GetInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  render() {
    return <input name={this.props.string} type="text" value={this.state.value} onChange={this.handleChange} />

  }
}

class GetSelection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 'Science Lab' }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  render() {
    return <select name="selection" value={this.state.value} onChange={this.handleChange}>
      <option>Science Lab</option>
      <option>Swimming</option>
      <option>Cooking</option>
      <option>Painting</option>
    </select>
  }
}

class CheckBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: false }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ checked: event.target.checked })
  }
  render() {
    return <input name={this.props.name} type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
  }
}

function ResultTable(props) {
  return <tr>
    <th>{props.first}</th>
    <th>{props.last}</th>
    <th>{props.activity}</th>
    <th>{props.restrictions}</th>
  </tr>
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list: [{ id: 0 }] }
    this.addCourse = this.addCourse.bind(this)
    this.delCourse = this.delCourse.bind(this)
  }
  addCourse(event) {
    alert(1)
  }
  delCourse(event) {

  }
  render() {
    let resultTable = this.state.list.map((item, index) => {
      return <ResultTable id={item.id} first={item.first} last={item.last} activity={item.activity} restrictions={item.restrictions} />
    });
    return <form onSubmit={this.addCourse} id="newform">
      <label>First name: <br />
        <GetInput string={"First"} /><br />
      </label>
      <label>
        Last name: <br></br>
        <GetInput string={"Last"} /><br />
      </label>
      <GetSelection /><br />
      <label>
        <CheckBox name={'a'} />
        a) Dietary Restrictions<br/>
      </label>
      <label>
        <CheckBox name={'b'} />
        b) Physical Disabilities<br/>
      </label>
      <label>
        <CheckBox name={'c'} />
        c) Medical Needs<br/>
      </label>
      <input type='submit' value='submit' />
    </form>
  }
}

