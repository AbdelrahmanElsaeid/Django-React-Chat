import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { ThemeProvider } from '@emotion/react'
import createMuiTheme from './theme/theme'



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />} />
      </Route>
    )
  )

  const theme = createMuiTheme()


  return (
    <ThemeProvider  theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>
      
    
  )
}

export default App
