import React from "react";

import { BrowserRouter as Router, 
    Routes, 
    Route,
  } from "react-router-dom";

import PagesContatos from "../pages/Contatos/contatos";
import PagesIndex from '../pages/Home/Index';
import PageSobre from '../pages/Sobre/PageSobre';
import PageSofa from '../pages/Sofas/PageSofas';
import PageProdutos from '../pages/Produtos/produtos';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagesIndex/>} />
        <Route path="/Contato" element={<PagesContatos/>} />
        <Route path="/Sobre" element={<PageSobre/>} />
        <Route path="/Sofas" element={<PageSofa/>} />
        <Route path="/Produtos" element={<PageProdutos/>} />
      </Routes>
    </Router>
  );
};

export default Root;