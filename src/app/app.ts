import { Component } from '@angular/core';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ContatoComponent } from './components/contato/contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ThemeToggleComponent,
    HeroComponent,
    SkillsComponent,
    ExperienciaComponent,
    ContatoComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
