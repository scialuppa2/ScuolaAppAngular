import { Injectable } from '@angular/core';
import { CategoriaUtente } from '../categoria-utente';

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
