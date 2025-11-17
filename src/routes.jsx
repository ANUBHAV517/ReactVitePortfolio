import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';
import Projects from './pages/Projects';
import { useRouteError } from 'react-router-dom';
// Custom error component
function RouteError() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error: {error.status || 'Random err'}</h1>
      <p>{error.statusText || error.message || 'Page not found'}</p>
    </div>
  );
}
const base = import.meta.env.VITE_BASE_URL || '/';
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <RouteError />, // Add errorElement here
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'projects', element: <Projects /> },
        {
          path: 'services',
          element: <Services />,
          children: [
            { path: 'backend', element: <Backend /> },
            { path: 'frontend', element: <Frontend /> },
          ],
        },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ],
  {
    basename: base, // <-- set your base path here
  }
);

export default router;
