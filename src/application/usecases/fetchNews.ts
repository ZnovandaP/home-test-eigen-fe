import type { NewsResponse } from '@domain/entities/News';
import { getEverythingNews, getNewsHeadlines } from '@infrastructure/services/newsApi';

export const fetchAllNews = async (pageSize: number, page: number): Promise<Omit<NewsResponse, 'status'>> => {
  try {
    const response = await getEverythingNews(pageSize, page);
    return {
      totalResults: response.totalResults,
      articles: response.articles
    } as Omit<NewsResponse, 'status'>;
  } catch (error) {
    console.error('Error fetching all news:', error);
    throw error;
  }
};

export const fetchHeadlineNews = async (): Promise<Omit<NewsResponse, 'status' | 'totalResults'>> => {
  try {
    const response = await getNewsHeadlines();
    return {
      articles: response.articles
    } as Omit<NewsResponse, 'status' | 'totalResults'>;
  } catch (error) {
    console.error('Error fetching headline news:', error);
    throw error;
  }
};
