import { useState } from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './components/pages/AboutMePage'
import Portfolio from './components/pages/PortfolioPage'
import Links from './components/mini-components/Links'

import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<AboutMe />} />
      <Route path='portfolio' element={<Portfolio />} />
    </Route>
  )
  
//     [
//     {
//         path: '/',
//         element: <App />,
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 index: true,
//                 element: <AboutMe />
//             },
//             {
//                 path: 'contact',
//                 element: <Contact />
//             }
//         ]
//     }
// ]
)

function App() {

  return (
    <>
      <Header /> 
      <RouterProvider router={router}/>
      <Links />
      <Footer />
    </>
    
  );
}

export default App
