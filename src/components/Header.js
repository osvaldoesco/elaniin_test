import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/components/header.scss';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar
          color="#111111"
          light expand="md"
          className="home-navbar">
          <NavbarBrand href="/">
            <img src="logo.svg" alt="Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="/"
                  className={this.props.active === 'home' ? "nav-active" : ""}>
                  <span>Home.</span>
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/about"
                  className={this.props.active === 'about' ? "nav-active" : ""}>
                  <span>About Me.</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/">
                  <span>Works.</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/">
                  <span>Journal.</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/contact"
                  className={this.props.active === 'contact' ? "nav-active" : ""}>
                  <span>Contact.</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

// <UncontrolledDropdown nav inNavbar>
//   <DropdownToggle nav caret>
//     Options
//   </DropdownToggle>
//   <DropdownMenu right>
//     <DropdownItem>
//       Option 1
//     </DropdownItem>
//     <DropdownItem>
//       Option 2
//     </DropdownItem>
//     <DropdownItem divider />
//     <DropdownItem>
//       Reset
//     </DropdownItem>
//   </DropdownMenu>
// </UncontrolledDropdown>
