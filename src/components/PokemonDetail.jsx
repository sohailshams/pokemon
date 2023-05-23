import React, { useEffect, useState } from "react";
import getPokemon from "../api/api";
import { Link, useParams } from "react-router-dom";

function PokemonDetail({}) {
  // console.log("detail comp", pokemonName);
  // const [nameOfPokemon, setNameOfPokemon] = useState("");
  const [pokemonDetail, setPokemonDetail] = useState("");
  const [pokemonImg, setPokemonImg] = useState("");
  const { name } = useParams();
  const baseUrl = `https://pokeapi.co/api/v2/pokemon`;

  console.log("pokemonDetail", pokemonDetail);
  // console.log("outside useEffect", nameOfPokemon);
  useEffect(() => {
    if (name) {
      console.log("name", name);
      // console.log("inside useEffect", pokemonName);
      getPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setPokemonDetail(data);
        });
      // setNameOfPokemon(pokemonName);
    }
  }, [name]);

  return (
    <div className="detailContainer">
      <div className="pokemonDetail">
        <h1>Name</h1>
        <p>{name}</p>
        <img src={pokemonDetail?.sprites?.front_default} alt="No image" />
        <h3>Abilities</h3>
        <ul>
          {pokemonDetail?.abilities?.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
        <h3>Height</h3>
        <p>{pokemonDetail?.height}</p>
        <h3>Weight</h3>
        <p>{pokemonDetail?.weight} kg</p>
        <Link to="/">
          <button className="closeButton">Close </button>
        </Link>
      </div>
      <div className="pokemonDetail">
        <p>chart</p>
      </div>
    </div>
  );
}

export default PokemonDetail;
