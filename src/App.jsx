import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Pokedex from './pages/Pokedex'
import About from './pages/About'
import PokemonDetail from './pages/PokemonDetail'

function App() {
  return (
    <HashRouter>
      <nav style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
        <Link to="/">Pokedex</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </HashRouter>
  )
}

export default App
