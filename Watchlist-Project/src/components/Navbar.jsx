import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <>
      <Navbar>
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#Home">
            <img
              alt=""
              src="../src/assets/images/site-logo.svg"
              width="150"
              height="60"
            />{" "}
          </Navbar.Brand>
          
          <Nav>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#MyReviews">My Reviews</Nav.Link>
            <Nav.Link href="#Watchlist">Watchlist</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
