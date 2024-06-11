import { Injectable } from '@angular/core';
import { Allievo } from '../interfaces/allievo';

@Injectable({
  providedIn: 'root'
})
export class GetAllieviService {
  private url = 'http://localhost:8080/getallievi';
  ElencoAllievi: Allievo[] = [];

  constructor() { }

  async getAllAllievi(): Promise<Allievo[]> {
    try {
      const response = await fetch(this.url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Errore durante il recupero degli allievi');
      }

      this.ElencoAllievi = await response.json();
      return this.ElencoAllievi;
    } catch (error) {
      console.error('Si è verificato un errore:', error);
      return [];
    }
  }

  getElencoAllievi(): Allievo[] {
    return this.ElencoAllievi;
  }
}
