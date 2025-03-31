import { render, screen } from '@testing-library/react'
import About from '../src/pages/About'  

test('renders About title and feature list', () => {
  render(<About />)

  expect(screen.getByText(/Trainer Log/i)).toBeInTheDocument()
  expect(screen.getByText(/Welcome Trainer!/i)).toBeInTheDocument()
  expect(screen.getByText(/Catch 'em all/i)).toBeInTheDocument()
})
