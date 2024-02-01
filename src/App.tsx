
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import Wiki from './components/wiki';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      children: [
        {
          index: true,
          element: <div></div>,
        },
        {
          path: '/wiki',
          element: <Wiki />,
        }
      ]
    }
  ])

  return (
      <RouterProvider router={router} />
  )

};

export default App;
