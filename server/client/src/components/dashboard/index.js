import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import SideBar from '../Navbar/Sidebar';
import Charts from './Charts/Charts';
import Subscription from './Subscription/Subscription';
class Dashboard extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="wrapper">
            <div className="main-panel">
              <SideBar />
              <Route exact path="/" component={Subscription} />
              <Route
                exact
                path="/dashboard/subscriptions"
                component={Subscription}
              />
              <Route exact path="/dashboard/statistics" component={Charts} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default Dashboard;
