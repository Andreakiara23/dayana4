//rafce<
import React from 'react'
import  "./C03compCss.css"      //Archivo css con estilos normales
import style from  './C03compCssObj.js'   //Archivo js con estilos como objeto

const C03componenteConCss = () => {
    return(
        <div className= "marcoComponente">
            <h4> Componente 3. Con formas de  definir estilos</h4>

            <button style={{backgroundColor: 'green', color:'blue', padding: '3px'}}>
                Boton 1 con estilos en linea de artributos (Definido como objeto)
            </button>
            <hr/>

            <button>
                Boton 2 con estilos en archivos css (normal)
            </button>
            <br/>

            <button style={style.estilo1}>
                Boton 3 con estilos en archivo js (Definido  como objeto)
            </button>
        </div>
    )
}

export default C03componenteConCss