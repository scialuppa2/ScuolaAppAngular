import { Component, OnInit } from '@angular/core';
import { GetAllieviService } from '../services/get-allievi.service';
import { Allievo } from '../allievo';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-allievi',
  standalone: true,
  imports: [NgFor],
  templateUrl: './allievi.component.html',
  styleUrl: './allievi.component.css'
})
export class AllieviComponent implements OnInit {
  allievi: Allievo[] = [];

  constructor(private allieviService: GetAllieviService) { }

  ngOnInit(): void {
    this.allieviService.getAllievi().subscribe(
      data => {
        this.allievi = data;
        console.log('Dati allievi:', this.allievi);
      },
      error => {
        console.error('Errore durante il recupero dei dati:', error);
      }
    );
  }
}
