import React, { useEffect, useState } from "react";
import getPokemon from "../api/api";
import { Link, useParams } from "react-router-dom";

function PokemonDetail({}) {
  const [pokemonDetail, setPokemonDetail] = useState("");
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      getPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPokemonDetail(data);
        });
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
