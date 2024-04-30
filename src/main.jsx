import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router';
import AuthProvider from './AuthProvider/AuthProvider';
// import AuthProvider from './AuthProvider/AuthProvider';
import {HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="md:w-11/12 mx-auto">
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </div>
  </React.StrictMode>,
)
