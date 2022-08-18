import React from "react";
import styles from './Card.module.css';


//Estructura de una sola carta
export default function Card({ flags, name, continents }) {
  return (
    <div className={styles.Card}>
      <img src={flags} alt="flag" width="200px" height="250px" />
      <h3>{name}</h3>
      <h5>{continents}</h5>
    </div>
  );
}

// Imagen de la bandera
// Nombre
// Continente
