import { useState } from "react";
import getShinobiDex from "../data/data";

function BarraPesquisa(props) {

    const [search, setSearch] = useState('')

    function handleOnSubmit(e) {

        e.preventDefault()
        const items = getShinobiDex();
        const results = items.filter(item => item.nome.toLowerCase().indexOf(search) !== -1);
        props.setShinobiDex(results);
    }

    function handleSearchChange(e) {
        setSearch(e.target.value.toLowerCase())
    }


    return (
        <div className="mt-4 mb-8 place-self-center">
            <form>
                <div className="flex w-96">
                    <input
                        onChange={handleSearchChange}
                        type="text"
                        placeholder="Pesquisar..."
                        className="w-full px-3 py-2 border-y border-l rounded-l-md  border-gray-700 focus:outline-none hover:border-orange-400 focus:border-orange-400"
                    />
                    <button
                        onClick={handleOnSubmit}
                        type="submit"
                        className="px-4 py-2 border-2 border-orange-400 hover:bg-gray-200 hover:text-orange-400 rounded-r-md"
                    >
                        buscar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BarraPesquisa;