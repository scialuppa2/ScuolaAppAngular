import { Injectable } from '@angular/core';
import { CategoriaUtente } from './categoria-utente';

@Injectable({
  providedIn: 'root'
})
export class GetCategorieService {

  ElencoCategorie: CategoriaUtente[] = [
    {
      id:1,
      nomeCat: "Docenti",
      descrCat: "Sezione dedicata ai docenti per la gestione delle loro classi",
      photo: "assets/docenti.png",
      linkCat: "Accedi"
    },
    {
      id:2,
      nomeCat: "Segreteria",
      descrCat: "Sezione dedicata agli amministratori per la gestione della scuola",
      photo: "assets/admin.png",
      linkCat: "Accedi"
    },
    {
      id:3,
      nomeCat: "Allievi",
      descrCat: "Sezione dedicata agli allievi per la prenotazione delle interrogazioni",
      photo: "assets/studenti.png",
      linkCat: "Accedi"
    },
    {
      id:4,
      nomeCat: "Famiglie",
      descrCat: "Sezione dedicata alle famiglie per la gestione delle loro classi",
      photo: "assets/family.png",
      linkCat: "Accedi"
    }
  ];

  constructor() { }

  getAllCategorie(): CategoriaUtente[]{
    return this.ElencoCategorie;
  }
}
