import React from 'react'
import { useState } from 'react';

export default function SearchPokemon({search, setSearch}) {


  return (
    <form className='searchForm'>
        <label htmlFor="searchBar" name="searchBar">
            <input onChange={(event) => {setSearch(event.target.value.toLocaleLowerCase())}} id="searchBar" type="text" placeholder='Filter pokemon'></input>
        </label>

    </form>
    
  )
}
