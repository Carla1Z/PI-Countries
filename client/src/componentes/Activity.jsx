import React from "react";

export default function Activity({ name, difficulty, duration, season }) {
  return (
    <div>
        <h1>Actividades</h1>
      <h3>{name}</h3>
      <p>Dificultad: {difficulty}</p>
      <p>Duración: {duration}</p>
      <p>Temporada: {season}</p>
    </div>
  );
}
