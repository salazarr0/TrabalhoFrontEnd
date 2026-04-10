import Card from "./Card";

function Lista(props) {
    return (
        <div className="grid grid-cols-5 gap-8 w-fit mt-4 mx-auto">
            {props.shinobiDex.map(dex => {
                return (
                    <Card
                        key={dex.id}
                        nome={dex.nome}
                        desc={dex.descrição}
                        id={dex.id}
                        cat={dex.categoria}
                        imagem={dex.imagem}
                        filiacao={dex.filiacao}
                    />
                )
            })}
        </div>
    )
}

export default Lista