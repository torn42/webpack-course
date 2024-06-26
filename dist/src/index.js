import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { Shop } from './pages/shop';
import { About } from './pages/about';
import { Suspense } from 'react';
var root = ReactDOM.createRoot(document.getElementById('root'));
var router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(App, {}),
        children: [
            {
                path: '/about',
                element: _jsxs(Suspense, { fallback: 'Loading...', children: [_jsx(About, {}), " "] }),
            },
            {
                path: '/shop',
                element: _jsxs(Suspense, { fallback: 'Loading...', children: [" ", _jsx(Shop, {}), " "] }),
            },
        ],
    },
]);
root.render(_jsx(RouterProvider, { router: router }));
