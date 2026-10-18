import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  // Signals que guardam as informações do perfil de Alan Victor
  nome = signal('Alan Victor');
  papel = signal('Estudante de ADS & Desenvolvedor Web');
  bio = signal('Buscando sempre novos aprendizados em desenvolvimento na área de Tecnologia!');
  avatarUrl = signal('https://api.dicebear.com/9.x/bottts/svg?seed=AlanVictor');
}
