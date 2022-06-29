import './App.css';
import MensajeModulo from './MensajeModulo'; //crear funciones o modulo en otras carpetas
import MessagesProps from './MessagesProps';

const Mensaje = ()=>{
  return <h2> Hola mundo desde una function </h2>;
}
const Description = ()=>{
  return <p>Esta es una App del curso fullstack Bootcamp </p>;
}

function App() { //dentro de {} se puede evaluar una expresión en jsx
  //las funciones por buenas practicas NO devén tener mas funciones dentro de ellas.
  const MensajeC = 'Hola mundo desde una variable';
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Mensaje />
      <Description />
      <MensajeModulo />
      <MessagesProps color='red' messages=' con texto para que sea mas reutilizable' />
      <p>{MensajeC}</p>
    </div>
  );
}

export default App;
