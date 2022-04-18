import React, { createContext, useState, useContext } from "react";

const ProdutoContext = createContext();

export default function ProdutoProvider({ children }) {
  const [produto, setProduto] = useState([
    {
      key: 1,
      titulo: "Bolsa de ombro em Re-Nylon acolchoado",
      preco: 123,
      descricao: "Bolsa barata",
      peso: 250,
    },
    {
      key: 2,
      titulo: "Bolsa em couro amarela",
      preco: 545,
      descricao: "Bolsa barata",
      peso: 100,
    },
    {
      key: 3,
      titulo: "Bolsa em Re-Nylon Prada Re-Edition 2005",
      preco: 545,
      descricao: "Bolsa barata",
      peso: 100,
    },
    {
      key: 4,
      titulo: "Bolsa pequena em couro Saffiano",
      preco: 545,
      descricao: "Bolsa barata",
      peso: 100,
    },
    {
      key: 5,
      titulo: "Bolsa Prada Matinée pequena",
      preco: 545,
      descricao: "Bolsa barata",
      peso: 100,
    },
    {
      key: 6,
      titulo: "Bolsa Re-Nylon bolinhas Prada Re-Edition 2005",
      preco: 545,
      descricao: "Bolsa barata",
      peso: 100,
    },
    {
      key: 7,
      titulo: "Bolsa tote atoalhada",
      preco: 545,
      descricao: "Bolsa barata",
      peso: 100,
    },
    {
      key: 8,
      titulo: "Bolsa tote em malha com paetês",
      preco: 545,
      descricao: "Bolsa barata",
      peso: 100,
    },
    {
      key: 9,
      titulo: "Bolsa tote pequena em malha com paetês",
      preco: 545,
      descricao: "Bolsa barata",
      peso: 100,
    },
    {
      key: 10,
      titulo: "Prada Bolsa de ombro em couro escovado",
      preco: 545,
      descricao: "Bolsa barata",
      peso: 100,
    },
  ]);

  const adicionar = () => {
          
  };



  return (
    <ProdutoContext.Provider value={{ produto }}>
      {children}
    </ProdutoContext.Provider>
  );
}

export const useProdutoContext = () => useContext(ProdutoContext);
