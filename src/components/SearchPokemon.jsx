import React from 'react'
import { useState } from 'react';

export default function SearchPokemon({search, setSearch}) {


  return (
    <form>
        <label for="searchBar" name="searchBar">
            <input onChange={(event) => {setSearch(event.target.value)}} id="searchBar" type="text" placeholder='Filter pokemon'></input>
        </label>

    </form>
    
  )
}
