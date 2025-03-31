import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Pokedex from './pages/Pokedex'
import About from './pages/About'
import PokemonDetail from './pages/PokemonDetail'
import './styles/Pokedex.css'
import pikachu from '../public/pikachu.png'

function App() {
  return (
    <HashRouter>
      <div className="app-background full-height">
        <nav className="nav-bar">
          <Link to="/" className="poke-button">Pokédex</Link>
          <Link to="/about" className="poke-button">About</Link>
        </nav>

        <div className="app-content">
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/about" element={<About />} />
            <Route path="/pokemon/:name" element={<PokemonDetail />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}

export default App