import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Delayed extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }

  delayedTimer = null;

  componentDidMount() {
    console.log('this.props.waitBeforeShow: ', this.props.waitBeforeShow);
    this.delayedTimer = setTimeout(() => {
      this.setState({ hidden: false });
    }, this.props.waitBeforeShow);
  }
  componentWillUnmount(delayedTimer) {
    // const { delayedTimer } = this.setState;
    clearTimeout(this.delayedTimer);
  }
  render() {
    return this.state.hidden ? '' : this.props.children;
  }
}

Delayed.propTypes = {
  waitBeforeShow: PropTypes.number.isRequired,
};

export default Delayed;
