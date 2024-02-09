import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../src/assets/images/site-logo.svg"
              width="150"
              height="60"
              className=""
            />{" "}
          </Navbar.Brand>
          
          <Nav className="justify-content-end">
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
