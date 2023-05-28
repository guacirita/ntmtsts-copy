import { useState } from "react";
import BannerInicio from './components/banner/BannerInicio.jsx';
import SecaoIniciativas from './components/iniciativas/SecaoIniciativas.jsx';
import SecaoSobre from "./components/secaoSobre/SecaoSobre.jsx";
import Sobre from "./components/secaoSobre/Sobre.jsx";
import SecaoContato from "./components/secaoContato/SecaoContato.jsx";

import './App.css';
import SecaoContribua from "./components/SecaoContribua/SecaoContribua.jsx";


function App() {
  
  return (
    <>
      <BannerInicio />
      <SecaoIniciativas />
      <SecaoSobre />
      <Sobre />
      <SecaoContato />
      <SecaoContribua />
     
    </>
  )
}

export default App
