import { useEffect, useState } from "react";
import { getShinobiDex } from "../data/data";

export const useShinobiFilter = (filtrosAtivos, ctg) => {
  const [shinobiDex, setShinobiDex] = useState([]);

  useEffect(() => {
    const todosOsItens = getShinobiDex;

    const filtrados = todosOsItens.filter((item) => {
      const matchNome = item.nome.toLowerCase().includes(filtrosAtivos.search);
      const categoriaArr = Array.isArray(item.categoria) ? item.categoria : (item.categoria ? [item.categoria] : []);
      const matchCategoria = ctg.includes("Todos") || ctg.every(c => categoriaArr.includes(c));
      const filiacaoArr = Array.isArray(item.filiacao) ? item.filiacao : (item.filiacao ? [item.filiacao] : []);
      const nivelArr = Array.isArray(item.nivel) ? item.nivel : (item.nivel ? [item.nivel] : []);
      const matchFiliacao = filtrosAtivos.filiacoes.length === 0 || filtrosAtivos.filiacoes.every(f => filiacaoArr.includes(f));
      const matchNivel = filtrosAtivos.niveis.length === 0 || filtrosAtivos.niveis.every(n => nivelArr.includes(n));
      
      const elementoJutsuArr = item.elementoJutsu ? [item.elementoJutsu] : [];
      const matchElementoJutsu = filtrosAtivos.elementoJutsu.length === 0 || filtrosAtivos.elementoJutsu.every(e => elementoJutsuArr.includes(e));
      
      const clanJutsuArr = item.clanJutsu ? [item.clanJutsu] : [];
      const matchClanJutsu = filtrosAtivos.clanJutsu.length === 0 || filtrosAtivos.clanJutsu.every(c => clanJutsuArr.includes(c));
      
      const tipoArmaArr = item.tipoArma ? [item.tipoArma] : [];
      const matchTipoArma = filtrosAtivos.tipoArma.length === 0 || filtrosAtivos.tipoArma.every(t => tipoArmaArr.includes(t));
      
      const paisAldeiaArr = item.paisAldeia ? [item.paisAldeia] : [];
      const matchPaisAldeia = filtrosAtivos.paisAldeia.length === 0 || filtrosAtivos.paisAldeia.every(p => paisAldeiaArr.includes(p));

      return matchNome && matchCategoria && matchFiliacao && matchNivel && matchElementoJutsu && matchClanJutsu && matchTipoArma && matchPaisAldeia;
    });

    setShinobiDex(filtrados);
  }, [filtrosAtivos, ctg]);

  return shinobiDex;
};
