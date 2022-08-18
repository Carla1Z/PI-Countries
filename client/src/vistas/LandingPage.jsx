import React from "react";
import { Link } from "react-router-dom";

export default function LadingPage() {
  return (
    <div>
      <h1>Henry Countries ✨</h1>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}
