import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello message', () => {
  render(<App />);
  const text = screen.getByText(/Hello World!/);
  expect(text).toBeInTheDocument();
});
