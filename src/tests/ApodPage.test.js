// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';

// import ApodPage from '../pages/ApodPage';

// describe('ApodPage Component', () => {
//   it('renders without crashing', () => {
//     render(<ApodPage />);
//   });

//   it('displays the "Today\'s APOD" section if today\'s data is available', async () => {
//     const todayData = {
//       title: "Today's APOD Title",
//       explanation: "Today's APOD Explanation",
//       url: 'https://example.com/apod',
//       date: '2024-05-01',
//     };
//     render(<ApodPage todayData={todayData} />);
//     expect(screen.getByTestId('todayApod')).toBeInTheDocument();
//     expect(screen.getByTestId('todayApod-title')).toHaveTextContent(
//       todayData.title
//     );
//     expect(screen.getByTestId('todayApod-explanation')).toHaveTextContent(
//       todayData.explanation
//     );
//     expect(screen.getByTestId('todayApod-link')).toHaveAttribute(
//       'href',
//       todayData.url
//     );
//   });

//   it('displays the "Past APODs" section if past APODs data is available', async () => {
//     const pastApods = [
//       {
//         title: 'Past APOD 1 Title',
//         explanation: 'Past APOD 1 Explanation',
//         url: 'https://example.com/past-apod-1',
//         date: '2024-04-30',
//       },
//       {
//         title: 'Past APOD 2 Title',
//         explanation: 'Past APOD 2 Explanation',
//         url: 'https://example.com/past-apod-2',
//         date: '2024-04-29',
//       },
//     ];
//     render(<ApodPage pastApods={pastApods} />);
//     expect(await screen.findByTestId('pastApods')).toBeInTheDocument();
//     const pastApodTitles = screen.getAllByTestId('pastApod-title');
//     expect(pastApodTitles).toHaveLength(pastApods.length);
//     pastApodTitles.forEach((title, index) => {
//       expect(title).toHaveTextContent(pastApods[index].title);
//     });
//   });
// });
