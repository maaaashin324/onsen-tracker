import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Row, Col } from 'react-bootstrap';

const Heading = ({ enableFilter }) => {
  const Hokkaido = {
    name: 'Hokkaido',
    image: 'map-hokkaido.png',
  };
  const Tohoku = {
    name: 'Tohoku',
    image: 'map-tohoku.png',
  };
  const Kantou = {
    name: 'Kanto',
    image: 'map-kanto.png',
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

    enableFilter();
  };

  return (
    <Grid className="district-table">
      {japanDistrict.map(eachRow => (
        <Row className="show-grid">
          {eachRow.map(eachDistrict => (
            <Col xs={6} md={4}>
              <img
                className="rounded-circle"
                src={`assets/image/${eachDistrict.image}`}
                alt="each district"
                width="140px"
                height="140px"
              />
              <h2>{eachDistrict.name}</h2>
              <p>{eachDistrict.name}</p>
              <p>
                <Button
                  onClick={handleButton}
                >
                  Filter!
                </Button>
              </p>
            </Col>
          ))}
        </Row>
      ))}
    </Grid>
  );
};

Heading.propTypes = {
  enableFilter: PropTypes.func.isRequired,
};

export default Heading;
