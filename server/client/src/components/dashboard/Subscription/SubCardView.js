import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubscriptions } from '../../../actions';
import { withRouter } from 'react-router-dom';
import {
  ButtonToolbar,
  Button,
  Overlay,
  Popover,
  Modal,
  OverlayTrigger
} from 'react-bootstrap';
import _ from 'lodash';
require('./subStyle.css');

class SubCardView extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = e => {
      this.setState({ target: e.target, show: !this.state.show });
    };
    this.state = {
      rows: [],
      showModal: false
    };
  }

  componentDidMount() {
    this.props.fetchSubscriptions().then(() => {
      _.map(this.props.subscriptions, subscription => {
        _.map(subscription, sub => {
          this.setState({
            rows: [...this.state.rows, sub]
          });
        });
      });
    });
  }
  onSubmit() {
    this.props.onTableView();
  }
  onDetailClick() {
    console.log(this.state.rows);
  }

  renderSubs() {
    return _.map(this.state.rows, sub => {
      console.log(sub);
      return (
        <div
          className="col-md-3"
          key={sub.collection_id}
          id={sub.collection_id}
        >
          <div className="card ">
            <div className="header">
              <h4 className="title">{sub.sensor_path_collection}</h4>
            </div>
            <div className="content">
              <div className="footer">
                <div className="legend">
                  <i className="fa fa-circle text-info" /> Collection Id:{' '}
                  {sub.collection_id}
                  <br />
                  <i className="fa fa-circle text-danger" /> Total Avg:{
                    sub.total_avg
                  }
                  <br />
                  <i className="fa fa-circle text-warning" /> Total Deferred:{
                    sub.total_deferred
                  }
                  <br />
                  <i className="fa fa-circle text-success" /> Total Max:{
                    sub.total_max
                  }
                  <br />
                  <i className="fa fa-circle text-secondary" /> Total Min:{
                    sub.total_min
                  }
                </div>
                <hr />
                <div className="stats">
                  {/*
                    <button
                      className="btn btn-warning"
                      onClick={this.onDetailClick.bind(this, sub.site_id)}
                    >
                      Details
                    </button>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  getInitialState() {
    return { showModal: false };
  }
  open() {
    this.setState({ showModal: true });
  }
  close() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div>
        <h1>Subscriptions</h1>

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link alert-warning" href="#">
              Card View
            </a>
          </li>

          <li className="nav-item">
            <a
              onClick={this.onSubmit.bind(this)}
              className="nav-link "
              href="#"
            >
              Table View
            </a>
          </li>
        </ul>

        <div className="row">{this.renderSubs()}</div>
      </div>
    );
  }
}
function mapStateToProps({ subscriptions }) {
  console.log(subscriptions);
  return { subscriptions };
}
export default connect(mapStateToProps, { fetchSubscriptions })(
  withRouter(SubCardView)
);
