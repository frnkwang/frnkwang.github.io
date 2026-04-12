import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function getNavElement(name, path) {
  return (
    <LinkContainer to={path} key={name}>
      <Nav.Link>{name}</Nav.Link>
    </LinkContainer>
  );
}

function getCurrentPageName(pages, pathname) {
  const page = pages.find((page) => page.path === pathname);
  return page ? page.name : "";
}

function Header(props) {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">Frank W.</Navbar.Brand>{" "}
      {getCurrentPageName(props.pages, useLocation().pathname)}
      <Nav className="ms-auto">
        {props.pages.map((page) => getNavElement(page.name, page.path))}
      </Nav>
    </Navbar>
  );
}

export default Header;
