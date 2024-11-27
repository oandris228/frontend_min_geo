import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Listazas from './components/Listazas.tsx'
import Kereses from './components/Kereses.tsx'
import NovCsokk from './components/NovCsokk.tsx'
import Modify from './components/modify.tsx'
import { Felvetel } from './components/Felvetel.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>
  },
  {
    path: "/listazas",
    element: <Listazas />
  },
  {
    path: "/kereses",
    element: <Kereses />
  },
  {
    path: "/novcsokk",
    element: <NovCsokk />
  },
  {
    path: "/edit/:id",
    element: <Modify />
  },
  {
    path: "/felvetel",
    element: <Felvetel />
  },
  {
    path: "/rendezes",
    element: <Modify />
  },
  {
    path: "/paginacio",
    element: <Modify />
  },

])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
