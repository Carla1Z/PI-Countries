import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./PaginadoSelene";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  //estado con la pagina actual, y estado que setea la pagina actual
  //se setea en 1 porque siempre arranca desde la 1 pagina
  //mi pagina actual va a ser 1
const [currentPage, setCurrentPage] =  (1)

//countriesPerPage= cuantos paises tengo por pagina
// 10 paises por pagina
const[countriesPerPage, setCountriesPerPage] = useState(10)

//const ... = la pagina actual donde estoy por(*) la cantidad de paises por pagina
const indexOfLastCountry = currentPage * countriesPerPage //10? 9?

//indice del primer pais = indice del ultimo pais, menos(-) los paises por pagina
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage // 0

//paises en la pagina actual= arreglo del estado
//el slice agarra el arreglo y toma una porcion dependiendo lo que se le pase por parametro. Le pasamos por parametro el indice del primerPais y el indicie del ultimo pais
console.log('allCountries = ', allCountries );
const currentCountry = allCountries.slice(indexOfFirstCountry, indexOfLastCountry )
//le pido que me tome el indice del primer pais, hasta el indice del ultimo pais

const paginado = (pageNumber) => {
  setCurrentPage(pageNumber)
}



  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  return (
    <div>
      <Link to="/countries">Crear pais</Link>
      <h1>PAISESSSSSS</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Volver a cargar todos los paises
      </button>
      <div>
        <select>
          <option value="asc">Ascendente</option>
          <option value="des">Descendente</option>
        </select>
        <select>
          <option>Asia</option>
          <option>North America</option>
          <option>South America</option>
          <option>Africa</option>
          <option>Antarctica</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
        <Paginado 
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        paginado={paginado}
        />
        {/* {
            allCountries && allCountries.map(el => {
                <Card name={el.name} image={el.img} continents={el.continents}/>
            })
        } */}
        {currentCountry?.map((c) => {
            return(
                <fragment>
                    <Link to={'/home/' + c.id}>
                        <Card name={c.name} image={c.image} continents={c.continents} />
                    </Link>
                </fragment>
            )
        })}
      </div>
    </div>
  );
}

