import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { Shop } from './pages/shop';
import { About } from './pages/about';
import { Suspense } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <Suspense fallback={'Loading...'}><About /> </Suspense>,
      },
      {
        path: '/shop',
        element: <Suspense fallback={'Loading...'}> <Shop /> </Suspense>,
      },
    ],
  },
]);
root.render(
  <RouterProvider router={router} />,
);