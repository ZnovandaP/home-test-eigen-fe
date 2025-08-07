const newsApiConfig = {
  baseUrl: import.meta.env.VITE_NEWS_API_URL,
  version: import.meta.env.VITE_NEWS_API_VERSION,
  apiKey: import.meta.env.VITE_NEWS_API_KEY,
};

export const apiEndpoint = (endpoint: string, query: string) => {
  return `${newsApiConfig.baseUrl}/${newsApiConfig.version}/${endpoint}/?q=ai&${query}&apiKey=${newsApiConfig.apiKey}`;
};

export default newsApiConfig;