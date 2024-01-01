import React from 'react'
import style from "./Form.module.css";

const Form = () => {
  return (
    <div className={style.Form_container} >
      <h2 className={style.form_title}>
        AGREGA LOS DATOS DE TU <span className={style.form_title_violeta}>Driver</span>
      </h2>
      <p className={style.datos_obligatorios}>Datos con * obligatorios</p>
      <form className={style.form}>
      <div>
        <label>Nombre *</label>
        <input type='text' placeholder="sólo letras"/>
      </div>
      <div>
        <label>Apellido *</label>
        <input type='text' placeholder="sólo letras"/>
      </div>
      <div>
        <label>Nacionalidad *</label>
        <input type='text' placeholder="sólo letras"/>
      </div>
      <div>
        <label>Imágen</label> 
        <input  placeholder="Url de la imagen"/>
    
      </div>
      <div>
        <label>Fecha de Nacimiento *</label>
        <input type='text' placeholder="sólo numeros"/>
      </div>
      <div>
        <label>Descripción </label>
        <input type='text' placeholder="sólo letras"/>
      </div>
      <div>
        <label>Escuderías(Teams) *</label>
        <input type='text' placeholder="sólo letras y comas"/>
      </div>
      </form>
    </div>
  )
}

export default Form;


//FORM PAGE |**: en esta vista se encontrará el formulario para crear un nuevo driver.

//Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:


//  Nombre.
//  Apellido.
//  Nacionalidad.
//  Imagen.
//  Fecha de Nacimiento.
//  Descripción.
//  Escuderías.
//  Posibilidad de seleccionar/agregar varias escuderías en simultáneo.
//  Botón para dar de alta (crear) el nuevo driver.

// [**IMPORTANTE**]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre del driver no pueda contener símbolos,etc.