//main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import 
{
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import Book from './book';
import Bookshop from './bookshop';
import Publisher from './publisher';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Book />}></Route>
      <Route path='bookshop' element={<Bookshop />} />
 👉  <Route path='publisher/:itemId' element={<Publisher />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)