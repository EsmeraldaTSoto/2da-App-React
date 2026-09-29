import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Sumadora from './pages/Sumadora';
import NumeroALetras from './pages/NumeroALetras';
import Tabla from './pages/Tabla';
import Experiencia from './pages/Experiencia';
import './App.css';

export default function App() {
  const [abierto, setAbierto] = useState(true);

  return (
    <BrowserRouter>
      <div className="layout">
        <aside className={`sidebar ${abierto ? 'abierto' : ''}`}>
          <h3>Menú</h3>
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/sumadora">Sumadora</NavLink>
          <NavLink to="/letras">Número a Letras</NavLink>
          <NavLink to="/tabla">Tabla de Multiplicar</NavLink>
          <NavLink to="/experiencia">Experiencia Personal</NavLink>
        </aside>

        <main className="contenido">
          <button className="toggle" onClick={() => setAbierto(!abierto)}>
            ☰
          </button>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sumadora" element={<Sumadora />} />
            <Route path="/letras" element={<NumeroALetras />} />
            <Route path="/tabla" element={<Tabla />} />
            <Route path="/experiencia" element={<Experiencia />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}