import React from 'react'
import style from "./Card.module.css";


const Card = (props) => {
  const{image, name, teams, onClose} = props;
  return (
    <div className={style.card}>
  
      <button onClick={onClose}>X</button>
      <img src={image} alt ="" />
      <h2>{name.forename}</h2>
      <h2>{name.surname}</h2>
      <h2>{teams}</h2>
    </div>
    
  )
}

export default Card