import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaUtente } from './categoria-utente';

@Injectable({
  providedIn: 'root'
})
export class GetCategorieService {

  constructor() {}

  url = "http://localhost:8080/scuola/1";

  async getAllCategorie(): Promise<CategoriaUtente[]> { 
    const data = await fetch(this.url); 
    return await data.json() ?? []; 
  }
}
