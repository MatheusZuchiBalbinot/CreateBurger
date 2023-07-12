import {useRoutes } from 'react-router-dom';

import Login from "./pages/Login_&_Register/Login";
import Register from './pages/Login_&_Register/Register'
import Home from "./pages/Home/Home";
import Orders from './pages/OrderHistory/OrderHistory';
import CreateBurguer from './pages/CreateBurguer/CreateBurguer';
import Cart from "./pages/Cart/Cart"
import ConfirmOrder from './pages/ConfirmOrder/ConfirmOrder';


function App() {

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
      <div className="App">
        {routes}
      </div>
  )
}

export default App
