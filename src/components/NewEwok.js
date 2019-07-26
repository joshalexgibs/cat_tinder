import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Col, Container, Row, ListGroup, Form } from 'react-bootstrap'
import '../App.css'

export default class NewEwok extends Component {
    constructor(props){
        super(props)
        this.state = {
            form:{
                name: '',
                age: '',
                enjoys: '',
                img: ''
            },

        }
    }
//missing action in form.
handleChange = (event) => {
    let {form} = this.state
    form[event.target.name] = event.target.value
    this.setState({form})
}

handleClick = () => {
    console.log('before')
    this.props.handleNewEwok(this.state.form)
    console.log('after')

}
testInput = ()=>{
    console.log("test");

}

    render () {
        console.log(this.state.form);
        return (
            <div>
                <Form className="form-size">
                    <div className="form-group">
                        <label id="name">Name</label>:
                        <Form.Control type="text" name="name" onChange={this.handleChange} value={this.state.form.name}/>
                    </div>
                    <div className="form-group">
                        <label id="age">Age</label>:
                        <Form.Control type="number" name="age" onChange={this.handleChange} value={this.state.form.age}/>
                    </div>
                    <div className="form-group">
                        <label id="enjoys">Enjoys</label>:
                        <Form.Control type="text" name="enjoys" onChange={this.handleChange} value={this.state.form.enjoys}/>
                    </div>
                    <div className="form-group">
                        <label id="img">Profile Picture url</label>:
                        <Form.Control type="text" name="img" onChange={this.handleChange} value={this.state.form.img}/>
                    </div>
                    <button onClick={this.testInput} id="submit">test</button>
                </Form>
                <button onClick={this.handleClick} id="submit">Create New Ewok</button>
                
            </div>
        )
    }
}
