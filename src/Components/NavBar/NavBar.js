import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo';
import './NavBar.css';


function NavBar() {
    return (
      <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> <Logo/>SUShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#clothes">Ropa</Nav.Link>
            <Nav.Link href="#shoes">Calzado</Nav.Link>
            <Nav.Link href="#cups">Gorras</Nav.Link>
            

          </Nav>
          <Nav.Link href="#cart"> <CartWidget/> </Nav.Link>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;