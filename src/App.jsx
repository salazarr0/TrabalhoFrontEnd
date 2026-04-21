import { useEffect, useState } from "react";
import { getShinobiDex } from "./data/data";
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
    const todosOsItens = getShinobiDex;

    const filtrados = todosOsItens.filter((item) => {
      const matchNome = item.nome.toLowerCase().includes(filtrosAtivos.search);
      const categoriaArr = Array.isArray(item.categoria) ? item.categoria : (item.categoria ? [item.categoria] : []);
      const matchCategoria = ctg.includes("Todos") || ctg.every(c => categoriaArr.includes(c));
      const filiacaoArr = Array.isArray(item.filiacao) ? item.filiacao : (item.filiacao ? [item.filiacao] : []);
      const nivelArr = Array.isArray(item.nivel) ? item.nivel : (item.nivel ? [item.nivel] : []);
      const matchFiliacao = filtrosAtivos.filiacoes.length === 0 || filtrosAtivos.filiacoes.every(f => filiacaoArr.includes(f));
      const matchNivel = filtrosAtivos.niveis.length === 0 || filtrosAtivos.niveis.every(n => nivelArr.includes(n));

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
        <Lista shinobiDex={shinobiDex} ctg={ctg} />
      </main>
    </div>
  );
}

export default App;