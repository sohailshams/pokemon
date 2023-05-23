import React, { useEffect, useState } from "react";
import getPokemon from "../api/api";

function PokemonDetail({ pokemonName, baseUrl, pokemonImage }) {
  console.log("detail comp", pokemonName);
  const [nameOfPokemon, setNameOfPokemon] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  // console.log("outside useEffect", nameOfPokemon);
  useEffect(() => {
    console.log("inside useEffect", pokemonName);
    //   getPokemon(baseUrl)
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       setPokemonImage(data.sprites.front_default);
    //     });
    setNameOfPokemon(pokemonName);
  }, [pokemonName]);
  if (isClicked) {
    return (
      <div id="pokemonDetail">
        <h1>title: {nameOfPokemon}</h1>
        {/* <img src={pokemonImage} alt="No image" />
      <h3>Abilities</h3>
      <p>
        <strong>Ability</strong>
      </p>
      <p>Description</p>
      <h3>Height</h3>
      <p>5</p>
      <h3>Weight</h3>
      <p>30kg</p> */}
        {/* <button
        onClick={() => {
          document.getElementById("pokemonDetail").style.display = "none";
          // setNameOfPokemon("");
        }}
      >
        Close
      </button> */}
      </div>
    );
  }
}

export default PokemonDetail;
