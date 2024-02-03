import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import Home from './pages/home';
import Navbar from './components/Navbar'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Home />}>
      <Route path='/' element={<Navbar />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)