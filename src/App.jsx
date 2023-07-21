import {useRoutes } from 'react-router-dom';

import Login from "./pages/Login_&_Register/Login";
import Register from './pages/Login_&_Register/Register'
import Home from "./pages/Home/Home";
import Orders from './pages/OrderHistory/OrderHistory';
import CreateBurguer from './pages/CreateBurguer/CreateBurguer';
import Cart from "./pages/Cart/Cart"
import ConfirmOrder from './pages/ConfirmOrder/ConfirmOrder';

import {CartContext} from '../src/context/CartContext';
import { useState } from 'react';


function App() {

  const [data, setData] = useState([])  
  const [cartValue, setCartValue] = useState(0)
  const [orderValue, setOrderValue] = useState(0)
  const [isLogged, setIsLogged] = useState(false)

  const routes = useRoutes ([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/home/createburguer',
      element: <CreateBurguer />
    },
    {
      path: '/home/createburguer/pedido',
      element: <Orders />
    },
    {
      path: '/home/createburguer/carrinho',
      element: <Cart />
    },
    {
      path: '/home/createburguer/carrinho/confirmOrder',
      element: <ConfirmOrder />
    },

  ])

  return (
      <CartContext.Provider value={{data, setData, cartValue, setCartValue, orderValue, setOrderValue, isLogged, setIsLogged}} className="App">
        {routes}
      </CartContext.Provider>
  )
}

export default App
