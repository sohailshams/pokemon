import React, { useEffect, useState } from "react";
import getPokemon from "../api/api";

function PokemonDetail({ pokemonName, baseUrl, pokemonImage }) {
  const [nameOfPokemon, setNameOfPokemon] = useState(pokemonName);
  console.log("detail component", nameOfPokemon);

  useEffect(() => {
    //   getPokemon(baseUrl)
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       setPokemonImage(data.sprites.front_default);
    //     });
    setNameOfPokemon(pokemonName);
  }, [pokemonName]);
  return (
    <div id="pokemonDetail">
      <h1>title: {nameOfPokemon}</h1>
      <img src={pokemonImage} alt="No image" />
      <h3>Abilities</h3>
      <p>
        <strong>Ability</strong>
      </p>
      <p>Description</p>
      <h3>Height</h3>
      <p>5</p>
      <h3>Weight</h3>
      <p>30kg</p>
      <button
        onClick={() =>
          (document.getElementById("pokemonDetail").style.display = "none")
        }
      >
        Close
      </button>
    </div>
  );
}

export default PokemonDetail;
