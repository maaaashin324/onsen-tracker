import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import japanData from '../utils/japanData';

const Heading = ({ activateFilterDistrict }) => {
  const scrollToTop = () => {
    window.scrollBy({
      top: -10000,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleButton = (e) => {
    e.preventDefault();

    activateFilterDistrict(e.target.value);
    scrollToTop();
  };

  return (
    <Grid id="district-table">
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
              bsSize="large"
              bsStyle="success"
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
  activateFilterDistrict: PropTypes.func.isRequired,
};

export default Heading;
