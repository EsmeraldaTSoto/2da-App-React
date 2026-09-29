import { useState } from 'react';

export default function Sumadora() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [res, setRes] = useState(null);

  return (
  <div className="card">
    <h2>Sumadora</h2>
    <input type="number" placeholder="Número 1" value={a} onChange={e => setA(e.target.value)} />
    <input type="number" placeholder="Número 2" value={b} onChange={e => setB(e.target.value)} />
    <button onClick={() => setRes(Number(a) + Number(b))}>Sumar</button>
    {res !== null && <div className="resultado">Resultado: {res}</div>}
  </div>
);
}