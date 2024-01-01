import React from 'react'
import Cards from "../../Components/Cards/Cards"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDrivers } from '../../Redux/Actions/actions';

const Home = () => {

 //cuando el home se monta que haga el dispatch
 //cuando se monta el home, se dispara el useEffect.
 //Y el useEfect es el que hace el dispatch. Eso hace que se ejecute la action crieitor
 //(../redux/action.js), => funcion getDrivers. la action crieitor(expor const getDrivers)
 //retorna la funciòn. El thunk middleware agarra esta función, la ejecuta, hace
 //el dispatch y al hacer el dispatch esta información va al reducer .El reducer 
 //recibe la action, evalua el action type, y entonces crea un estado nuevo, que
 //es igual al estado anterior con una nueva modificación
 //useEffect()  - useDispatch()
     
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getDrivers());
  },[dispatch]) // los [] se llaman array de dependencia y siempre tiene que estar, aunque este vacío

  

  return (
    <div>
      
      <h1>Esta es la vista del home</h1>
      <Cards />
    </div>
  )
}

export default Home