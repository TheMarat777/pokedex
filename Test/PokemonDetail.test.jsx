import { render, screen } from '@testing-library/react'
import PokemonDetail from '../src/pages/PokemonDetail'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

test('renders loading message', () => {
  render(
    <MemoryRouter initialEntries={['/pokemon/pikachu']}>
      <Routes>
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </MemoryRouter>
  )

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
})
