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
import Login from './Components/Login.jsx'
import Orderpage from './Components/OrderPage.Jsx'
import Orderhistory from './Components/OrderHistory.jsx'
import Womenspage from './Components/Womens.jsx'
import Fashionpage from './Components/Fashionpage.jsx'
import Genzpage from './Components/Genz.jsx'
import Kidspage from './Components/Kids.jsx'
import Homepage from './Components/Home.jsx'
import Studiopage from './Components/Studio.jsx'

const router = createBrowserRouter([
  { path: "/" ,element:<Login/>},
  { path: "/home", element: <App /> },
  { path: "/mens", element: <Menspage /> },
  { path: "/womens", element:<Womenspage />},
  { path: "/beauty" , element:<Fashionpage />},
  { path: "/genz", element:<Genzpage />},
  { path: "/kids",element:<Kidspage />},
  { path: "/homeappliance",element:<Homepage />},
  { path:"/studio",element:<Studiopage />},
  { path: "/profile", element: <Profilepage /> },
  { path: "/wishlist", element: <Wishlist/> },
  { path: "/cartpage", element: <Cartpage /> },
  { path: "/orderpage", element:<Orderpage />},
  { path: "/orderhistory",element:<Orderhistory />},
  { path: "/*", element: <Errorpage /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router}/>
    </Provider>

  </StrictMode>,
)
