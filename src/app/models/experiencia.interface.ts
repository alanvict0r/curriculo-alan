export type TipoExperiencia = 'formacao' | 'projeto' | 'estudos';

export interface Experiencia {
  id: number;
  periodo: string;
  titulo: string;
  instituicao: string;
  descricao: string;
  tipo: TipoExperiencia;
  badge: string;
}
