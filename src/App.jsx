import {useRoutes } from 'react-router-dom';
import Login from "./pages/Login_&_Register/Login";
import Register from './pages/Login_&_Register/Register'
import Home from "./pages/Home/Home";
import Orders from './pages/Orders/Orders';
import CreateBurguer from './pages/CreateBurguer/CreateBurguer';
import Cart from "./pages/Cart/Cart"

function App() {

  const routes = useRoutes ([
    {
      path: '/',
      element: <Login />
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
      path: '/register',
      element: <Register />
    },
    {
      path: '/home/createburguer/carrinho',
      element: <Cart />
    }

  ])

  return (
      <div className="App">
        {routes}
      </div>
  )
}

export default App
