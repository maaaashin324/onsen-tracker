import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Row, Col } from 'react-bootstrap';

const Heading = ({ getOnsensDataWithFilter }) => {
  const Hokkaido = {
    name: 'Hokkaido',
    image: 'map-hokkaido.png',
  };
  const Tohoku = {
    name: 'Tohoku',
    image: 'map-tohoku.png',
  };
  const Kantou = {
    name: 'Kantou',
    image: 'map-kantou.png',
  };
  const Chubu = {
    name: 'Chubu',
    image: 'map-chubu.png',
  };
  const Kinki = {
    name: 'Kinki',
    image: 'map-kinki.png',
  };
  const Chugoku = {
    name: 'Chugoku',
    image: 'map-chugoku.png',
  };
  const Shikoku = {
    name: 'Shikoku',
    image: 'map-shikoku.png',
  };
  const Kyushu = {
    name: 'Kyushu',
    image: 'map-kyushu.png',
  };
  const japanDistrict = [
    [Hokkaido, Tohoku, Kantou],
    [Chubu, Kinki, Chugoku],
    [Shikoku, Kyushu],
  ];

  const handleButton = (e) => {
    e.preventDefault();

    getOnsensDataWithFilter(e.target.value);
  };

  return (
    <Grid className="district-table">
      {japanDistrict.map(eachRow => (
        <div>
          <Row>
            {eachRow.map(eachDistrict => (
              <Col md={4} className="district-column">
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
              </Col>
            ))}
          </Row>
          <hr className="district-table-horizon" />
        </div>
      ))}
    </Grid>
  );
};

Heading.propTypes = {
  getOnsensDataWithFilter: PropTypes.func.isRequired,
};

export default Heading;
