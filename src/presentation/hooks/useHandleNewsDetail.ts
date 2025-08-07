import type { News } from '@domain/entities/News';
import { useNavigate } from 'react-router';

export const useHandleNewsDetail = () => {
  const navigate = useNavigate();
    const handle = (news: News) => {
    sessionStorage.setItem('NEWS_DETAIL', JSON.stringify(news));
    navigate(`/detail/${news.title.replace(/ /g, '-').toLowerCase()}`);
  };
  return { handle };
};