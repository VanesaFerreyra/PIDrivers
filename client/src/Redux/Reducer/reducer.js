//importar las actions-types:
import { GET_DRIVERS } from "../Actions/actions";

//definir el initialState:
const initialState= {
  drivers: [],
};


//definir la funcion rootReducer
const rootReducer = (state=initialState, action)=> {
  switch(action.type){
    case GET_DRIVERS:
      return {...state, drivers: action.payload} 

    default:
        return {...state };
   }
}

export default rootReducer;