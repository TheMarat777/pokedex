import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
      <div className="detail-card">
        <h1 className="pokemon-name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        <div className="info">
          <p><strong>Height:</strong> {pokemon.height / 10} m</p>
          <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
          <p><strong>Types:</strong> 
            {pokemon.types.map(t => (
              <span key={t.type.name} className={`type-badge ${t.type.name}`}>
                {t.type.name}
              </span>
            ))}
          </p>
          <p><strong>Abilities:</strong> 
            {pokemon.abilities.map(a => (
              <span key={a.ability.name} className="ability-badge">
                {a.ability.name}
              </span>
            ))}
          </p>
        </div>

        <div className="stats">
          <h3>Base Stats</h3>
          <ul>
            {pokemon.stats.map(stat => (
              <li key={stat.stat.name}>
                <span className="stat-name">{stat.stat.name}</span>
                <div className="stat-bar-container">
                  <div
                    className="stat-bar"
                    style={{ width: `${stat.base_stat / 2}%` }}
                  >
                    {stat.base_stat}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
