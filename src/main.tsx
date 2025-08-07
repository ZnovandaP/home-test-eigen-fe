import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@presentation/styles/index.css';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router';
import { router } from '@presentation/routes/routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{ token: { colorPrimary: 'oklch(54.1% 0.281 293.009)' } }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
);
