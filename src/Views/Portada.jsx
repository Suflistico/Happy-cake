//creacion de portada de Home

import { Container } from "react-bootstrap";

const Principal = () => {
  const BackgroundImage = "img/pateleria.jpg";
  return (
    <div className="container-fluid" style={{backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover", height: "100vh" }}>
      <Container className="text-center">
        <h1 className="pt-5">Bienvenido a Happy Cake</h1>
        <h4>El lugar de los Pasteles Felices</h4>
      </Container>
    </div>
  );
};

export default Principal;
