import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "../../assets/Styles/dropdown.scss";
const NavMenu = () => {
  return (
    <div className="col-12 px-0 navbar">
      <Navbar expand="xl" className="w-100">
        <Container className="px-md-3 px-1">
          <Navbar.Brand>
            <img src={logo} height="27px" width="100%" alt="logo" />
          </Navbar.Brand>
          <div className="pt-3 d-flex d-xl-none">
            <Nav.Link className="px-2 black bold" href="#home">
              <i className="fa fa-search fa-lg"></i>
            </Nav.Link>
            <Nav.Link className="px-2 black bold " href="#home">
              <i className="fa fa-user fa-lg"></i>
            </Nav.Link>
            <Nav.Link className="px-2 black bold" href="#home">
              AR
            </Nav.Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="border-0 mt-1" id="basic-navbar-nav">
            <Nav className="me-auto pt-3">
              <Nav.Link className="black bold" href="#home">
                Shop
              </Nav.Link>

              <NavDropdown
                className="dropdowntext"
                title="LEARN"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="black bold" href="#link">
                REVIEWS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="pt-3 d-xl-flex d-none">
            <Nav.Link className="black bold" href="#home">
              <i className="fa fa-search fa-lg"></i>
            </Nav.Link>
            <Nav.Link className="black bold mx-2" href="#home">
              <i className="fa fa-user fa-lg"></i>
            </Nav.Link>
            <button className="border-0 btn-yellow zoom-in px-3 px-xl-4 mx-1 lh-1 ">
              SHOP
            </button>
            <Nav.Link className="black bold mx-1" href="#home">
              AR
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavMenu;
