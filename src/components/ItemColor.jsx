import { Col, Button, Card } from "react-bootstrap";

const ItemColor = ({ nombreColor, borrarColor }) => {
  return (
    <Col>
      <Card>
        <Card.Title>{nombreColor}</Card.Title>
        <div
          style={{backgroundColor: nombreColor}}
          className="cuadrado"
        ></div>
        <Card.Body className="d-flex">
          <Button variant="danger" onClick={() => borrarColor(nombreColor)}>
            Borrar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemColor;
