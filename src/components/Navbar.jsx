import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import logo from "../assets/site-logo-white.png";
import "./mediaqueries.css";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <Navbar className="custom-navbar" expand="lg">
        <Container className="nav-div">
          <Navbar.Brand href="/">
            <img alt="" src={logo} width="80" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
            <Nav className="ml-auto nav-links-group">
              <Nav.Link as={Link} className="home-link" to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="reviews-link" to="/myreviews">
                My Reviews
              </Nav.Link>
              <Nav.Link as={Link} className="watchlist-link" to="/watchlist">
                Watchlist
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
