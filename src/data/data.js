import naruto from "../assets/naruto.webp";
import sasuke from "../assets/Sasuke.webp";
import sakura from "../assets/sakura.webp";
import kakashi from "../assets/Kakashi.webp";
import gaara from "../assets/Gaara.webp";
import kunai from "../assets/kunai.webp";
import shuriken from "../assets/shuriken.webp";
import konohagakure from "../assets/konohagakure.webp";
import itachi from "../assets/ItachiUchiha.webp";
import jiraya from "../assets/Jiraya.webp";
import chidori from "../assets/chidori.webp";
import samehada from "../assets/Samehada.webp";
import sunagakure from "../assets/sunagakure.webp";
import byakugan from "../assets/byakugan.webp";
import madara from "../assets/MadaraUchiha.webp";
import rasenshuriken from "../assets/FutonRasenShuriken.webp";
import iwagakure from "../assets/Iwagakure.webp";
import kirikagure from "../assets/kirigakure.webp";
import kotoamatsukami from "../assets/Kotoamatsukami.webp";
import kubikiribocho from "../assets/Kubikiribocho.webp";
import kumogakure from "../assets/Kumogakure.webp";
import mokuton from "../assets/Mokuton.webp";
import orochinho from "../assets/orochimaru.webp";
import pain from "../assets/pain.webp";
import invocacao from "../assets/pergaminho_de_invocacao.webp";
import rinnegan from "../assets/Rinnegan.webp";
import tsunade from "../assets/tsunade.webp";
import amaterasu from "../assets/amaterasu.webp";
import sharingan from "../assets/Sharingan.webp";
import rasengan from "../assets/Rasengan_ Naruto.webp";

function getShinobiDex() {
  return [
    {
      id: 1,
      nome: "Naruto Uzumaki",
      categoria: "personagem",
      descrição: "Sétimo Hokage e Jinchūriki da Kurama.",
      imagem: naruto,
    },

    {
      id: 2,
      nome: "Sasuke Uchiha",
      categoria: "personagem",
      descrição: "Único sobrevivente do clã Uchiha e portador do Rinnegan.",
      imagem: sasuke,
    },
    {
      id: 3,
      nome: "Sakura Haruno",
      categoria: "personagem",
      descrição: "Ninja médica de elite e discípula de Tsunade.",
      imagem: sakura,
    },
    {
      id: 4,
      nome: "Kakashi Hatake",
      categoria: "personagem",
      descrição: "O 'Ninja Copiador' e sexto Hokage de Konoha.",
      imagem: kakashi,
    },
    {
      id: 5,
      nome: "Gaara",
      categoria: "personagem",
      descrição: "Quinto Kazekage e antigo Jinchūriki do Shukaku.",
      imagem: gaara,
    },
    {
      id: 6,
      nome: "Kunai",
      categoria: "arma",
      descrição:
        "Lâmina ninja versátil usada para combate próximo ou arremesso.",
      imagem: kunai,
    },
    {
      id: 7,
      nome: "Shuriken",
      categoria: "arma",
      descrição:
        "Estrela de metal afiada usada para distração e ataques à distância.",
      imagem: shuriken,
    },
    {
      id: 8,
      nome: "Konohagakure",
      categoria: "aldeia",
      descrição: "A Vila Oculta da Folha, localizada no País do Fogo.",
      imagem: konohagakure,
    },
    {
      id: 9,
      nome: "Sharingan",
      categoria: "kekkei-genkai",
      descrição: "Olho hipnótico do clã Uchiha que permite prever movimentos.",
      imagem: sharingan,
    },
    {
      id: 10,
      nome: "Rasengan",
      categoria: "jutsu",
      descrição: "Esfera de chakra rotativo concentrado na palma da mão.",
      imagem: rasengan,
    },
    {
      id: 11,
      nome: "Itachi Uchiha",
      categoria: "personagem",
      descrição: "Prodígio do clã Uchiha que operou nas sombras pela paz.",
      imagem: itachi,
    },
    {
      id: 12,
      nome: "Jiraiya",
      categoria: "personagem",
      descrição: "Um dos Três Sannin Lendários e mestre de Naruto.",
      imagem: jiraya,
    },
    {
      id: 13,
      nome: "Chidori",
      categoria: "jutsu",
      descrição: "Relâmpago concentrado na mão que produz som de mil pássaros.",
      imagem: chidori,
    },
    {
      id: 14,
      nome: "Samehada",
      categoria: "arma",
      descrição: "Espada viva que absorve chakra, usada por Kisame Hoshigaki.",
      imagem: samehada,
    },
    {
      id: 15,
      nome: "Sunagakure",
      categoria: "aldeia",
      descrição: "A Vila Oculta da Areia, localizada no País do Vento.",
      imagem: sunagakure,
    },
    {
      id: 16,
      nome: "Byakugan",
      categoria: "kekkei-genkai",
      descrição: "Olho branco do clã Hyūga que concede visão de 360 graus.",
      imagem: byakugan,
    },
    {
      id: 17,
      nome: "Madara Uchiha",
      categoria: "personagem",
      descrição: "Líder lendário dos Uchiha e um dos fundadores de Konoha.",
      imagem: madara,
    },
    {
      id: 18,
      nome: "Pain",
      categoria: "personagem",
      descrição: "Líder da Akatsuki que busca a paz através da dor.",
      imagem: pain,
    },
    {
      id: 19,
      nome: "Amaterasu",
      categoria: "jutsu",
      descrição:
        "Chamas negras inextinguíveis disparadas pelo Mangekyō Sharingan.",
      imagem: amaterasu,
    },
    {
      id: 20,
      nome: "Pergaminho de Invocação",
      categoria: "arma",
      descrição: "Item usado para selar objetos ou invocar criaturas.",
      imagem: invocacao,
    },
    {
      id: 21,
      nome: "Kirigakure",
      categoria: "aldeia",
      descrição: "A Vila Oculta da Névoa, lar dos Sete Espadachins Lendários.",
      imagem: kirikagure,
    },
    {
      id: 22,
      nome: "Rinnegan",
      categoria: "kekkei-genkai",
      descrição:
        "O mais nobre dos 'Três Grandes Dōjutsu', portado pelo Sábio dos Seis Caminhos.",
      imagem: rinnegan,
    },
    {
      id: 23,
      nome: "Orochimaru",
      categoria: "personagem",
      descrição:
        "Sannin desertor em busca da imortalidade e do conhecimento total.",
      imagem: orochinho,
    },
    {
      id: 24,
      nome: "Kubikiribōchō",
      categoria: "arma",
      descrição:
        "A enorme Lâmina do Executor que se regenera com o sangue das vítimas.",
      imagem: kubikiribocho,
    },
    {
      id: 25,
      nome: "Kumogakure",
      categoria: "aldeia",
      descrição:
        "A Vila Oculta da Nuvem, situada em altas montanhas no País do Trovão.",
      imagem: kumogakure,
    },
    {
      id: 26,
      nome: "Tsunade Senju",
      categoria: "personagem",
      descrição:
        "Quinta Hokage, neta do Primeiro e maior ninja médica do mundo.",
      imagem: tsunade,
    },
    {
      id: 27,
      nome: "Kotoamatsukami",
      categoria: "jutsu",
      descrição: "Poderoso genjutsu do Mangekyō Sharingan de Shisui Uchiha.",
      imagem: kotoamatsukami,
    },
    {
      id: 28,
      nome: "Mokuton",
      categoria: "kekkei-genkai",
      descrição:
        "Liberação de Madeira, técnica única do Primeiro Hokage, Hashirama Senju.",
      imagem: mokuton,
    },
    {
      id: 29,
      nome: "Iwagakure",
      categoria: "aldeia",
      descrição: "A Vila Oculta da Pedra, localizada no País da Terra.",
      imagem: iwagakure,
    },
    {
      id: 30,
      nome: "Fueton: Rasenshuriken",
      categoria: "jutsu",
      descrição: "A evolução do Rasengan que utiliza a natureza de vento.",
      imagem: rasenshuriken,
    },
  ];
}

export default getShinobiDex;