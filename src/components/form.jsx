import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Formulario() {
  return (
    <div className="container py-5">
      <Form className="card" style={{ padding: "2rem" }}>
        <Form.Group controlId="text">
          <Form.Label>Datos Personales</Form.Label>
          <Row>
            <Col>
              <Form.Control placeholder="Nombre" />
            </Col>
            <Col>
              <Form.Control placeholder="Apellido" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Ingresar Correo</Form.Label>
          <Form.Control type="email" placeholder="Correo electronico" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}
