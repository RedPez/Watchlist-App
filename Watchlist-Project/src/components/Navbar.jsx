import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Navbar.css'
import Homepage from '../pages/Homepage'
import MyReviews from '../pages/MyReviews';
import WatchList from '../pages/WatchList';

function MyNavbar() {
  return (
    <>
      <Navbar>
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="../src/assets/images/site-logo.svg"
              width="150"
              height="60"
            />{" "}
          </Navbar.Brand>
          
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="MyReviews">My Reviews</Nav.Link>
            <Nav.Link href="Watchlist">Watchlist</Nav.Link>
        
         
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
