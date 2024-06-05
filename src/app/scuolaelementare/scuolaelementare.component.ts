import { Component, inject } from '@angular/core';
import { GetCategorieService } from '../get-categorie.service';
import { CategoriaUtente } from '../categoria-utente';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-scuolaelementare',
  standalone: true,
  templateUrl: './scuolaelementare.component.html',
  imports: [CardComponent, NgFor],
  styleUrls: ['./scuolaelementare.component.css'],
})
export class ScuolaelementareComponent {
  ListaCategorie: CategoriaUtente[] = [];
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);

  constructor() {
    this.GetCategorieServiceInst.getAllCategorie().then(
      (ListaCategorie: CategoriaUtente[]) => {
        this.ListaCategorie = ListaCategorie;
      }
    );
  }
}
