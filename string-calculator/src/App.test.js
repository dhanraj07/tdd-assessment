import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('String Calculator UI', () => {
  test('renders the input field and button', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Enter numbers/i);
    const buttonElement = screen.getByText(/Calculate/i);
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('calculates and displays the sum of numbers', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Enter numbers/i);
    const buttonElement = screen.getByText(/Calculate/i);

    fireEvent.change(inputElement, { target: { value: "1,2,3" } });
    fireEvent.click(buttonElement);

    const resultElement = screen.getByText(/Result: 6/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('displays error message for negative numbers', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Enter numbers/i);
    const buttonElement = screen.getByText(/Calculate/i);

    fireEvent.change(inputElement, { target: { value: "1,-2,3" } });
    fireEvent.click(buttonElement);

    const errorElement = screen.getByText(/Negative input not allowed: -2/i);
    expect(errorElement).toBeInTheDocument();
  });

  test('displays result with custom delimiter', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Enter numbers/i);
    const buttonElement = screen.getByText(/Calculate/i);

    fireEvent.change(inputElement, { target: { value: "//;\n1;2;3" } });
    fireEvent.click(buttonElement);

    const resultElement = screen.getByText(/Result: 6/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('handles newlines in input correctly', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Enter numbers/i);
    const buttonElement = screen.getByText(/Calculate/i);

    fireEvent.change(inputElement, { target: { value: "1\\n2,3" } });
    fireEvent.click(buttonElement);

    const resultElement = screen.getByText(/Result: 6/i);
    expect(resultElement).toBeInTheDocument();
  });
});
