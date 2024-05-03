import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // for expect(...).toBeInTheDocument()
import MarsPage from '../pages/MarsPage';

describe('MarsPage Component', () => {
  it('renders MarsPage without crashing', () => {
    render(<MarsPage />);
  });

  it('displays the header text about the latest images from Mars Curiosity Rover', async () => {
    render(<MarsPage />);
    await waitFor(() => {
      expect(
        screen.getByText(
          /A Journey Through the Red Dust: Latest Images from Mars Curiosity Rover/i
        )
      ).toBeInTheDocument();
    });
  });
});
