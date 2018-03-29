import React from 'react';
import { Button } from 'react-bootstrap';
import Map from '../containers/Map';
import Heading from '../containers/Heading';

const Homepage = () => {
  const scrollDown = (e) => {
    e.preventDefault();

    window.scrollBy({
      top: 800,
      behavior: 'smooth',
    });
  };

  return (
    <div className="home-contents">
      <Button
        bsStyle="info"
        id="mapFilterButton"
        onClick={scrollDown}
      >
        Filter
      </Button>
      <Map />
      <Heading />
    </div>
  );
};

export default Homepage;
