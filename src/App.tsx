
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import Wiki from './components/wiki';
import MainPage from './components/mainPage';
import SearchForm from './components/searchForm';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: '/wiki',
          element: <Wiki />,
        },
        {
          path: '/wiki/characters',
          element: <SearchForm type='characters'/>,
        },
        {
          path: '/wiki/spells',
          element: <SearchForm type='spells'/>,
        },
        {
          path: '/wiki/potions',
          element: <SearchForm type='potions'/>,
        }
      ]
    }
  ])

  return (
      <RouterProvider router={router} />
  )

};

export default App;
