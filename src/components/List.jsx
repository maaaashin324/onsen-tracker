import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
  componentDidMount() {
    if (this.props.onsens.length === 0) {
      this.props.getOnsensData();
    }
  }

  render() {
    return (
      <ul className="onsenList">
        {this.props.onsens.map(eachOnsen => <li>{eachOnsen.name}</li>)}
      </ul>
    );
  }
}

List.propTypes = {
  onsens: PropTypes.arrayOf(PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  getOnsensData: PropTypes.func.isRequired,
};
