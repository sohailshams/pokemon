import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ShowPokemon from "./components/ShowPokemon";
import SearchPokemon from "./components/SearchPokemon";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShowPokemon />} />
      <Route path="/detail" element={<PokemonDetail />} />
    </Routes>
  );
}

export default App;
