import { Link } from "react-router-dom";
import { FaArrowLeft, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container } from "react-bootstrap";
//creacion de barra de navegacion
const CustomNavbar = () => {
  return (
    <Nav className="navbar bg-orange navbar-expanded" data-bs-theme="dark">
      <Container className="justify-content-start">
        <Link to="/" className="text-white ms-3 text-decoration-none">
          <FaArrowLeft className="me-2" />
          Home
        </Link>
        <Link to="Contacto" className="text-white ms-3 text-decoration-none">
          <FaEnvelope className="me-2" />
          Contacto
        </Link>
      </Container>
    </Nav>
  );
};

export default CustomNavbar;
