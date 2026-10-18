import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
  // Signal com o tema ativo (inicia no Dark Mode)
  temaAtual = signal<'dark' | 'light'>('dark');

  alternarTema(): void {
    const novoTema = this.temaAtual() === 'dark' ? 'light' : 'dark';
    this.temaAtual.set(novoTema);
    // Aplica o data-theme na tag <html> para ativar as variáveis CSS
    document.documentElement.setAttribute('data-theme', novoTema);
  }
}
