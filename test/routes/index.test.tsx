import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom'; // Add this import
import { App } from '../../src/routes/index';

describe('App Component', () => {
  it('renders the logo', () => {
    render(<App />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the edit text', () => {
    render(<App />);
    const description = screen.getByText((_content, element) => {
      return element?.className === 'description';
    });
    expect(description).toBeInTheDocument();
    expect(description).toMatchInlineSnapshot(`
      <p
        class="description"
      >
        Edit 
        <code>
          src/routes/index.tsx
        </code>
         and save to reload.
      </p>
    `);
  });

  it('renders the Learn TanStack link', () => {
    render(<App />);
    const tanstackLink = screen.getByText(/Learn TanStack/i);
    expect(tanstackLink).toBeInTheDocument();
    expect(tanstackLink).toHaveAttribute('href', 'https://tanstack.com');
  });
});
