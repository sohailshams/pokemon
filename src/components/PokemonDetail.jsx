import React, { useEffect, useState } from "react";
import getPokemon from "../api/api";
import { useParams } from "react-router-dom";

function PokemonDetail({  }) {
  // console.log("detail comp", pokemonName);
  // const [nameOfPokemon, setNameOfPokemon] = useState("");
  const [pokemonDetail, setPokemonDetail] = useState('');
  const { name } = useParams();
  const baseUrl = `https://pokeapi.co/api/v2/pokemon`;


  console.log('name params', name);
  // console.log("outside useEffect", nameOfPokemon);
  useEffect(() => {
    console.log('name', name);
    // console.log("inside useEffect", pokemonName);
      getPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`) 
        .then((response) => {
          // console.log(response);
          return response.json(); 
        })
        .then((data) => {
          // console.log(data);
          // setPokemonImage(data.sprites.front_default);
        });
    // setNameOfPokemon(pokemonName);
  }, []);

    return (
      <div id="pokemonDetail">
        <h1>title: {name}</h1>
        <img src="" alt="No image" />
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
        onClick={() => {
          document.getElementById("pokemonDetail").style.display = "none";
          // setNameOfPokemon("");
        }}
      >
        Close
      </button>
      </div>
    );
  
}

export default PokemonDetail;
