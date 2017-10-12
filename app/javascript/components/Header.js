import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavItem,
} from 'react-bootstrap';

import Pet from './Pet';

class Header extends Component {
  render () {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Pet Lovers</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="/">Pets</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem href="/sign-in">Log in</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
