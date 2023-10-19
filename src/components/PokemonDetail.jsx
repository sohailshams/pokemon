import React, { useEffect, useState } from "react";
import getPokemon from "../api/api";
import { Link, useParams } from "react-router-dom";
import { PokemonChart } from "./PokemonChart";

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
        <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        <img src={pokemonDetail?.sprites?.front_default} alt="No image" />
        <h1>Abilities</h1>
        <ul>
          {pokemonDetail?.abilities?.map((ability) => (
            <li key={ability.ability.name}>
              {ability.ability.name.charAt(0).toUpperCase() +
                ability.ability.name.slice(1)}
            </li>
          ))}
        </ul>
        <Link to="/">
          <button className="closeButton">Close </button>
        </Link>
      </div>
      <div className="pokemonDetail">
        <PokemonChart
          baseExperience={pokemonDetail?.base_experience}
          weight={pokemonDetail?.weight}
          height={pokemonDetail?.height}
        />
      </div>
    </div>
  );
}

export default PokemonDetail;
