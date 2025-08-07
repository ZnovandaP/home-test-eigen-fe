import * as React from 'react';
import { fetchHeadlineNews } from '@application/usecases/fetchNews';
import type { News } from '@domain/entities/News';


export const useHeadlineNews = () => {
  const [news, setNews] = React.useState<News[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetchHeadlineNews(); 
        setNews(response.articles);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};