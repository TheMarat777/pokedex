import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Pokedex from '../src/pages/Pokedex'
import { vi } from 'vitest'

beforeEach(() => {
  global.fetch = vi.fn()
    .mockResolvedValueOnce({
      json: async () => ({
        results: [
          { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/pikachu' },
        ],
      }),
    })
    .mockResolvedValueOnce({
      json: async () => ({
        id: 25,
        name: 'pikachu',
        types: [{ type: { name: 'electric' } }],
        sprites: { front_default: 'pikachu.png' },
      }),
    })
})

test('renders Pokedex title and search input', () => {
  render(<BrowserRouter><Pokedex /></BrowserRouter>)
  expect(screen.getByPlaceholderText(/Search Pokémon/i)).toBeInTheDocument()
  expect(screen.getByText(/Poké/i)).toBeInTheDocument()
})

test('displays loading Pokémon cards after fetch', async () => {
  render(<BrowserRouter><Pokedex /></BrowserRouter>)

  await waitFor(() => {
    const cards = screen.getAllByRole('link')
    expect(cards.length).toBeGreaterThan(0)
  })
})
