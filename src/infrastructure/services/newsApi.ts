import axios from 'axios';
import type {NewsResponse } from '@domain/entities/News';
import { apiEndpoint } from '@shared/constant/newsApiConfig';

export const getNewsHeadlines = async (): Promise<NewsResponse> => {
   try {
    const response = await axios.get(apiEndpoint('top-headlines', '&pageSize=10&page=1'));
    return response.data as NewsResponse;
  } catch (error) {
    console.error('Error fetching everything news:', error);
    throw error;
  }
};

export const getEverythingNews = async (size = 20, page = 1): Promise<NewsResponse> => {
  try {
    const response = await axios.get(apiEndpoint('everything',`&pageSize=${size}&page=${page}`));
    return response.data as NewsResponse;
  } catch (error) {
    console.error('Error fetching everything news:', error);
    throw error;
  }
};
