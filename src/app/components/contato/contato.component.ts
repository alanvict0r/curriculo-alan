import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContatoComponent {
  email = signal('alanvictor098@gmail.com');
  whatsappUrl = signal('https://wa.me/5585985562413?text=Ol%C3%A1%20Alan,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!');
  githubUrl = signal('https://github.com/alanvict0r');

  // Signal que controla o feedback visual do botão de copiar
  copiado = signal(false);

  // Função assíncrona que interage com a Clipboard API do navegador
  async copiarEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email());
      this.copiado.set(true);
      // Reseta o estado após 2 segundos
      setTimeout(() => {
        this.copiado.set(false);
      }, 2000);
    } catch (err) {
      console.error('Falha ao copiar o e-mail: ', err);
    }
  }
}
