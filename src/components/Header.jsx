import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

function getNavElement(name, path) {
  return (
    <LinkContainer to={path} key={name}>
      <Nav.Link>{name}</Nav.Link>
    </LinkContainer>
  );
}

function Header(props) {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">Frank W.</Navbar.Brand>
      <Nav className="ms-auto">
        {props.pages.map((page) => getNavElement(page.name, page.path))}
      </Nav>
    </Navbar>
  );
}

export default Header;
