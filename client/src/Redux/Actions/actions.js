import axios from "axios";

export const GET_DRIVERS = "GET_DRIVERS";

export const getDrivers = () => {
    return async function(dispatch){
        const apiData = await axios.get("http://localhost:5000/drivers");

        const drivers = apiData.data;
        dispatch({
            type: GET_DRIVERS,
            payload: drivers
        })
    };
};

//ACA HAY UN ERROR EN AXIOS, NO RECONOCE EL ID
//export const getDetails = (id) =>{
    //return async function(dispatch){        //Acá las action retornan una función,
        //return const details = await axios.get(`http://localhost:5000/drivers/${id}`).data;//hacen su request(en este caso a axios)
        //sacan la información que les importa(apiData.data)
          //dispatch({//y despues hacen el dispatch con el action type correspondiente
           // type: "GET_DETAILS",
           // payload: details
       // });
   // };
//};

export const filterBySource = ()=>{//HAY QUE COMPLETAR ESTE FILTRO, QUE ES POR FUENTE(API O BASE DE DATOS)
    dispatch({                     // ESTA ES UNA ACTION COMUN COMO LA DE LA CLASE DE REDUX, EL CONTADOR
        type: "FILTER_BY_SOURCE"
    })
};


//dispatch es un hook
//Acá las action retornan una función, hacen su request(en este caso a axios),
//sacan la información que les importa(apiData.data), y despues hacen el dispatch
//con el action type correspondiente