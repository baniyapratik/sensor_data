import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubscriptions } from '../../../actions';
import { withRouter } from 'react-router-dom';
import Barchart from './BarChart';
import _ from 'lodash';
class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ],
      rows: [],
      showCharts: true,
      total_avg: {}
    };
  }
  componentDidMount() {
    var array_keys = new Array();
    var array_values = new Array();
    this.props.fetchSubscriptions().then(() => {
      _.map(this.props.subscriptions, subscription => {
        _.map(subscription, sub => {
          this.setState({
            rows: [...this.state.rows, sub]
          });
          array_keys.push(sub.collection_id);
          array_values.push(sub.total_avg);
        });
      });

      this.setState({
        total_avg: {
          labels: array_keys,
          label: 'Avg Total',
          datasets: [
            {
              label: 'Collection_id',
              data: array_values,
              backgroundColor: this.state.backgroundColor
            }
          ]
        }
      });
    });
  }

  renderBarChart() {
    console.log(this.state.total_avg);
    return (
      <div className="col-md-12">
        {_.isEmpty(this.state.total_avg) ? (
          ''
        ) : (
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h4 className="title">Average Data Feed</h4>
                <p className="category">Total Avg for given Collection ids</p>
              </div>
              <div className="content">
                <div id="chartHours" className="ct-chart">
                  <Barchart
                    chartData={this.state.total_avg}
                    displayTitle="Total_avg"
                  />
                </div>
                <div className="footer">
                  <hr />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  render() {
    return (
      <div>
        <h1>Statistics</h1>
        <div className="row">{this.renderBarChart()}</div>
      </div>
    );
  }
}
function mapStateToProps({ subscriptions }) {
  console.log(subscriptions);
  return { subscriptions };
}
export default connect(mapStateToProps, { fetchSubscriptions })(
  withRouter(Charts)
);
