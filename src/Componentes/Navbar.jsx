import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function NavBar() {
  return (
    <Navbar>
      <Container>
          <Nav >
            <Nav.Link href="/">Home</Nav.Link>
            <br />
            <Nav.Link href="/Instrucciones">Mas Instrucciones</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;


