import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import "./mediaqueries.css";

function MyNavbar() {
  return (
    <>
      <Navbar className="custom-navbar" expand="lg">
        <Container className="nav-div">
          <Navbar.Brand href="/">
            <img alt="" src="src/assets/site-logo-white.png" width="80" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggle" />
          <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
          <Nav className="ml-auto nav-links-group">
            <Nav.Link className="home-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="reviews-link" href="/MyReviews">
              My Reviews
            </Nav.Link>
            <Nav.Link className="watchlist-link" href="/Watchlist">
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
