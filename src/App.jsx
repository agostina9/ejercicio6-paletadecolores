import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Formulario from './components/Formulario'


function App() {
  return (
    <Container className='my-5'>
      <h1 className="display-2 text-center">Paleta de colores</h1>
      <hr />
      <Formulario></Formulario>
</Container>
  );
}

export default App;
