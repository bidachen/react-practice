import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Button , Container,Form, FormGroup, Label, Input, FormText, CustomInput,ListGroup, ListGroupItem} from 'reactstrap'

function ResultTable(props) {
    return(
    <ListGroup>
        <ListGroupItem>    <tr>
            <th>{props.first}   </th>
            <th>{props.last}    </th>
            <th>{props.activity}   </th>
            <th>{props.restrictions}  </th>
        </tr></ListGroupItem>

    </ListGroup>
    )



}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { first: '', last: '', selection: 'Science Lab', box1:false,box2:false,box3:false, list: [] }
        this.handleName = this.handleName.bind(this)
        this.handleSelection = this.handleSelection.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.addCourse = this.addCourse.bind(this)
        this.delCourse = this.delCourse.bind(this)
    }
    handleName(event){
        event.target.name === 'first'?
            this.setState({first: event.target.value})
            : this.setState({ last: event.target.value})
    }
    handleSelection(event){
        this.setState({selection:event.target.value})
    }
    handleCheckbox(event){
        if(event.target.name === 'box1')
            this.setState({box1: event.target.checked})
        if (event.target.name === 'box2')
            this.setState({ box2: event.target.checked })
        if (event.target.name === 'box3')
            this.setState({ box3: event.target.checked })
    }
    addCourse(event) {
        let restrictions='';
        if (this.state.box1 === true)
            restrictions+='1'
        if (this.state.box2 === true)
            restrictions +='2'
        if (this.state.box3 === true)
            restrictions +='3'
        this.setState(prevState => ({
            list: [...prevState.list, {first:this.state.first,
                last: this.state.last, activity: this.state.selection,restrictions:restrictions}]
        }))
        console.log(this.state.list)
    }
    delCourse(event) {

    }
    render() {
        let resultTable = this.state.list.map((item, index) => {
            return <ResultTable key={index} first={item.first} last={item.last} activity={item.activity} restrictions={item.restrictions} />
        });
        return (
            < Container>
                <FormGroup>
                <Label >First name: <br /></Label>
                <Input type="text" name='first' value={this.state.first} onChange={this.handleName} /><br />
                </FormGroup>

                <FormGroup>
                <Label>Last name: </Label>

                <Input type="text" name='last' value={this.state.last} onChange={this.handleName} /><br />
                </FormGroup>


                <FormGroup>
                    <Label for="exampleSelect">Activity</Label>
                    <Input type="select" name="select" id="exampleSelect" value={this.state.selection} onChange={this.handleSelection}>>
                        <option>Science Lab</option>
                        <option>Swimming</option>
                        <option>Cooking</option>
                        <option>Painting</option>
                    </Input>
                </FormGroup>


                <FormGroup>
                    <Label for="exampleCheckbox">Limitations</Label>
                    <div>
                        <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Dietary Restrictions" name='box1'type="checkbox" checked={this.state.box1} onChange={this.handleCheckbox}/>
                        <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Physical Disabilities" name='box2' type="checkbox" checked={this.state.box2} onChange={this.handleCheckbox} />
                        <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Medical Needs" name='box3' type="checkbox" checked={this.state.box3} onChange={this.handleCheckbox} />
                    </div>
                </FormGroup>

                <br/>
                <Button color="danger" value='submit' onClick={this.addCourse}>Submit</Button>
                <table>
                    <tbody>
                    {resultTable}
                    </tbody>
                </table>



            </Container>
        )
    }
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);