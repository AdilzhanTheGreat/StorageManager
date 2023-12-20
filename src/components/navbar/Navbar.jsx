import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbarMain">
      <Container>
        <Navbar.Brand href="#home">Storage Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Products</Nav.Link>
            <Nav.Link href="/admin">AdminPanel</Nav.Link>
            <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="/user">
                  Information
                </NavDropdown.Item>
              <NavDropdown.Item href="/user">
                   Settings  
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;