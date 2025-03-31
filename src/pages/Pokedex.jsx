import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import pokemonLogo from '../assets/pokemon-logo.png'
import '../styles/Pokedex.css'

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([])
  const [allPokemon, setAllPokemon] = useState([])
  const [offset, setOffset] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const limit = 12

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
      const data = await res.json()
      const detailedPromises = data.results.map(pokemon =>
        fetch(pokemon.url).then(res => res.json())
      )
      const detailedData = await Promise.all(detailedPromises)
      setAllPokemon(detailedData)
      setPokemonList(detailedData.slice(offset, offset + limit))
    }

    fetchData()
  }, [offset])

  const nextPage = () => setOffset(offset + limit)
  const prevPage = () => setOffset(Math.max(offset - limit, 0))

  const filteredPokemonList = allPokemon.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getTypeColor = (type) => {
    const colors = {
      fire: 'fire', water: 'water', grass: 'grass', electric: 'electric',
      bug: 'bug', normal: 'normal', poison: 'poison', ground: 'ground',
      fairy: 'fairy', fighting: 'fighting', psychic: 'psychic', rock: 'rock',
      ghost: 'ghost', dragon: 'dragon', ice: 'ice', steel: 'steel',
      flying: 'flying', dark: 'dark'
    }
    return colors[type] || 'default'
  }

  return (
    <div className="pokedex-page">
      <div className="header">
        <img src={pokemonLogo} alt="Pokémon Logo" className="pokemon-logo" />
        <h1 className="main-title">Pokédex</h1>
      </div>

      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="pokemon-grid">
        {filteredPokemonList.slice(offset, offset + limit).map(pokemon => {
          const mainType = pokemon.types[0].type.name
          const cardClass = `pokemon-card ${getTypeColor(mainType)}`
          return (
            <Link to={`/pokemon/${pokemon.name}`} className={cardClass} key={pokemon.id}>
              <div className="pokemon-number">#{pokemon.id}</div>
              <div className="pokemon-name">{pokemon.name}</div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </Link>
          )
        })}
      </div>

      <div className="pagination-controls">
        <button onClick={prevPage} disabled={offset === 0}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  )
}

export default Pokedex
