import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon logo', () => {
  render(<App />);
  const logoElements = screen.getAllByAltText(/little lemon/i);
  expect(logoElements.length).toBeGreaterThan(0);
});
