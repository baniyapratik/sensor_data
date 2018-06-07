import React, { Component } from 'react';
import SubCardView from './SubCardView';
import SubTableView from './SubTableView';

class Subscription extends Component {
  state = {
    showtableView: false
  };

  renderContent() {
    if (this.state.showtableView) {
      return (
        <SubTableView
          onCardView={() => this.setState({ showtableView: false })}
        />
      );
    }
    return (
      <SubCardView onTableView={() => this.setState({ showtableView: true })} />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Subscription;
