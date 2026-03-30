import Lista from "./components/Lista"
import "./index.css"
import { useEffect, useState } from "react"
import getShinobiDex from "./data/data";
import BarraPesquisa from "./components/BarraPesquisa";
import Header from "./components/Header";
import logo from "./assets/logo.PNG"
import Filtros from "./components/BotaoFiltro";



function App() {
  const [shinobiDex, setShinobiDex] = useState([])

  useEffect(() => {
    setShinobiDex(getShinobiDex());
  }, [])

  return (
    <>
      <Header logo={logo} b1="SOBRE" b2="CONTATO" />
      <BarraPesquisa setShinobiDex={setShinobiDex} />
      <Filtros setShinobiDex={setShinobiDex} />
      <Lista shinobiDex={shinobiDex}/>
    </>
  )
}

export default App;
