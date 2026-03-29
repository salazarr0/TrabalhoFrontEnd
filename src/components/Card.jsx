function Card(props) {

    if (props.cat === 'personagem') {
        return (
            <div className='p-0 flex justify-center'>
                <div className="flex flex-col w-80 h-fit bg-white rounded-xl">
                    <p className="text-orange-400 font-bold m-4 mr-6 p-2 place-self-end border-4 border-orange-400 rounded-2xl">
                        {props.cat}
                    </p>
                    <img className="w-64 h-52 place-self-center border-orange-400 border-4 rounded-lg" src={props.imagem} alt="foto" />
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
    if (props.cat === 'jutsu') {
        return (
            <div className='p-0 flex justify-center'>
                <div className="flex flex-col w-80 h-fit bg-white rounded-xl">
                    <p className="text-red-400 font-bold m-4 mr-6 p-2 place-self-end border-4 border-red-400 rounded-2xl">
                        {props.cat}
                    </p>
                    <img className="w-64 h-52 place-self-center border-red-400 border-4 rounded-lg" src={props.imagem} alt="foto" />
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
    if (props.cat === 'aldeia') {
        return (
            <div className='p-0 flex justify-center'>
                <div className="flex flex-col w-80 h-fit bg-white rounded-xl">
                    <p className="text-green-400 font-bold m-4 mr-6 p-2 place-self-end border-4 border-green-400 rounded-2xl">
                        {props.cat}
                    </p>
                    <img className="w-64 h-52 place-self-center border-green-400 border-4 rounded-lg" src={props.imagem} alt="foto" />
                    <div className="flex justify-between">
                        <h2 className="font-bold text-xl m-4">{props.id} - {props.nome}</h2>
                    </div>
                    <div>
                        <p className="p-4">{props.desc}</p>
                    </div>
                </div>
            </div>
        )
    }if (props.cat === 'kekkei-genkai') {
        return (
            <div className='p-0 flex justify-center'>
                <div className="flex flex-col w-80 h-fit bg-white rounded-xl">
                    <p className="text-purple-700 font-bold m-4 mr-6 p-2 place-self-end border-4 border-purple-700 rounded-2xl">
                        {props.cat}
                    </p>
                    <img className="w-64 h-52 place-self-center border-purple-700 border-4 rounded-lg" src={props.imagem} alt="foto" />
                    <div className="flex justify-between">
                        <h2 className="font-bold text-xl m-4">{props.id} - {props.nome}</h2>
                    </div>
                    <div>
                        <p className="p-4">{props.desc}</p>
                    </div>
                </div>
            </div>
        )
    }if (props.cat === 'arma') {
        return (
            <div className='p-0 flex justify-center'>
                <div className="flex flex-col w-80 h-fit bg-white rounded-xl">
                    <p className="text-blue-700 font-bold m-4 mr-6 p-2 place-self-end border-4 border-blue-700 rounded-2xl">
                        {props.cat}
                    </p>
                    <img className="w-64 h-52 place-self-center border-blue-700 border-4 rounded-lg" src={props.imagem} alt="foto" />
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
    return (
        <div className='p-0 flex justify-center'>
            <div className="flex flex-col w-80 h-fit bg-white rounded-xl">
                <p className="text-orange-400 font-bold m-4 mr-6 p-2 place-self-end border-4 border-orange-400 rounded-2xl">
                    {props.cat}
                </p>
                <img className="w-64 h-52 place-self-center border-orange-400 border-4 rounded-lg" src={props.imagem} alt="foto" />
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

export default Card
