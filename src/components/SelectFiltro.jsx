import { useState, useEffect } from "react";

function SelectFiltro(props) {

  const [filiacoes, setFiliacoes] = useState([]);
  const [niveis, setNiveis] = useState([]);

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
      niveis: niveis
    }));
  }, [filiacoes, niveis, props]);

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
    </div>
  );
}

export default SelectFiltro;