// import React from "react";

// export default function Paginado({ countriesPerPage, allCountries, paginado }) {
//   const pageNumbers = [];

//   //Math.ceil redondea para arriba. Me va a redondear todos mis paises sobre la cantidad de paises por pagina
//   for (let i = 0; i <= Math.ceil(allCountries / countriesPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul>
//         {pageNumbers &&
//           pageNumbers.map((number) => {
//             <li key={number}>
//               <a onClick={() => paginado(number)}>{number}</a>
//             </li>;
//           })}
//       </ul>
//     </nav>
//   );
// }
