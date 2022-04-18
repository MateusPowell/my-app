import React, { useMemo, useState } from "react";

const bolsas = [
  "Bolsa de ombro em Re-Nylon acolchoado",
  "Bolsa em couro amarela",
  "Bolsa em Re-Nylon Prada Re-Edition 2005",
  "Bolsa pequena em couro Saffiano",
  "Bolsa Prada Matinée pequena",
  "Bolsa Re-Nylon bolinhas Prada Re-Edition 2005",
  "Bolsa tote atoalhada",
  "Bolsa tote em couro",
  "Bolsa tote em malha com paetês",
  "Bolsa tote pequena em malha com paetês",
  "Prada Bolsa de ombro em couro escovado",
  "Prada Re Edition 1995",
];

export default function Busca() {
  const [busca, setBusca] = useState(" ");

  const bolsasFiltradas = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return bolsas.filter((bolsas) => bolsas.toLowerCase().includes(lowerBusca));
  }, [busca]);

  return (
    <div className="App">
      <h1>Bolsas</h1>
      <input
        type="text"
        value={busca}
        onChange={(ev) => setBusca(ev.target.value)}
      />
      {bolsasFiltradas.map((bolsas) => (
        <li key={bolsas}>{bolsas}</li>
      ))}
    </div>
  );
}
