import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router/Router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Components/AuthProvider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider routes={<RouterProvider router={Router} />}>

    </AuthProvider>
    
  </StrictMode>,
)
