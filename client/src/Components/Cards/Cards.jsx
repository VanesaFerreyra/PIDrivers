import React from 'react'
import Card from "../Card/Card"
import style from "./Cards.module.css";
import { useSelector } from 'react-redux'; 


const Cards = () => {
  const drivers = useSelector(state =>state.drivers)

  return (
    <div className={style.container}>
      {drivers.map(driver =>{
        return <Card 
          key={driver.id}
          id= {driver.id}
          name = {driver.name}
          teams = {driver.teams}
          />
      })}
    </div>
  )
}

export default Cards