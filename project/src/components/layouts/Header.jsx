import React from "react";
import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="nav-brand">
          Dev Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="all-profiles">
              Profiles
            </Nav.Link>
            <Nav.Link as={NavLink} to="add-new">
              Add Profile
            </Nav.Link>
            <Nav.Link as={NavLink} to="register">
              Register
            </Nav.Link>
            <Nav.Link as={NavLink} to="login">
              Login
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
