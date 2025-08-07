import AppShell from '@presentation/components/layouts/AppShell/AppShell';
import DetailNewsPage from '@presentation/pages/detail-news';
import HomePage from '@presentation/pages/home';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  redirect,
} from 'react-router';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppShell />}>
      <Route index element={<HomePage />} />
      <Route
        path="detail/:title?"
        element={<DetailNewsPage />}
        loader={() => {
          const data = sessionStorage.getItem('NEWS_DETAIL');
          if (!data) {
            throw redirect('/');
          }
        }}
      />
    </Route>
  )
);
