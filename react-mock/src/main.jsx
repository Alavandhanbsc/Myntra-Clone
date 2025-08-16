import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menspage from './Components/Mens.jsx'
import Errorpage from './Components/Error.jsx'
import Wishlist from './Components/Wishlist.jsx'
import Cartpage from './Components/Cartpage.jsx'
import Profilepage from './Components/Profile.jsx'

//import provider whick make a connection between react and redux
import {Provider} from 'react-redux'
import Store from './Redux/Store.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/mens", element: <Menspage /> },
  { path: "/profile", element: <Profilepage /> },
  { path: "/wishlist", element: <Wishlist/> },
  { path: "/cartpage", element: <Cartpage /> },
  { path: "/*", element: <Errorpage /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router}/>
    </Provider>

  </StrictMode>,
)
