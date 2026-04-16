import { useEffect, useState } from "react";
import getShinobiDex from "./data/data";
import Header from "./components/Header";
import BarraPesquisa from "./components/BarraPesquisa";
import Filtros from "./components/BotaoFiltro";
import SelectFiltro from "./components/SelectFiltro";
import Lista from "./components/Lista";
import logo from "./assets/logo.PNG";

function App() {
  const [shinobiDex, setShinobiDex] = useState([]);

  useEffect(() => {
    setShinobiDex(getShinobiDex());
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header logo={logo} b1="SOBRE" b2="CONTATO" />
      <main className="pt-32">
        <BarraPesquisa setShinobiDex={setShinobiDex} />
        <SelectFiltro setShinobiDex={setShinobiDex} />
        <Filtros setShinobiDex={setShinobiDex} />
        <Lista shinobiDex={shinobiDex} />
      </main>
    </div>
  );
}

export default App;