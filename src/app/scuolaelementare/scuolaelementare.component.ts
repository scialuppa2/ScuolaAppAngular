import { Component, inject } from '@angular/core';
import { CategoriaUtente } from '../categoria-utente';
import { GetCategorieService } from '../get-categorie.service';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-scuolaelementare',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './scuolaelementare.component.html',
  styleUrl: './scuolaelementare.component.css'
})
export class ScuolaelementareComponent {

  ListaCategorie: CategoriaUtente[]=[];
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);

  constructor() {
    this.ListaCategorie = this.GetCategorieServiceInst.getAllCategorie();
  }

}
