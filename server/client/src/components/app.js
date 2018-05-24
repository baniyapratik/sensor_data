import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container-fluid">
            <Dashboard />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
