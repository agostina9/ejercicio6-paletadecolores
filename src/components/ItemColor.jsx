import {Col, Button, Card} from 'react-bootstrap';

const ItemColor = () => {
    return (
        <Col>
        <Card>
            <Card.Title>Color</Card.Title>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body className='d-flex'>
            <Button variant='danger' className='align-item-end'>Borrar</Button>
          </Card.Body>
        </Card>
      </Col>
      
    );
};

export default ItemColor;