import { FiltrosCategorias } from "../data/FiltrosCategoria";

function Filtros(props) {
  function handleFiltro(categoriaClicada) {
    let novasSelecionadas;

    if (categoriaClicada === "Todos") {
      novasSelecionadas = ["Todos"];
    } else {
      const semTodos = props.ctg.filter((c) => c !== "Todos");

      if (semTodos.includes(categoriaClicada)) {
        novasSelecionadas = semTodos.filter((c) => c !== categoriaClicada);
      } else {
        novasSelecionadas = [...semTodos, categoriaClicada];
      }

      if (novasSelecionadas.length === 0) {
        novasSelecionadas = ["Todos"];
      }
    }

    props.setCtg(novasSelecionadas);
  }

  return (
    <div className="flex justify-center gap-4 my-8 flex-wrap px-4">
      {FiltrosCategorias.map((categoria) => {
        const ativo = props.ctg.includes(categoria);
        return (
          <button
            key={categoria}
            onClick={() => handleFiltro(categoria)}
            className={`px-4 py-2 font-bold text-white uppercase border-2 rounded-lg transition-colors ${ativo
              ? "bg-orange-400 border-orange-400 text-gray-900"
              : "bg-gray-800 border-gray-700 hover:bg-orange-400 hover:border-orange-400 hover:text-gray-900"
              }`}
          >
            {categoria}
          </button>
        );
      })}
    </div>
  );
}

export default Filtros;