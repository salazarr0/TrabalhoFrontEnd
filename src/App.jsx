import { useEffect, useState } from "react";
import getShinobiDex from "./data/data";
import Header from "./components/Header";
import BarraPesquisa from "./components/BarraPesquisa";
import Filtros from "./components/Filtros";
import SelectFiltro from "./components/SelectFiltro";
import Lista from "./components/Lista";
import logo from "./assets/logo.PNG";

function App() {
  const [shinobiDex, setShinobiDex] = useState([]);
  const [ctg, setCtg] = useState(["Todos"]); 

  const [filtrosAtivos, setFiltrosAtivos] = useState({
    search: "",
    filiacoes: [],
    niveis: []
  });

  useEffect(() => {
    const todosOsItens = getShinobiDex();
    
    const filtrados = todosOsItens.filter((item) => {
      const matchNome = item.nome.toLowerCase().includes(filtrosAtivos.search);
      const matchCategoria = ctg.includes("Todos") || ctg.includes(item.categoria);
      const matchFiliacao = filtrosAtivos.filiacoes.length === 0 || filtrosAtivos.filiacoes.includes(item.filiacao);
      const matchNivel = filtrosAtivos.niveis.length === 0 || (item.nivel && item.nivel.some(n => filtrosAtivos.niveis.includes(n)));
      
      return matchNome && matchCategoria && matchFiliacao && matchNivel;
    });
    
    setShinobiDex(filtrados);
  }, [filtrosAtivos, ctg]);

  return (
    <div>
      <Header logo={logo} b1="SOBRE" b2="CONTATO" />
      <main className="pt-32">
        <BarraPesquisa setFiltros={setFiltrosAtivos} />
        <SelectFiltro setFiltros={setFiltrosAtivos} />
        
        <Filtros ctg={ctg} setCtg={setCtg} />
        <Lista shinobiDex={shinobiDex} ctg={ctg}/>
      </main>
    </div>
  );
}

export default App;