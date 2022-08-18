const initialState = {
  paises: [],
  totalPaises: [],
  // continentes: [],
  activities: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        paises: action.payload,
        totalPaises: action.payload,
        //en el estado 'paises' que en un principio es un arreglo vacio, manda todo lo que mande la action 'GET_COUNTRIES'
      };
    case "FILTER_CONTINENTS":
      // const continents = state.paises.filter(
      // (el) => el.continents === action.payload
      // );
      const allContinents = state.totalPaises;
      // const countriesFiltered = allContinents.filter(
      //   (el) => el.continents === action.payload
      // );
      const countriesFiltered =
        action.payload === "All"
          ? allContinents
          : allContinents.filter((el) => el.continents === action.payload);
      // console.log("countriesFiltered=", countriesFiltered);
      return {
        ...state,
        paises: countriesFiltered,
      };
    case "ORDER_BY_NAME":
      let sortedArr =
        action.payload === "asc"
          ? state.paises.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.paises.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        paises: sortedArr,
      };
    case "FILTER_ACTIVITY":
      const allActivities = state.activities;
      const activityFilter =
        action.payload === "created"
          ? allActivities.filter((el) => el.createdInDb)
          : allActivities.filter((el) => !el.createdInDb);
      return {
        ...state,
        activities:
          action.payload === "All" ? state.allActivities : activityFilter,
      };
    default:
      return state;
  }
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "BUSCAR_PAIS_POR_ID":
//       return {
//         ...state,
//         pais: action.payload,
//       };
//     case "BUSCAR_PAISES":
//       return {
//         ...state,
//         paises: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export default reducer;
