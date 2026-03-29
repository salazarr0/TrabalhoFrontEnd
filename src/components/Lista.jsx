import { useEffect, useState } from "react";
import Card from "./Card";
import getShinobiDex from "../data/data";

function Lista() {
    const [shinobiDex, setShinobiDex] = useState([])

    useEffect(() => {
        setShinobiDex(getShinobiDex());
    }, [])

    return (
        <div className="grid grid-cols-5">
            {shinobiDex.map(dex => {
                return (
                    <Card
                        key={dex.id}
                        nome={dex.nome}
                        desc={dex.descrição}
                        id={dex.id}
                        cat={dex.categoria}
                        imagem={dex.imagem}
                    />
                )
            })}
        </div>
    )
}

export default Lista