import ItemColor from "./ItemColor";
import {CardGroup} from 'react-bootstrap';
const Grilla = ({arregloColores, borrarColor}) => {
    return (
      <CardGroup>
        {
          arregloColores.map((color, posicion)=> <ItemColor key={posicion} nombreColor={color} borrarColor={borrarColor}></ItemColor>)
        }
       
      </CardGroup>
    );
};

export default Grilla;