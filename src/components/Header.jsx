import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "./Header.css";

function getNavElement(name, path) {
  return (
    <LinkContainer to={path} key={name}>
      <Nav.Link className="fs-5">{name}</Nav.Link>
    </LinkContainer>
  );
}

function getCurrentPageName(pages, pathname) {
  const page = pages.find((page) => page.path === pathname);
  return page ? page.name : "";
}

function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
        <h3>Frank W.</h3>
      </Navbar.Brand>
      {getCurrentPageName(props.pages, useLocation().pathname)}
      <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {props.pages.map((page) => getNavElement(page.name, page.path))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
