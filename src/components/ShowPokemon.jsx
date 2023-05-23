import React, { useEffect } from "react";
import { useState } from "react";
import Pokemon from "./Pokemon";
import getPokemon from "../api/api";
import SearchPokemon from "./SearchPokemon";
import { Link } from "react-router-dom";

export default function ShowPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState(pokemon);
  const baseUrl = `https://pokeapi.co/api/v2/pokemon`;
  useEffect(() => {
    getPokemon(baseUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data.results);
      });
  }, []);

  useEffect(() => {
    setFilteredPokemon(
      pokemon.filter((pokemon) => {
        return pokemon.name.includes(search);
      })
    );
  }, [pokemon, search]);

  return (
    <div>
      {/* <PokemonDetail /> */}
      <SearchPokemon search={search} setSearch={setSearch} />
      <ul className="pokemonContainer">
        {filteredPokemon.map((pokemon) => {
          const { name, url } = pokemon;
          return (
            <li key={name}>
              <Link to={`/detail/${name}`}>
                <Pokemon name={name} url={url}/>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
