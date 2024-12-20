import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Listazas from './components/Listazas.tsx'
import Kereses from './components/Kereses.tsx'
import NovCsokk from './components/NovCsokk.tsx'
import Modify from './components/modify.tsx'
import Toggle from './components/Toggle.tsx'
import Navi from './components/Navi.tsx'
import { Felvetel } from './components/Felvetel.tsx'
import Rendezes from './components/Rendezes.tsx'
import Pagination from './components/Pagination.tsx'

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
    path: "/toggle",
    element: <Toggle />
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
    element: <Rendezes />
  },
  {
    path: "/paginacio",
    element: <Pagination />
  },

])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navi/>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
