import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubscriptions } from '../../../actions';
import { Table } from 'react-bootstrap';
import _ from 'lodash';
require('./subStyle.css');

class SubTableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }
  onSubmit() {
    this.props.onCardView();
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
  renderSubs() {
    return _.map(this.state.rows, sub => {
      console.log(sub);
      return (
        <tr>
          <td>{sub.collection_id}</td>
          <td>{sub.sensor_path_collection}</td>
          <td>{sub.total_avg}</td>
          <td>{sub.total_deferred}</td>
          <td>{sub.total_max}</td>
          <td>{sub.total_min}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>Subscriptions</h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className="nav-link "
              onClick={this.onSubmit.bind(this)}
              href="#"
            >
              Card View
            </a>
          </li>

          <li className="nav-item">
            <a
              onClick={this.onSubmit.bind(this)}
              className="nav-link alert-warning"
              href="#"
            >
              Table View
            </a>
          </li>
        </ul>

        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Collection Id</th>
              <th>Sensor Path Collection</th>
              <th>Total Average</th>
              <th>Total Deferred</th>
              <th>Total Max</th>
              <th>Total Min</th>
            </tr>
          </thead>
          <tbody>{this.renderSubs()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ subscriptions }) {
  console.log(subscriptions);
  return { subscriptions };
}
export default connect(mapStateToProps, { fetchSubscriptions })(SubTableView);
