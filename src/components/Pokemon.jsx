import React, { useEffect } from "react";
import getPokemon from "../api/api";
import { useState } from "react";
import PokemonDetail from "./PokemonDetail";

function Pokemon({ name, url, baseUrl }) {
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    getPokemon(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonImage(data.sprites.front_default);
      });
  }, []);

  const pokemonDetailHandler = () => {
    setPokemonName("");
    const overlay = document.getElementById("pokemonDetail");
    overlay.style.display = "block";
    setPokemonName(name);
  };
  return (
    <div>
      <PokemonDetail
        pokemonName={pokemonName}
        baseUrl={baseUrl}
        pokemonImage={pokemonImage}
      />
      <div onClick={pokemonDetailHandler} className="pokemon">
        <h3 className="pokemonName">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h3>
        <img className="pokemonImage" src={pokemonImage}></img>
      </div>
    </div>
  );
}

export default Pokemon;
