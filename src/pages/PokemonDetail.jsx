import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../styles/PokemonDetail.css'

function PokemonDetail() {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [name])

  if (!pokemon) return <p>Loading...</p>

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">&larr; Back to Pokedex</Link>

      <div className="detail-card">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        <div className="info">
          <p><strong>Height:</strong> {pokemon.height}</p>
          <p><strong>Weight:</strong> {pokemon.weight}</p>
          <p><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
          <p><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        </div>

        <div className="stats">
          <h3>Base Stats</h3>
          <ul>
            {pokemon.stats.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
