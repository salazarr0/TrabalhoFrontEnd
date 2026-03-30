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
        <div className="mt-32 mb-8 flex justify-center w-full">
            <form>
                <div className="flex w-96">
                    <input
                        onChange={handleSearchChange}
                        type="text"
                        placeholder="Pesquisar..."
                        className="w-full px-3 py-2 border-y border-l bg-inherit text-gray-400 border-gray-700 rounded-l-md focus:outline-none hover:border-orange-400 focus:border-orange-400"
                    />
                    <button
                        onClick={handleOnSubmit}
                        type="submit"
                        className="px-4 py-2 font-bold border border-orange-400 rounded-r-md hover:bg-orange-400 transition-colors flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BarraPesquisa;