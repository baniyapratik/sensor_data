import React, { Component } from 'react';
import imagine from '../../assets/img/sidebar-3.jpg';

class SideBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar" data-color="blue" data-image={imagine}>
          <div className="sidebar-wrapper" style={{ padding: '50px' }}>
            <div className="nav" id="nav-logo">
              <a href="/" style={{ color: '#FFF' }}>
                <img
                  src="https://user-images.githubusercontent.com/10326883/36414375-e9339856-15d6-11e8-9bbd-035581f8416e.jpg"
                  style={{ height: '30px', width: '30px' }}
                />
                {'   '}
                MDT
              </a>
            </div>
            <br />

            <div className="nav" id="nav-dashboard">
              <a href="/" style={{ color: '#FFF' }}>
                <i className="pe-7s-note2" />
                Subscriptions
              </a>
            </div>

            <div className="nav" id="nav-dashboard">
              <a href="/dashboard/statistics" style={{ color: '#FFF' }}>
                <i className="pe-7s-graph" />
                Statistics
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SideBar;
// <li className="active">
//   <a href="/dashboard/sites">
//     <p>Sites</p>
//   </a>
// </li>
// <li>
//   <a href="/dashboard/locations">
//     <p>Locations</p>
//     <br />
//   </a>
// </li>
// <li>
//   <a href="/dashboard/zones">
//     <p>Zones</p>
//     <br />
//   </a>
// </li>
