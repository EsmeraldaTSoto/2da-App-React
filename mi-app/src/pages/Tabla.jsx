import { useState } from 'react';

export default function Tabla() {
  const [n, setN] = useState('');
  const num = Number(n);

return (
  <div className="card">
    <h2>Tabla de Multiplicar</h2>
    <input type="number" placeholder="Número" value={n} onChange={e => setN(e.target.value)} />
    {n !== '' && (
      <ul className="lista">
        {Array.from({ length: 13 }, (_, i) => (
          <li key={i}>{num} x {i + 1} = {num * (i + 1)}</li>
        ))}
      </ul>
    )}
  </div>
);
}