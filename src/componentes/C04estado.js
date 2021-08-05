import React,{useState} from 'react';

const EjemploDeEstado =() =>{
    //"numero" nombre del estado y puede iniciar como numero,
    //boleano, objeto, matriz, etc.
    //"setNumero" es el  modificador de estado "numero"


  const [numero,setNumero] = useState(0);

  //Definiendo funcion flecha que incremente un valor
  const aumentar = () =>{
      console.log("Hacer clic");
      setNumero(numero + 1);
  }

  //Dentro de HTML, se da Lectura en llaves a las variables
  //Se puede devolver solo UN elemento...., caso contrario
  //Se puede usar <Fragment> o <div>
  return(
      <div style={{backgroundColor:'yellowgreen'}}>
          <h4>Componente 4. Ejemplo con definicion de estado</h4>

          <h3>Muestra incremento de valor .... {numero} </h3>
          <button onClick={aumentar} >Aumentar en 1</button>

          <hr/>
      </div>

  );
}

export default EjemploDeEstado;