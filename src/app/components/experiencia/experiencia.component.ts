import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Experiencia } from '../../models/experiencia.interface';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienciaComponent {
  // Lista com os marcos reais da sua trajetória em ADS
  experiencias = signal<Experiencia[]>([
    {
      id: 1,
      periodo: '2026 — 2029 (Previsão)',
      titulo: 'Análise e Desenvolvimento de Sistemas (ADS)',
      instituicao: 'Centro Universitário Ateneu (UniAteneu)',
      descricao:
        'Graduação voltada para engenharia de software, modelagem de sistemas, arquitetura de dados e desenvolvimento de aplicações modernas.',
      tipo: 'formacao',
      badge: 'Graduação',
    },
    {
      id: 2,
      periodo: '2026',
      titulo: 'Currículo Digital Interativo',
      instituicao: 'Projeto Prático Autoral',
      descricao:
        'Aplicação web construída do zero com Angular 22, TypeScript estrito, SCSS com Design Tokens, Signals e arquitetura modular em Bento Grid.',
      tipo: 'projeto',
      badge: 'Projeto Prático',
    },
    {
      id: 3,
      periodo: '2026',
      titulo: 'Imersão em Desenvolvimento de Software',
      instituicao: 'Estudos Contínuos & Prática Autônoma',
      descricao:
        'Dedicação diária aos fundamentos da programação, controle de versão com Git, semântica web e tecnologias do ecossistema frontend.',
      tipo: 'estudos',
      badge: 'Em Evolução',
    },
  ]);
}
