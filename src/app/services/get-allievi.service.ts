import { Injectable } from '@angular/core';
import { Allievo } from '../allievo';
import { Utente } from '../utente';
@Injectable({
  providedIn: 'root'
})
export class GetAllieviService {
  private url = 'http://localhost:8080/getallievi';
  ElencoAllievi: Allievo[] = [];

  constructor() { }

  async getAllAllievi(Docente:Utente): Promise<Allievo[]>{
    const data = await fetch(this.url, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(Docente)
    });
    if (!data.ok) {
      throw new Error('Errore durante il recupero degli allievi');
    }

    const allievi = await data.json();
    this.ElencoAllievi = allievi;
    console.log(allievi)
    return allievi;
  } catch (error:any) {
    console.error('Si è verificato un errore:', error);
    return [];
  }

  getElencoAllievi(): Allievo[] {
    return this.ElencoAllievi;
  }
}
