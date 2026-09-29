import foto from '../assets/foto.jpg';

export default function Inicio() {
return (
  <div className="card perfil">
    <img src={foto} alt="Foto 2x2" className="foto" />
    <p><strong>Nombre:</strong> Esmeralda Soto</p>
    <p><strong>Matricula:</strong> 2024-1861</p>
    <p><strong>Correo:</strong> 20241861@itla.edu.do</p>
  </div>
);
}