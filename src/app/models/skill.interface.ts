// 1. Union Type: define os únicos valores aceitos para as categorias
export type CategoriaSkill = 'Frontend' | 'Ferramentas' | 'Fundamentos';

// 2. Interface: o contrato que toda Skill deve seguir
export interface Skill {
  nome: string;
  categoria: CategoriaSkill;
}
