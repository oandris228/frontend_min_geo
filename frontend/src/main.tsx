import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Listazas from './components/Listazas.tsx'
import Modify from './components/modify.tsx'

const router = createBrowserRouter([
  {
    path: "/listazas",
    element: <Listazas />
  },
  {
    path: "/edit/:id",
    element: <Modify />
  },

])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
