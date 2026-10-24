import React from 'react'

export default function PokemonCard({ pokemon }) {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>Вес:{pokemon.weight}</p>
      <p>Рост:{pokemon.height}</p>
      <img src={pokemon.sprites.front_default} alt="" />
    </div>
  );
}
