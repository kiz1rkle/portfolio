import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

//importing all pages
import AboutMePage from './components/pages/AboutMePage.jsx'
// import Contact from './components/pages/ContactPage.jsx'



//Rendering the application
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <App />
</React.StrictMode>)
