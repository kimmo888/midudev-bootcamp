const MessagesProps = (props) => {  //en react las funciones son llamadas módulos si están en  un archivo diferente, y las funciones reciben parámetros, pero en React se llaman props.
    return (
        <h2 style={{color: props.color}} > Este es un Modulo de MessagesProps  {props.messages} </h2> //props.message se llama como una propiedad del componente MessagesProps, desde donde es llamado se da el valor que va a tener .message. junto con el color que se le pasa como propiedad.como un objeto.
        // en React para pasar un style a un componente se pone en el componente como un objeto.
    )
}

export default MessagesProps;