import React, { useEffect } from "react";
import getPokemon from "../api/api";
import { useState } from "react";


function Pokemon({ name, url}) {
  const [pokemonImage, setPokemonImage] = useState("");

  useEffect(() => {
    getPokemon(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonImage(data.sprites.front_default);
      });
  }, []);

  return (
    <div>
      <div className="pokemon">
        <h3 className="pokemonName">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h3>
        <img className="pokemonImage" src={pokemonImage}></img>
      </div>
    </div>
  );
}

export default Pokemon;
