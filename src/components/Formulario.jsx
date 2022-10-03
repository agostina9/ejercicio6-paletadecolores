import Grilla from "./Grilla";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const Formulario = () => {
  const [color, setColor] = useState("");
  const [arregloColores, setArregloColores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloColores([...arregloColores, color]);
    setColor('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Administrar colores</Form.Label>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingresar un color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form.Group>
      </Form>
      <Grilla arregloColores={arregloColores}></Grilla>
    </div>
  );
};

export default Formulario;
