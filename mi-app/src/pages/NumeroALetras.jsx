import { useState } from 'react';

const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

function numeroALetras(n) {
  if (n === 1000) return 'mil';
  if (n === 100) return 'cien';
  const c = Math.floor(n / 100);
  const resto = n % 100;
  const d = Math.floor(resto / 10);
  const u = resto % 10;
  const partes = [];

  if (c) partes.push(centenas[c]);
  if (resto >= 10 && resto < 20) partes.push(especiales[resto - 10]);
  else if (resto >= 21 && resto < 30) partes.push('veinti' + unidades[u]);
  else {
    if (d) partes.push(decenas[d]);
    if (u) partes.push(d ? 'y ' + unidades[u] : unidades[u]);
  }
  return partes.join(' ');
}

export default function NumeroALetras() {
  const [n, setN] = useState('');
  const num = Number(n);
  const valido = Number.isInteger(num) && num >= 1 && num <= 1000;

return (
  <div className="card">
    <h2>Número a Letras</h2>
    <input type="number" placeholder="1 al 1000" value={n} onChange={e => setN(e.target.value)} />
    {n !== '' && (
      <div className="resultado">
        {valido ? numeroALetras(num) : 'Ingresa un número entero del 1 al 1000.'}
      </div>
    )}
  </div>
);
}