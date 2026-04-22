import { useState } from "react";
import { useShinobiFilter } from "./hooks/useShinobiFilter";
import Header from "./components/Header";
import BarraPesquisa from "./components/BarraPesquisa";
import Filtros from "./components/Filtros";
import Lista from "./components/Lista";
import logo from "./assets/logo.PNG";

function App() {
  const [ctg, setCtg] = useState(["Todos"]);

  const [filtrosAtivos, setFiltrosAtivos] = useState({
    search: "",
    filiacoes: [],
    niveis: [],
    elementoJutsu: [],
    clanJutsu: [],
    tipoArma: [],
    paisAldeia: []
  });

  const shinobiDex = useShinobiFilter(filtrosAtivos, ctg);

  return (
    <div>
      <Header logo={logo} b1="SOBRE" b2="CONTATO" />
      <main className="pt-32">
        <BarraPesquisa setFiltros={setFiltrosAtivos} />
        <Filtros ctg={ctg} setCtg={setCtg} filtrosAtivos={filtrosAtivos} setFiltros={setFiltrosAtivos} />
        <Lista shinobiDex={shinobiDex} ctg={ctg} />
      </main>
    </div>
  );
}

export default App;