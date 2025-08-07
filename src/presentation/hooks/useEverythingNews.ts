import { fetchAllNews } from '@application/usecases/fetchNews';
import type { News } from '@domain/entities/News';
import * as React from 'react';


export const useEverythingNews = ( page: number) => {
  const [news, setNews] = React.useState<News[]>([]);
  const [totalResults, setTotalResults] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetchAllNews(20, page); 
        setNews(response.articles);
        setTotalResults(response.totalResults);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page]);

  return { news, loading, error, totalResults };
};