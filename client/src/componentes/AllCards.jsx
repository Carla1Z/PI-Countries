//aca manejo la logica de las cartas
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import { getCountries, filterContinents, filterActivity } from "../redux/actions";
import Paginate from "./Paginate";
import styles from "./AllCards.module.css";

// useSelector => selecciona desde nuestro store uno de los estados. Nos va a proporcionar el objeto de initialState, y nosotros nos vamos a quedar con el que necesitemos
//Importo link para que cuando haga clic sobre una carta, me lleve a otra ruta

export default function AllCards() {
  //pedido de estado de redux
  const allCountries = useSelector((state) => state.paises);
  // console.log(allCountries);
  //↑ traemos el estado

  const dispatch = useDispatch();

  //el useEffect se va a encargar de despachar la accion getCountries, haciendo uso del dispatch
  //Despachamos con el useEffect, se llena el allCountries y lo traemos en una constante
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  //PAGINADO
  //--------
  //estado con la pagina actual, y estado que setea la pagina actual
  //se setea en 1 porque siempre arranca desde la 1 pagina
  //mi pagina actual va a ser 1
  const [currentPage, setCurrentPage] = useState(1);

  //countriesPerPage= cuantos paises tengo por pagina
  // 10 paises por pagina
  const [countriesPerPage, setCountriesPerPage] = useState(10);

  //const ... = la pagina actual donde estoy por(*) la cantidad de paises por pagina
  const indexOfLastCountry = currentPage * countriesPerPage; //10

  //indice del primer pais = indice del ultimo pais, menos(-) los paises por pagina
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; // 0

  //paises en la pagina actual= arreglo del estado
  //el slice agarra el arreglo y toma una porcion dependiendo lo que se le pase por parametro. Le pasamos por parametro el indice del primerPais y el indicie del ultimo pais
  const currentCountry = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  // console.log('currentCountry= ', currentCountry);

  //le pido que me tome el indice del primer pais, hasta el indice del ultimo pais

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // FILTROS
  //continente
  function handleFilterContinents(e) {
    dispatch(filterContinents(e.target.value));
  }

  //actividades
  function handleFilterActivity(e){
    dispatch(filterActivity(e.target.value))
  } 

  //LOGICA ↓↓↓
  //en el allCountries tenemos un arreglo de objetos con todos los paises. Si es un arreglo de objeto, necesito mapear, y por cada objeto voy a mostrar una carta
  return (
    <>
    {/* FILTRO CONTINENTES */}
      <div> 
        <select onChange={(e) => handleFilterContinents(e)}>
          <option value='All'>All</option>
          <option value="Asia" >Asia</option>
          <option value="North America" >North America</option>
          <option value="South America" >South America</option>
          <option value="Africa" >Africa</option>
          <option value="Antarctica" >Antarctica</option>
          <option value="Europe" >Europe</option>
          <option value="Oceania" >Oceania</option>
        </select>

        {/* FILTRO ACTIVIDADES */}
        <select onChange={(e) => handleFilterActivity(e)}>
          <option value='All'>Todos</option>
          <option value='created'>Creados</option>
          <option value='db'>Existentes</option>
        </select>


        {/* pregunta si tengo algo adentro de allCountries, si es asi se hace un map. Si no tiene nada adentro, quiero que me muestre un h2. 
        El map se para en cada pais, y por cada uno de esos paises que estamos mapeando va a renderizar un Link
      */}
        <div className={styles.AllCards}>
          {currentCountry.length > 0 ? (
            currentCountry.map((c) => (
              <Link key={c.id} to={`/home/${c.id}`}>
                <Card flags={c.flags} name={c.name} continents={c.continents} />
              </Link>
            ))
          ) : (
            <h2>No hay nada</h2>
          )}
        </div>
        <Paginate
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          paginado={paginado}
        />
      </div>
    </>
  );
}
