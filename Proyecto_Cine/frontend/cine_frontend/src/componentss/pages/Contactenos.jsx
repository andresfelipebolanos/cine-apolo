import React from "react";
import './contactenos.css';
// pagina contactenos
const Contactenos = () =>{
    return(
        <div class="contenido"><br />
		<form action="" id="formulario">
			<h1>Formulario de Contacto</h1>
			<div class="input-control">
				<label for="lblNombre">Nombre:</label>
				<input type="text" name="nombre" id="txtNombre" />
				<div class="error"></div>
            </div>            
            <br/>
            <div class="input-control">
                <label for="lblEmail">Email:</label>
                <input type="email" name="email" id="txtemail"/>
                <div class="error"></div>
            </div>
            <br/>
            <div class="input-control" id="desplegable" >
                <label for="lblAsunto">Asunto:</label>
                <select name="Asunto" id="txtasunto" >
                    <option value="Trabaja con nosotros">Trabaja con nosotros</option>
                    <option value="Objetos perdidos">Objetos perdidos</option>
                    <option value="Empresas">Empresas</option>
                    <option value="Otro motivo">Otro motivo</option>
                </select>
                <div class="error"></div>
            </div>
            <br/>    
            <div class="input-control">
                <label for="lblMensaje">Mensaje:</label>
                <textarea name="Mensaje" id="txtmensaje" rows="4" cols="50" ></textarea>
                <div class="error"></div>
            </div>
            <br/>
            <div class="check">
                <input type="checkbox" name="Consentimiento" id="check" />He leido y doy consentimiento expreso a la politica de datos personales del Teatro Apolo 
                <div class="error"></div>
            </div>
            <br/>    
            <div>
                <button type="submit">enviar</button>
            </div>
            
        </form><br /><br /><br /><br /><br />
    </div>
    );
}
export default Contactenos;