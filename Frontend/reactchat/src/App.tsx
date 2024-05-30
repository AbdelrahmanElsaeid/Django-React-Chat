
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'

import { ThemeProvider } from '@emotion/react'
import createMuiTheme from './theme/theme'
import ToggleColorMode from './components/ToggleColorMode'

//function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/explore/:categoryName' element={<Explore />} />
      </Route>
    )
  );

//   const theme = createMuiTheme()


//   return (
//     <ThemeProvider  theme={theme}>
//         <RouterProvider router={router} />
//     </ThemeProvider>
      
    
//   )
// }

const App = () => {
  return (
    <ToggleColorMode>
      <RouterProvider router={router} />
    </ToggleColorMode>
  );
};

export default App
