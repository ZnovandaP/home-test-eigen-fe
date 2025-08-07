import {render, screen} from '@testing-library/react';
import CardNews from './CardNews';
import { newsList } from '../../../../shared/constant/newsStaticData';
import { MemoryRouter } from 'react-router';

describe('Testing CardNews Component', () => {
  it('should render the CardNews component', () => {
    render(
      <MemoryRouter>
        <CardNews newsList={newsList} />
      </MemoryRouter>
    );

    const cardNewsElement = screen.getByText(newsList[0].title);
    expect(cardNewsElement).toBeInTheDocument();
  });

  it('should render all news items', () => {
    render(
      <MemoryRouter>
        <CardNews newsList={newsList} data-testid="news-card" />
      </MemoryRouter>
    );

    const newsItems = screen.getAllByTestId('news-card');
    expect(newsItems.length).toBe(newsList.length);
  });

  it('should render empty state', () => {
    render(
      <MemoryRouter>
        <CardNews newsList={[]} />
      </MemoryRouter>
    );

    const emptyStateElement = screen.getByText('No news available at the moment.');
    expect(emptyStateElement).toBeInTheDocument();
  });

});