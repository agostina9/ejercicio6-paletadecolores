import Grilla from "./Grilla";
import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <div>
        
        <Form>
            <Form.Label>Administrar colores</Form.Label>
          <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Ingresar un color" />
          <Button variant="primary" type="submit">
            Guardar
          </Button>
          </Form.Group>
        </Form>
          <Grilla></Grilla>

    </div>
  );
};

export default Formulario;
