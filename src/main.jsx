import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, HashRouter, RouterProvider } from 'react-router-dom';
import router from './routes.jsx';
import { store } from './store.js';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  // <BrowserRouter basename="/ReactVitePortfolio">
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </BrowserRouter>
);
