import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetCategorieService } from '../services/get-categorie.service';
import { CategoriaUtente } from '../interfaces/categoria-utente';
import { CardComponent } from '../card/card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-scuolaelementare',
  standalone: true,
  templateUrl: './scuolaelementare.component.html',
  imports: [CardComponent, NgFor, NgIf, RouterOutlet],
  styleUrls: ['./scuolaelementare.component.css'],
})
export class ScuolaelementareComponent {  
  ListaCategorie: CategoriaUtente[] = [];
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);

  constructor() {
    this.GetCategorieServiceInst.getAllCategorie(1)
    .then((ListaCategorie: CategoriaUtente[]) => {
        this.ListaCategorie = ListaCategorie;
      }
    );
  }

  
}
