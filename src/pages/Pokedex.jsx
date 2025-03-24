import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Pokedex.css'

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([])
  const [allPokemon, setAllPokemon] = useState([]) // Keep track of all Pokémon
  const [offset, setOffset] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const limit = 12

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`) // Fetch all Pokémon (adjust limit for large requests)
      const data = await res.json()

      // Collect all Pokémon data
      const detailedPromises = data.results.map(pokemon =>
        fetch(pokemon.url).then(res => res.json())
      )

      const detailedData = await Promise.all(detailedPromises)
      setAllPokemon(detailedData) // Store full list of Pokémon
      setPokemonList(detailedData.slice(offset, offset + limit)) // Display current page
    }

    fetchData()
  }, [offset])

  const nextPage = () => setOffset(offset + limit)
  const prevPage = () => setOffset(Math.max(offset - limit, 0))

  // Filter based on search term
  const filteredPokemonList = allPokemon.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getTypeColor = (type) => {
    switch (type) {
      case 'fire': return 'fire'
      case 'water': return 'water'
      case 'grass': return 'grass'
      case 'electric': return 'electric'
      case 'bug': return 'bug'
      case 'normal': return 'normal'
      case 'poison': return 'poison'
      case 'ground': return 'ground'
      case 'fairy': return 'fairy'
      case 'fighting': return 'fighting'
      case 'psychic': return 'psychic'
      case 'rock': return 'rock'
      case 'ghost': return 'ghost'
      case 'dragon': return 'dragon'
      case 'ice': return 'ice'
      case 'steel': return 'steel'
      case 'flying': return 'flying'
      case 'dark': return 'dark'
      default: return 'default'
    }
  }

  return (
    <div className="pokedex-page">
      <h1>Pokedex</h1>

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
