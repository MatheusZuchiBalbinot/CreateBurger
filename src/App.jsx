import './App.css';
import {useRoutes } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Orders from './pages/Orders';
import CreateBurguer from './pages/CreateBurguer';

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
    }

  ])

  return (
      <div className="App">
        {routes}
      </div>
  )
}

export default App
