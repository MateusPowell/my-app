import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProdutoEdit } from "./pages/Cadastro";
import { Home } from "./pages/Home";
import { View } from "./pages/Produtos";
import { DefaultTemplate } from "./pages/_Template/Default";
import ProdutoProvider from "./contexts/Produto";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <DefaultTemplate>
      <ProdutoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<ProdutoEdit />} />
          <Route path="/produtos" element={<View />} />
        </Routes>
      </ProdutoProvider>
    </DefaultTemplate>
  </BrowserRouter>
);
