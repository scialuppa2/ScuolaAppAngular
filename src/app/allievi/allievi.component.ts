import { Component, OnInit, inject } from '@angular/core';
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
  ElencoAllievi: Allievo[] = [];
  GetAllieviServiceInst: GetAllieviService = inject(GetAllieviService);

  ngOnInit() {
    this.ElencoAllievi = this.GetAllieviServiceInst.getElencoAllievi();
  }
}
