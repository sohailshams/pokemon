import React, { useEffect } from 'react'
import getPokemon from '../api/api';
import { useState } from 'react';

export default function Pokemon({name, url}) {
    const [pokemonImage, setPokemonImage] = useState('');
    // console.log(url);
    useEffect(() => {

        getPokemon(url).then((response) => {
            return response.json();
            }).then((data) => {
                setPokemonImage(data.sprites.back_default)
            })
    },[])
  return (
    <section className = "pokemon">
        <h3>{name}</h3>
        <img src={pokemonImage}></img>
    </section>
  )
}
