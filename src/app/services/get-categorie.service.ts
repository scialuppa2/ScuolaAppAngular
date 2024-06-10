import { Injectable } from '@angular/core';
import { CategoriaUtente } from '../categoria-utente';

@Injectable({
  providedIn: 'root'
})
export class GetCategorieService {

  constructor() {}

  url = "http://localhost:8080/scuola/";
  ElencoCategorie:CategoriaUtente[] = [];

  async getAllCategorie(num:any): Promise<CategoriaUtente[]> { 
    const data = await fetch(this.url + num);
    this.ElencoCategorie = await data.json();
    console.log(this.ElencoCategorie);
    return this.ElencoCategorie ?? []; 
  }

  getCategoriaById(iId:Number):CategoriaUtente | undefined{
    if(this.ElencoCategorie.length==0)
      return undefined;
    else
    return this.ElencoCategorie.find(categoria => categoria.id==iId)
  }

  async getCategoriaById2(iId:Number):Promise<CategoriaUtente | undefined> {
    if(this.ElencoCategorie.length==0){
      console.log("Vettore vuoto")
      const data = await fetch(this.url + 1);
    this.ElencoCategorie = await data.json();
    console.log(this.ElencoCategorie);
    return this.ElencoCategorie.find(categoria => categoria.id==iId);
    } else{
      return this.ElencoCategorie.find(categoria => categoria.id==iId);
    }
  }

  async getAllCategorie2(num: number): Promise<CategoriaUtente[]> {
    try {
      const response = await fetch(this.url + num);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAllCategorie3(num: number): Promise<CategoriaUtente[]> {
    try {
      const response = await fetch(this.url + num);
      const data = await response.json();
      return new Promise<CategoriaUtente[]>((resolve, reject) => {
        resolve(data);
      });
    } catch (error) {
      return new Promise<CategoriaUtente[]>((resolve, reject) => {
        reject(error);
      });
    }
  }

  getAllCategorie4(num: number): Promise<CategoriaUtente[]> {
    return fetch(this.url + num)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => data as CategoriaUtente[])
      .catch(error => {
        // Gestione dell'errore
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
      });
  }
}
