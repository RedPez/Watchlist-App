import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import Homepage from "../pages/Homepage";
import MyReviews from "../pages/MyReviews";
import WatchList from "../pages/WatchList";

function MyNavbar() {
  return (
    <>
      <Navbar className="custom-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img alt="" src="../src/assets/images/site-logo.png" width="80" />{" "}
          </Navbar.Brand>

          <Nav className="nav-links-group">
            <Nav.Link className="home-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="reviews-link" href="MyReviews">
              My Reviews
            </Nav.Link>
            <Nav.Link className="watchlist-link" href="Watchlist">
              Watchlist
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
