// import React, { createContext, useState, useContext } from "react";

// const ProdutoContext = createContext();

// export default function ProdutoProvider({ children }) {
//   const [produto, setProduto] = useState([
//     {
//       key: 1,
//       titulo: "bolsa",
//       preco: "100",
//       descricao: "Bolsa barata",
//       peso: 1000,
//     },
//   ]);

//   const adicionar = () => {
//     const newProduto = {
//       key: produto.length + 1,
//       titulo: "",
//       preco: "",
//       descricao: "",
//       peso: "",
//     };
//     setProduto([...produto, newProduto]);
//     console.log(produto);
//   };

//   const remover = (key) => {    
//     setProduto((prevState) => 
//     prevState.filter((produto) => produto.key !== key)
//   };

//   return (
//     <ProdutoContext.Provider value={{ produto, adicionar, remover }}>
//       {children}
//     </ProdutoContext.Provider>
//   );
// }

// export const useProdutoContext = () => useContext(ProdutoContext);
