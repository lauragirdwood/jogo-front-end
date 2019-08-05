import {Resposta} from "./resposta";

export class Pergunta {

  id: number;
  respostas: Resposta[];
  numero: number;
  descricao: string;
  valorPontuacao: number;
}
