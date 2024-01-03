import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.js'


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    }
  ]);