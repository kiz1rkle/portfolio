import { useState } from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

//Importing All Components for Home Page
import Header from './components/Header'
import Footer from './components/Footer'
import Links from './components/mini-components/Links'


//Importing All Pages
import AboutMe from './components/pages/AboutMePage'
import Portfolio from './components/pages/PortfolioPage'
import Contact from './components/pages/ContactPage'
import Resume from './components/pages/ResumePage'


import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<AboutMe />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/resume' element={<Resume />} />
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
      {/* <RouterProvider router={router}/> */}
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
      <Links />
      <Footer />
    </>
    
  );
}

export default App
