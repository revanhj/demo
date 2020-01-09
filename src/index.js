import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Header from './components/homepage/Header'
import Dashboard from './components/OPD/dashboard'
import OutPDashboard from './components/OutPD/OutPDashboard';






class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
   return   <Dashboard />
  }
}

render(<App />, document.getElementById('root'));
