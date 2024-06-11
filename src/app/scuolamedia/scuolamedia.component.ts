import { Component, inject } from '@angular/core';
import { GetCategorieService } from '../services/get-categorie.service';
import { CategoriaUtente } from '../interfaces/categoria-utente';
import { CardComponent } from '../card/card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-scuolamedia',
  standalone: true,
  templateUrl: './scuolamedia.component.html',
  imports: [CardComponent, NgFor, NgIf],
  styleUrls: ['./scuolamedia.component.css'],
})
export class ScuolamediaComponent {
  ListaCategorie: CategoriaUtente[] = [];
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);

  constructor() {
    this.GetCategorieServiceInst.getAllCategorie(2)
    .then((ListaCategorie: CategoriaUtente[]) => {
        this.ListaCategorie = ListaCategorie;
      }
    );
  }

  
}
