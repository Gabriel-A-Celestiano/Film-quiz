import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/Card/Card';
import Inicio from './pages/Inicio/Inicio';
import Quiz from './pages/Quiz/Quiz';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Card>
        <Inicio />
      </Card>
    </>
  },
  {
    path: "/quiz",
    element: <>
        <Card>
          <Quiz />
        </Card>
    </>
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

