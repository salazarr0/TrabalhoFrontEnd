import getShinobiDex from "../data/data";

export let ctg = "Todos"
function Filtros(props) {
  const categorias = [
    "Todos",
    "personagem",
    "arma",
    "aldeia",
    "jutsu",
    "kekkei-genkai",
  ];

  function handleFiltro(categoriaClicada) {
    const todosOsItens = getShinobiDex();

    if (categoriaClicada === "Todos") {
        ctg = "Todos"
      props.setShinobiDex(todosOsItens);
    } else {
      const itensFiltrados = todosOsItens.filter((item) => {
        ctg = categoriaClicada
        return item.categoria === categoriaClicada;
      });
      props.setShinobiDex(itensFiltrados);
    }
  }

  return (
    <div className="flex justify-center gap-4 my-8 flex-wrap px-4">
      {categorias.map((categoria) => {
        return (
          <button
            key={categoria}
            onClick={() => handleFiltro(categoria)}
            className="px-4 py-2 font-bold text-white uppercase bg-gray-800 border-2 border-gray-700 rounded-lg hover:bg-orange-400 hover:border-orange-400 hover:text-gray-900 transition-colors"
          >
            {categoria}
          </button>
        );
      })}
    </div>
  );
}

export default Filtros;