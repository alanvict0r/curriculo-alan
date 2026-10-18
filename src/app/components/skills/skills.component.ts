import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CategoriaSkill, Skill } from '../../models/skill.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  // 1. O filtro selecionado no momento (Estado de Origem)
  filtroAtivo = signal<string>('Todos');

  // 2. A lista das suas habilidades reais (Tipada rigorosamente com a interface Skill)
  skills = signal<Skill[]>([
    { nome: 'HTML5', categoria: 'Frontend' },
    { nome: 'CSS3', categoria: 'Frontend' },
    { nome: 'SCSS', categoria: 'Frontend' },
    { nome: 'JavaScript', categoria: 'Frontend' },
    { nome: 'TypeScript', categoria: 'Frontend' },
    { nome: 'Angular', categoria: 'Frontend' },
    { nome: 'Git', categoria: 'Ferramentas' },
    { nome: 'Lógica de Programação', categoria: 'Fundamentos' },
  ]);

  // 3. Categorias extraídas dinamicamente para os botões do filtro
  categorias = computed(() => {
    const cats = [...new Set(this.skills().map((s) => s.categoria))];
    return ['Todos', ...cats];
  });

  // 4. Lista filtrada calculada automaticamente (Estado Derivado)
  skillsFiltradas = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'Todos') {
      return this.skills();
    }
    return this.skills().filter((skill) => skill.categoria === filtro);
  });

  // 5. Método chamado ao clicar em um botão de filtro
  setFiltro(categoria: string): void {
    this.filtroAtivo.set(categoria);
  }
}
