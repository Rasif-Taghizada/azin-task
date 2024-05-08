import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/router'
import { RouterProvider } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
