import './App.css';
import Home from "./pages/Home";
import {useRoutes } from 'react-router-dom';
import Login from "./pages/Login";

function App() {

  const routes = useRoutes ([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/home',
      element: <Home />
    }
  ])

  return (
      <div className="App">
        {routes}
      </div>
  )
}

export default App
