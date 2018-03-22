import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MyNavbar = () => (
  <Navbar fixedTop inverse>
    <Navbar.Header>
      <LinkContainer to="/">
        <Navbar.Brand>
          Onsen Log
        </Navbar.Brand>
      </LinkContainer>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/">
        <NavItem eventKey={1}>
          Map
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/list">
        <NavItem eventKey={1}>
          List
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/register">
        <NavItem eventKey={2}>
          Register
        </NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default MyNavbar;
