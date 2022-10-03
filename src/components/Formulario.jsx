import Grilla from "./Grilla";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";


const Formulario = () => {
    const coloresLocalStorage=JSON.parse(localStorage.getItem('arregloColoresKey'))||[];
  const [color, setColor] = useState("");
  const [arregloColores, setArregloColores] = useState([]);

  useEffect(()=>{

localStorage.setItem('arregloColoresKey',JSON.stringify(arregloColores))
  },[arregloColores])

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloColores([...arregloColores, color]);
    setColor('');
  };

  const borrarColor=(color)=>{
    let arregloModificado = arregloColores.filter((item)=>(item !== color));
    setArregloColores(arregloModificado)
  }

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
      <Grilla arregloColores={arregloColores} borrarColor={borrarColor}></Grilla>
    </div>
  );
};

export default Formulario;
