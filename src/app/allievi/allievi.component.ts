import { Component, OnInit } from '@angular/core';
import { GetAllieviService } from '../services/get-allievi.service';
import { Allievo } from '../interfaces/allievo';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-allievi',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './allievi.component.html',
  styleUrls: ['./allievi.component.css']
})
export class AllieviComponent implements OnInit {
  allievi: Allievo[] = [];

  constructor(private getAllieviService: GetAllieviService) { }

  async ngOnInit() {
    this.allievi = await this.getAllieviService.getAllAllievi();
  }
}




