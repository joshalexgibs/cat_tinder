import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Ewoks from './components/Ewoks'
import NewEwok from './components/NewEwok'
import { getEwoks, createEwok } from './api'

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    ewoks: [],
    click: false
  }
}


handleNewEwok (newEwokInfo){
    createEwok(newEwokInfo)
    .then(successEwok =>{
        console.log("SUCCESS! new ewok add:", successEwok)
    })
}
toggleClick = (ewokInfo) =>{
    this.handleNewEwok(ewokInfo)
    let { click } = this.state
    click = true
    this.setState({ click })
}

componentDidMount(){
    getEwoks()
        .then(APIewoks => {
            this.setState({ewoks : APIewoks})
        })
}

render() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/newewok" render={ (props) => <NewEwok handleNewEwok = {this.toggleClick} click = {this.state.click}/> } />
          <Route exact path="/" render={ (props) => <Ewoks ewoks={this.state.ewoks}/> } />
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
