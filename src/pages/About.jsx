function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
      <h1>About This Pokédex</h1>
      <p>
        This Pokédex is a simple React-based web app that lets you explore the world of Pokémon.
        Browse through the list of Pokémon using pagination, and click on any of them to see detailed information including types, abilities, stats, and more.
      </p>
      <p>
        All data is fetched live from the <a href="https://pokeapi.co" target="_blank" rel="noreferrer">PokéAPI</a>.
        This app is part of a web development assignment, built using Vite, React Router, and clean modular CSS.
      </p>
    </div>
  )
}

export default About
