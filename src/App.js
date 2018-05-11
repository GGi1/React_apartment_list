import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import ApartmentDetails from './ApartmentDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route exact path = '/' component = {Home} />
      <Route path = '/apartments/:id' component = {ApartmentDetails} />
      </Switch>
      </div>
    );
  }
}

export default App;
