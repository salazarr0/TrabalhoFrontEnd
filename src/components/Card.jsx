import { CardTemaClanJutsu } from "./CardTemaClanJutsu";
import { CardTemaElementoJutsu } from "./CardTemaElementoJutsu";
import { CardTemaFiliacao } from "./CardTemaFiliacao";
import { CardTemaPaisAldeia } from "./CardTemaPaisAldeia";
import { CardTemaPorCategoria } from "./CardTemaPorCategoria";
import { CardTemaTipoArma } from "./CardTemaTipoArma";

function Card(props) {

    const propsLista = [
        { valor: props.filiacao, tema: CardTemaFiliacao[Array.isArray(props.filiacao) ? props.filiacao[0] : props.filiacao] || { texto: 'text-gray-800', borda: 'border-gray-300' } },
        { valor: props.clanJutsu, tema: CardTemaClanJutsu[props.clanJutsu] || { texto: 'text-gray-800', borda: 'border-gray-300' } },
        { valor: props.cat, tema: CardTemaPorCategoria[props.cat] || { texto: 'text-gray-800', borda: 'border-gray-300' } },
        { valor: props.tipoArma, tema: CardTemaTipoArma[props.tipoArma] || { texto: 'text-gray-800', borda: 'border-gray-300' } },
        { valor: props.paisAldeia, tema: CardTemaPaisAldeia[props.paisAldeia] || { texto: 'text-gray-800', borda: 'border-gray-300' } },
        { valor: props.elementoJutsu, tema: CardTemaElementoJutsu[props.elementoJutsu] || { texto: 'text-gray-800', borda: 'border-gray-300' } }
    ]

    const temaPrincipal = CardTemaPorCategoria[props.cat]

    return (
        <div className='p-0 flex justify-center'>
            <div className={`flex flex-col w-80 h-fit ${temaPrincipal.fundoCard} rounded-xl border-4 overflow-hidden shadow-md ${temaPrincipal.borda}`}>
                <div className="flex flex-wrap gap-2 px-4 pt-4 w-full justify-center">
                    {propsLista.filter((item) => item.valor).map((item) => {
                        return (
                            <p key={item.valor} className={`${item.tema.texto} ${item.tema.borda} ${item.tema.fundo} font-bold px-2 py-1 border-2 rounded-xl uppercase text-[10px] text-center`}>
                                {Array.isArray(item.valor) ? item.valor.join(" - ") : item.valor}
                            </p>
                        )
                    })}
                </div>
                <img className={`w-64 h-52 mt-4 mx-auto object-cover ${temaPrincipal.borda} border-4 rounded-lg`} src={props.imagem} alt={props.nome}/>
                <div className="w-full text-center mt-2">
                    <h2 className={`${temaPrincipal.textoTitulo} font-bold text-xl px-4`}>{props.nome}</h2>
                </div>
                <div className="w-full text-center mb-2">
                    <p className="px-4 pb-4 text-sm text-white">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;