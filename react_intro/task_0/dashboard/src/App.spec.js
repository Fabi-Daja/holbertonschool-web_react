import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component tests', () => {
    test('renders h1 element with text School dashboard', () => {
        render(<App />);
        const h1Element = screen.getByRole('heading', { level: 1, name: /school dashboard/i });
        expect(h1Element).toBeInTheDocument();
    });

    test('renders correct text in App-body and App-footer', () => {
        render(<App />);
        const bodyText = screen.getByText(/login to access the full dashboard/i);
        const footerText = screen.getByText(/copyright.*- holberton school/i);

        expect(bodyText).toBeInTheDocument();
        expect(footerText).toBeInTheDocument();
    });

    test('renders an img element with alt text holberton logo', () => {
        render(<App />);
        const imgElement = screen.getByAltText(/holberton logo/i);
        expect(imgElement).toBeInTheDocument();
        expect(imgElement.tagName).toBe('IMG');
    });
});
