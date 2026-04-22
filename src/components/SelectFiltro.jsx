import { useState, useEffect } from "react";
import { FiltrosElementoJutsu } from "../data/FiltrosElementoJutsu";
import { FiltrosClanJutsu } from "../data/FiltrosClanJutsu";
import { FiltrosTipoArma } from "../data/FiltrosTipoArma";
import { FiltrosPaisAldeia } from "../data/FiltrosPaisAldeia";

function SelectFiltro(props) {

  const [filiacoes, setFiliacoes] = useState([]);
  const [niveis, setNiveis] = useState([]);
  const [elementoJutsu, setElementoJutsu] = useState([]);
  const [clanJutsu, setClanJutsu] = useState([]);
  const [tipoArma, setTipoArma] = useState([]);
  const [paisAldeia, setPaisAldeia] = useState([]);

  const opcoesFiliacao = ["Folha", "Areia", "Akatsuki", "Nukenin", "Som"];
  const opcoesNivel = ["Genin", "Chunin", "Jonin", "Kage", "Sannin"];

  const toggleFiltro = (valor, listaAtual, setLista) => {
    if (listaAtual.includes(valor)) {
      setLista(listaAtual.filter((item) => item !== valor));
    } else {
      setLista([...listaAtual, valor]);
    }
  };

  useEffect(() => {

    props.setFiltros(prev => ({
      ...prev,
      filiacoes: filiacoes,
      niveis: niveis,
      elementoJutsu: elementoJutsu,
      clanJutsu: clanJutsu,
      tipoArma: tipoArma,
      paisAldeia: paisAldeia
    }));
  }, [filiacoes, niveis, elementoJutsu, clanJutsu, tipoArma, paisAldeia]);

  return (
    <div className="flex flex-col items-center gap-3 mb-6">
      <div className="flex gap-2 flex-wrap justify-center items-center">
        <span className="text-[10px] font-bold text-gray-500 uppercase">Filiação:</span>
        {opcoesFiliacao.map((f) => (
          <button
            key={f}
            onClick={() => toggleFiltro(f, filiacoes, setFiliacoes)}
            className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md border-2 transition-colors ${filiacoes.includes(f) ? "bg-orange-400 border-orange-400 text-gray-900" : "bg-gray-800 border-gray-700 text-gray-400 hover:border-orange-400"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap justify-center items-center">
        <span className="text-[10px] font-bold text-gray-500 uppercase">Nível:</span>
        {opcoesNivel.map((n) => (
          <button
            key={n}
            onClick={() => toggleFiltro(n, niveis, setNiveis)}
            className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md border-2 transition-colors ${niveis.includes(n) ? "bg-green-500 border-green-500 text-white" : "bg-gray-800 border-gray-700 text-gray-400 hover:border-green-500"
              }`}
          >
            {n}
          </button>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap justify-center items-center">
        <span className="text-[10px] font-bold text-gray-500 uppercase">Elemento Jutsu:</span>
        {FiltrosElementoJutsu.map((e) => (
          <button
            key={e}
            onClick={() => toggleFiltro(e, elementoJutsu, setElementoJutsu)}
            className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md border-2 transition-colors ${elementoJutsu.includes(e) ? "bg-teal-500 border-teal-500 text-white" : "bg-gray-800 border-gray-700 text-gray-400 hover:border-teal-500"
              }`}
          >
            {e}
          </button>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap justify-center items-center">
        <span className="text-[10px] font-bold text-gray-500 uppercase">Clã/Jutsu:</span>
        {FiltrosClanJutsu.map((c) => (
          <button
            key={c}
            onClick={() => toggleFiltro(c, clanJutsu, setClanJutsu)}
            className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md border-2 transition-colors ${clanJutsu.includes(c) ? "bg-red-500 border-red-500 text-white" : "bg-gray-800 border-gray-700 text-gray-400 hover:border-red-500"
              }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap justify-center items-center">
        <span className="text-[10px] font-bold text-gray-500 uppercase">Tipo Arma:</span>
        {FiltrosTipoArma.map((t) => (
          <button
            key={t}
            onClick={() => toggleFiltro(t, tipoArma, setTipoArma)}
            className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md border-2 transition-colors ${tipoArma.includes(t) ? "bg-slate-500 border-slate-500 text-white" : "bg-gray-800 border-gray-700 text-gray-400 hover:border-slate-500"
              }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap justify-center items-center">
        <span className="text-[10px] font-bold text-gray-500 uppercase">País/Aldeia:</span>
        {FiltrosPaisAldeia.map((p) => (
          <button
            key={p}
            onClick={() => toggleFiltro(p, paisAldeia, setPaisAldeia)}
            className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md border-2 transition-colors ${paisAldeia.includes(p) ? "bg-indigo-500 border-indigo-500 text-white" : "bg-gray-800 border-gray-700 text-gray-400 hover:border-indigo-500"
              }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectFiltro;