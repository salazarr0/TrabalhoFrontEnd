function Card(props) {
    const temaPorCategoria = {
        "personagem": { texto: 'text-orange-400', borda: 'border-orange-400' },
        "aldeia": { texto: 'text-green-500', borda: 'border-green-500' },
        "arma": { texto: 'text-blue-500', borda: 'border-blue-500' },
        "jutsu": { texto: 'text-red-500', borda: 'border-red-500' },
        "kekkei-genkai": { texto: 'text-purple-500', borda: 'border-purple-500' }
    };

    const tema = temaPorCategoria[props.cat] || { texto: 'text-gray-800', borda: 'border-gray-300' };

    return (
        <div className='p-0 flex justify-center'>
            <div className="flex flex-col w-80 h-fit bg-white rounded-xl">
                <div className="flex items-start w-full px-4 pt-4">
                    {props.filiacao && (
                        <p className="text-gray-500 border-2 border-gray-400 font-bold p-2 rounded-2xl uppercase text-[10px]">
                            {props.filiacao}
                        </p>
                    )}
                    <p className={`${tema.texto} ${tema.borda} ml-auto font-bold p-2 border-4 rounded-2xl uppercase text-[10px]`}>
                        {props.cat}
                    </p>
                </div>
                <img className={`w-64 h-52 place-self-center ${tema.borda} border-4 rounded-lg`} src={props.imagem} alt='foto' />
                <div className="flex justify-between">
                    <h2 className="font-bold text-xl m-4">{props.id} - {props.nome}</h2>
                </div>
                <div>
                    <p className="p-4">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;