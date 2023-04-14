import React from 'react';
import Dashboard from './Dashboard';
import './Dashboard.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Clientes from './Components/Clientes/Clientes';
import ClientesLista from './Components/Clientes/clientesLista';
import PanelClientes from './Components/Clientes/panelClientes';
import Productos from './Components/Productos/Productos';

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/clientes" element={<Clientes/>} />
        <Route path="/clientesLista" element={<ClientesLista/>} />
        <Route path="/productos" element={<Productos/>} />
        <Route path="/panelClientes" element={<PanelClientes/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
