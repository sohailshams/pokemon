import React, { useEffect } from 'react'
import { useState } from 'react'
import Pokemon from './Pokemon';
import getPokemon from '../api/api';
import SearchPokemon from './SearchPokemon';


export default function ShowPokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() =>{
        getPokemon(`https://pokeapi.co/api/v2/pokemon`).then((response) => {
        return response.json();
        }).then((data) => {
            if(search !== ''){
          
              setPokemon(data.results.filter((pokemon) => {
                return pokemon.name.includes(search);
            }))   
            } else {

                setPokemon(data.results)
            }
        })
    }, [search])

  return (
    <div>
        <SearchPokemon search={search} setSearch={setSearch} />
        <ul className = "pokemonContainer">
            {pokemon.map((pokemon) =>{
                const { name, url } = pokemon
                return <li key={name}>
                    <Pokemon name={name} url={url} />
                </li>
            })}

        </ul>
    </div>
  )
}
