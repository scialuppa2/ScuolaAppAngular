import { Component, inject } from '@angular/core';
import { SezioneScuola } from '../interfaces/sezione-scuola';
import { GetSezioniService } from '../services/get-sezioni.service';
import { SectionComponent } from '../section/section.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SectionComponent, NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  titleHero= "Benvenuti nella scuola M.Azzarita";
  photoHero= "https://d1r24rnv05eqx4.cloudfront.net/uploads/vr/5fecfa7c86b4ff32a304dbe2/asset/1610396376-0.jpg"

  ListaSezioni: SezioneScuola[]=[];
  GetCategorieServiceInst: GetSezioniService = inject(GetSezioniService);

  constructor() {
    this.ListaSezioni = this.GetCategorieServiceInst.getAllSezioni();
  }

  
}
