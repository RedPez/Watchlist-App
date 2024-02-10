import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Navbar.css'

function MyNavbar() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#Home">
            <img
              alt=""
              src="../src/assets/images/site-logo.svg"
              width="150"
              height="60"
            />{" "}
          </Navbar.Brand>
          
          <Nav className="nav-links-group">
            <Nav.Link className="home-link" href="../src/pages/Homepage.jsx">Home</Nav.Link>
            <Nav.Link className="reviews-link" href="../src/pages/MyReviews.jsx">My Reviews</Nav.Link>
            <Nav.Link className="watchlist-link" href="../src/pages/WatchList.jsx">Watchlist</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
