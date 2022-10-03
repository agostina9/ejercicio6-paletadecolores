import ItemColor from "./ItemColor";
import {CardGroup} from 'react-bootstrap';
const Grilla = ({arregloColores}) => {
    return (
      <CardGroup>
        {
          arregloColores.map((color, posicion)=> <ItemColor key={posicion} nombreColor={color}></ItemColor>)
        }
       
      </CardGroup>
    );
};

export default Grilla;