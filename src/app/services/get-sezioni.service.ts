import { Injectable } from '@angular/core';
import { SezioneScuola } from '../sezione-scuola';

@Injectable({
  providedIn: 'root'
})
export class GetSezioniService {

  ElencoSezioni: SezioneScuola[] = [
    {
      id:1,
      nomeSez: "Elementari",
      descrSez: "Sezione dedicata alla scuola elementare",
      linkSez: "scuolaelementare",
    },
    {
        id:2,
        nomeSez: "Medie",
        descrSez: "Sezione dedicata alla scuola media",
        linkSez: "scuolamedia"
      },
      {
        id:1,
        nomeSez: "Liceo Scientifico",
        descrSez: "Sezione dedicata al liceo scientifico",
        linkSez: "liceo"
      },
    
  ];

  constructor() { }

  getAllSezioni(): SezioneScuola[]{
    return this.ElencoSezioni;
  }
}
