function Card(props) {
            return (
                <div>
                    <div className="border-2 border-solid bg-orange-400 ">
                        <p>{props.cat}</p>
                        <img className="w-48 h-44 pt-4" src={props.imagem} alt="foto"/>
                        <div>
                            <h2>{props.id} - {props.nome}</h2>
                        </div>
                        <div>
                            <p>{props.desc}</p>
                        </div>
                    </div>
                </div>
            )
        }  

export default Card
