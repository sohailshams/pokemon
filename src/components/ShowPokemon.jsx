import React, { useEffect } from 'react'
import { useState } from 'react'
import Pokemon from './Pokemon';
import getPokemon from '../api/api';
import SearchPokemon from './SearchPokemon';


export default function ShowPokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredPokemon, setFilteredPokemon] = useState(pokemon)

    useEffect(() =>{
        getPokemon(`https://pokeapi.co/api/v2/pokemon`).then((response) => {
        return response.json();
        }).then((data) => {
                setPokemon(data.results)
        })
    }, [])
    
useEffect(() => {
    setFilteredPokemon(pokemon.filter((pokemon) => {
        return pokemon.name.includes(search);
    }))   
}, [pokemon, search])
  return (
    <div>
        <SearchPokemon search={search} setSearch={setSearch} />
        <ul className = "pokemonContainer">
            {filteredPokemon.map((pokemon) =>{
                const { name, url } = pokemon
                return <li key={name}>
                    <Pokemon name={name} url={url} />
                </li>
            })}

        </ul>
    </div>
  )
}
