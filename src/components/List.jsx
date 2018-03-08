import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

export default class List extends Component {
  componentDidMount() {
    if (this.props.onsens.length === 0) {
      this.props.getOnsensData();
    }
  }

  render() {
    return (
      <Table striped bordered condensed hover className="onsenTable" style={{ marginTop: '100px' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {this.props.onsens.map(eachOnsen => (
            <tr key={eachOnsen.ID}>
              <td>{eachOnsen.ID}</td>
              <td>{eachOnsen.Name}</td>
              <td>{eachOnsen.Address}</td>
              <td>{eachOnsen.Rating}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

List.propTypes = {
  onsens: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.number,
    Name: PropTypes.string,
    Address: PropTypes.string,
    Rating: PropTypes.number,
  })).isRequired,
  getOnsensData: PropTypes.func.isRequired,
};
