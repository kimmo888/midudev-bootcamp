import './App.css';
import MensajeModulo from './MensajeModulo';

const Mensaje = ()=>{
  return <h2> Hola mundo desde una function </h2>;
}
const Description = ()=>{
  return <p>Esta es una App del curso fullstack Bootcamp </p>;
}

function App() { //dentro de {} se puede evaluar una expresión en jsx
  //las funciones por buenas practicas no devén tener mas funciones dentro de ellas.
  const MensajeC = 'Hola mundo desde una variable';
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Mensaje />
      <Description />
      <MensajeModulo />
      <p>{MensajeC}</p>
    </div>
  );
}

export default App;
