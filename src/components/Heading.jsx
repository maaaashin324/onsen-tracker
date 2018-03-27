import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import japanData from '../utils/japanData';

const Heading = ({ getOnsensDataWithFilter }) => {
  const handleButton = (e) => {
    e.preventDefault();

    getOnsensDataWithFilter(e.target.value);
  };

  return (
    <Grid className="district-table">
      <Row>
        {Object.values(japanData).map(eachDistrict => (
          <Col
            sm={6}
            md={4}
            className="district-column"
            key={eachDistrict.name}
          >
            <h2>{eachDistrict.name}</h2>
            <img
              className="district-image"
              src={`assets/image/${eachDistrict.image}`}
              alt="each district"
            />
            <p className="district-paragraph" />
            <Button
              className="district-button"
              value={eachDistrict.name}
              onClick={handleButton}
            >
              Filter!
            </Button>
            <hr className="district-table-horizon" />
          </Col>
        ))}
      </Row>
    </Grid>
  );
};

Heading.propTypes = {
  getOnsensDataWithFilter: PropTypes.func.isRequired,
};

export default Heading;
