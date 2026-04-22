import { useState } from "react";
import { FiltrosCategorias } from "../data/FiltrosCategoria";
import { FiltrosElementoJutsu } from "../data/FiltrosElementoJutsu";
import { FiltrosClanJutsu } from "../data/FiltrosClanJutsu";
import { FiltrosTipoArma } from "../data/FiltrosTipoArma";
import { FiltrosPaisAldeia } from "../data/FiltrosPaisAldeia";

const SUB_FILTROS = {
  personagem: [
    {
      label: "Filiação",
      opcoes: ["Folha", "Areia", "Akatsuki", "Nukenin", "Som"],
      chave: "filiacoes",
      cor: "orange",
    },
    {
      label: "Nível",
      opcoes: ["Genin", "Chunin", "Jonin", "Kage", "Sannin"],
      chave: "niveis",
      cor: "green",
    },
  ],
  jutsu: [
    {
      label: "Elemento",
      opcoes: FiltrosElementoJutsu,
      chave: "elementoJutsu",
      cor: "teal",
    },
    {
      label: "Clã",
      opcoes: FiltrosClanJutsu,
      chave: "clanJutsu",
      cor: "red",
    },
  ],
  arma: [
    {
      label: "Tipo",
      opcoes: FiltrosTipoArma,
      chave: "tipoArma",
      cor: "slate",
    },
  ],
  aldeia: [
    {
      label: "País/Aldeia",
      opcoes: FiltrosPaisAldeia,
      chave: "paisAldeia",
      cor: "indigo",
    },
  ],
  "kekkei-genkai": [
    {
      label: "Clã",
      opcoes: FiltrosClanJutsu,
      chave: "clanJutsu",
      cor: "red",
    },
  ],
};

const BASE_INATIVO = "bg-gray-700 border-gray-600 text-gray-300";

const COR_CLASSES = {
  orange: { ativo: "bg-orange-400 border-orange-400 text-gray-900", inativo: `${BASE_INATIVO} hover:border-orange-400 hover:text-orange-400` },
  green: { ativo: "bg-green-500 border-green-500 text-white", inativo: `${BASE_INATIVO} hover:border-green-500 hover:text-green-400` },
  teal: { ativo: "bg-teal-500 border-teal-500 text-white", inativo: `${BASE_INATIVO} hover:border-teal-500 hover:text-teal-400` },
  red: { ativo: "bg-red-500 border-red-500 text-white", inativo: `${BASE_INATIVO} hover:border-red-500 hover:text-red-400` },
  slate: { ativo: "bg-slate-500 border-slate-500 text-white", inativo: `${BASE_INATIVO} hover:border-slate-400 hover:text-slate-300` },
  indigo: { ativo: "bg-indigo-500 border-indigo-500 text-white", inativo: `${BASE_INATIVO} hover:border-indigo-500 hover:text-indigo-400` },
};

function Filtros(props) {
  const [hoveredCtg, setHoveredCtg] = useState(null);
  const [popoverTimer, setPopoverTimer] = useState(null);

  function handleFiltro(categoriaClicada) {
    if (categoriaClicada === "Todos") {
      props.setCtg(["Todos"]);
      return;
    }

    const semTodos = props.ctg.filter((c) => c !== "Todos");
    const novas = semTodos.includes(categoriaClicada)
      ? semTodos.filter((c) => c !== categoriaClicada)
      : [...semTodos, categoriaClicada];

    props.setCtg(novas.length === 0 ? ["Todos"] : novas);
  }

  function toggleSubFiltro(chave, valor) {
    props.setFiltros((prev) => {
      const lista = prev[chave] || [];
      return {
        ...prev,
        [chave]: lista.includes(valor)
          ? lista.filter((v) => v !== valor)
          : [...lista, valor],
      };
    });
  }

  function handleMouseEnter(categoria) {
    if (popoverTimer) clearTimeout(popoverTimer);
    setHoveredCtg(categoria);
  }

  function handleMouseLeave() {
    setPopoverTimer(setTimeout(() => setHoveredCtg(null), 200));
  }

  function handlePopoverEnter() {
    if (popoverTimer) clearTimeout(popoverTimer);
  }

  return (
    <div className="flex justify-center gap-4 my-8 flex-wrap px-4">
      {FiltrosCategorias.map((categoria) => {
        const ativo = props.ctg.includes(categoria);
        const subFiltros = SUB_FILTROS[categoria] || [];
        const temSubFiltros = subFiltros.length > 0;

        return (
          <div
            key={categoria}
            className="relative"
            onMouseEnter={() => temSubFiltros && handleMouseEnter(categoria)}
            onMouseLeave={() => temSubFiltros && handleMouseLeave()}
          >
            <button
              onClick={() => handleFiltro(categoria)}
              className={`px-4 py-2 font-bold text-white uppercase border-2 rounded-lg transition-all duration-200 ${ativo
                  ? "bg-orange-400 border-orange-400 text-gray-900"
                  : "bg-gray-800 border-gray-700 hover:bg-orange-400 hover:border-orange-400 hover:text-gray-900"
                }`}
            >
              {categoria}
              {temSubFiltros && (
                <span
                  className={`ml-1 text-[9px] align-middle inline-block transition-transform duration-200 ${hoveredCtg === categoria ? "rotate-180" : ""
                    }`}
                >
                  ▼
                </span>
              )}
            </button>

            {temSubFiltros && hoveredCtg === categoria && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 min-w-max"
                onMouseEnter={handlePopoverEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-center">
                  <div className="w-3 h-3 bg-gray-900 border-l-2 border-t-2 border-gray-600 rotate-45 -mb-2 z-10 relative" />
                </div>

                <div className="bg-gray-900 border-2 border-gray-600 rounded-xl p-3 shadow-2xl flex flex-col gap-3">
                  {subFiltros.map((grupo) => (
                    <div key={grupo.chave}>
                      <span className="block text-[9px] font-bold text-gray-500 uppercase mb-1.5 tracking-wider">
                        {grupo.label}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {grupo.opcoes.map((opcao) => {
                          const selecionado = (props.filtrosAtivos?.[grupo.chave] || []).includes(opcao);
                          const cores = COR_CLASSES[grupo.cor];
                          return (
                            <button
                              key={opcao}
                              onClick={() => toggleSubFiltro(grupo.chave, opcao)}
                              className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-md border-2 transition-all duration-150 ${selecionado ? cores.ativo : cores.inativo
                                }`}
                            >
                              {opcao}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Filtros;