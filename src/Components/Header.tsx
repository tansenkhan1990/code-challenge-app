import { Container, Nav, Navbar } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
