import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './components/Layout'
import { NuevoCliente, action as nuevoClienteAction } from './pages/NuevoCliente'
import { Index, loader as clienteLoader } from './pages/Index'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'
import { EditarCliente, loader as clienteEditarLoader, action as clienteEditarAction} from './pages/EditarCliente'
import { action as clienteElminarAction } from './components/ListadoClientes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [

      {
        index: true,
        element: <Index/>,
        loader: clienteLoader,
        errorElement: <ErrorPage/>
        
      },
      
      {
      path: '/clientes/nuevo',
      element: <NuevoCliente/>,
      action: nuevoClienteAction
      },

      {
        path: '/clientes/editar/:id',
        element: <EditarCliente/>,
        loader: clienteEditarLoader,
        action: clienteEditarAction,
        errorElement: <ErrorPage/>

      },

      {
        path: '/clientes/:id/eliminar',
        action: clienteElminarAction
      }
    ]    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
)
