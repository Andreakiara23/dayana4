import C01componente from "./componentes/C01componentes";
import C02contador from "./componentes/C02componentes";
import C03componenteConCss from "./componentes/C03compCss";
import EjemploDeEstado from "./componentes/C04estado";
import EjemploDeDobleEstado from "./componentes/C05dobleestado";
import ComponenteConVariable from "./componentes/C06variable";
import OperadorTernario from "./componentes/C07operador";
import Matriz from "./componentes/C08matriz";


function App(){
  return(
    <div>
      <C01componente />
      <hr />
      <C02contador />
      <hr />
      <C03componenteConCss />
      <hr />
      <EjemploDeEstado />
      <hr />
      <EjemploDeDobleEstado />
      <hr />
      <ComponenteConVariable  xVariable ="hola mundo ...."/>
      <hr />
      <OperadorTernario />
      <hr />
      <Matriz />
    </div>
  )
}