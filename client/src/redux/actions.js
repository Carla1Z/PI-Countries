import axios from "axios";

// export function getCountries() {
//   return async function (dispatch) {
//     let allCountries = await axios.get("http://localhost:3001/countries", {});
//     return dispatch({
//       type: "GET_COUNTRIES",
//       payload: allCountries.data,
//     });
//   };
// }

export const getCountries = () => {
  return async (dispatch) => {
    let allCountries = await axios.get("http://localhost:3001/countries");
    return dispatch({ type: "GET_COUNTRIES", payload: allCountries.data });
  };
};

export function filterContinents(payload) {
  return {
    type: "FILTER_CONTINENTS",
    payload,
  };
}

export function filterActivity(payload) {
  // let allActivities = await axios.get("http://localhost:3001/activities");
return {
    type: "FILTER_ACTIVITY",
    payload
  };
}

/*
export const buscarPaises = () => {
  //Hacer el llamado a la api para traer el clima de 10 ciudades
  const resultado = "lo que trajo la api";
  return {
    type: "BUSCAR_PAISES",
    payload: resultado,
  };
};

export const buscarPais = (id) => {
  //busco por el id
  const resultado = "ciudad que matchea el id";

  return {
    type: "BUSCAR_PAIS_POR_ID",
    payload: resultado,
  };
};
*/
