import '../styles/About.css'

function About() {
  return (
    <div className="about-page insane">
      <div className="trainer-card">
        <div className="card-header">
          <h1 className="pixel-title">Trainer Log</h1>
        </div>

        <div className="card-body">
          <p>
            <span className="poke-highlight">Welcome Trainer!</span> This Pokédex is your digital gateway to the amazing world of Pokémon.
          </p>

          <ul className="features">
            <li>🔎 Search Pokémon by name</li>
            <li>📊 View stats, types, and abilities</li>
            <li>⚡ Built with <strong>React + Vite</strong></li>
            <li>🌐 Powered by the incredible <a href="https://pokeapi.co" target="_blank" rel="noreferrer">PokéAPI</a></li>
          </ul>

          <p className="closing-text">
            Whether you're a rookie or a Champion... <br />
            <strong>Catch 'em all — the journey begins here!</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
