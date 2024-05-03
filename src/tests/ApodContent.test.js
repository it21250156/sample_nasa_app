import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // for expect(...).toBeInTheDocument()
import ApodContent from '../components/ApodContent'; // Path to your ApodContent component

describe('ApodContent Component', () => {
  const mockData = {
    title: 'Astronomy Picture of the Day',
    date: '2024-05-01',
    media_type: 'image',
    hdurl: 'https://example.com/image.jpg',
    explanation: 'This is a test explanation.',
  };

  it('renders with provided data (image)', async () => {
    render(<ApodContent data={mockData} />);

    // Wait for the image to be rendered
    await waitFor(() => {
      expect(
        screen.getByAltText(/Astronomy Picture of the Day/i)
      ).toBeInTheDocument();
    });

    // Wait for the date to be rendered
    await waitFor(() => {
      expect(screen.getByText(/2024-05-01/i)).toBeInTheDocument();
    });

    // Wait for the explanation to be rendered
    await waitFor(() => {
      expect(
        screen.getByText(/This is a test explanation/i)
      ).toBeInTheDocument();
    });

    // Finally, check the image source after all elements have been rendered
    expect(
      screen.getByAltText(/Astronomy Picture of the Day/i)
    ).toHaveAttribute('src', 'https://example.com/image.jpg');
  });
});
