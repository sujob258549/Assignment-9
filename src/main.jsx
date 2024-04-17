import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import Authproviders from './assets/component/firebase/Authproviders.jsx'
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
     <HelmetProvider>
       <RouterProvider router={router}></RouterProvider>
     </HelmetProvider>
    </Authproviders>
  </React.StrictMode>,
)
