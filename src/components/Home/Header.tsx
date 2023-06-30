import {
  Form,
  Nav,
  Navbar,
  Container,
  NavDropdown,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar  expand="lg" variant="dark" className="color-nav">
        <Container fluid>
          <Navbar.Brand  id="Sol">Soleiman Insurance Agency</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              <ListGroup horizontal>
                <ListGroup.Item>
                  <Link to="/">Home</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/quote">Quote</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/about">About Us</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <Link to="/services">Servives</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavDropdown
                    title="Sign in"
                    id="navbarScrollingDropdown"
                    disabled
                  >
                    <NavDropdown.Item href="#action3">Admin</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
                  </NavDropdown>
                </ListGroup.Item>
              </ListGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
