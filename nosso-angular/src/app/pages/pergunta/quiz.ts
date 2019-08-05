import {Pergunta} from "./pergunta";
import {Partida} from "./partida";

export class Quiz {
  id: number;
  perguntas: Pergunta;
  partidas: Partida;
  nome: string;
  tema: string;
}
