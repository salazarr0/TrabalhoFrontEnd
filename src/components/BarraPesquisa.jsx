import { useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa";

function BarraPesquisa(props) {

  const [search, setSearch] = useState("");

  useEffect(() => {

    props.setFiltros(prev => ({ ...prev, search }));
  }, [search, props]);

  function handleSearchChange(e) {
    setSearch(e.target.value.toLowerCase());
  }

  return (
    <div className="mt-2 mb-8 flex justify-center w-full">
      <div className="flex w-96">
        <input
          onChange={handleSearchChange}
          type="text"
          placeholder="Pesquisar..."
          className="w-full px-3 py-2 border-y border-l bg-inherit text-gray-400 border-gray-700 rounded-l-md focus:outline-none hover:border-orange-400 focus:border-orange-400"
        />
        <button
          type="button"
          className="px-4 py-2 font-bold border border-orange-400 rounded-r-md hover:bg-orange-400 transition-colors flex items-center justify-center"
        >
          <FaSistrix className="text-gray-400"/> 
        </button>
      </div>
    </div>
  );
}

export default BarraPesquisa;