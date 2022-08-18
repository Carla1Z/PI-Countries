import React from "react";

export default function Paginate({ countriesPerPage, allCountries, paginado }) {
  const pageNumbers = [];

  //Math.ceil redondea para arriba. Me va a redondear todos mis paises sobre la cantidad de paises por pagina
  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button onClick={() => paginado(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
}