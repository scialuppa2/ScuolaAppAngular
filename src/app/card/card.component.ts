import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() sIdCard: number;
  @Input() sTitoloCard:string;
  @Input() sImgCard:string;
  @Input() sTestoCard:string;
  @Input() sTestoLinkCard:string;
  @Input() sPathCard:string;


  sIdC=0;
  sTitoloC="nd";
  sImgC="nd";
  sTestoC="nd";
  sTestoLinkC="nd";
  sPathC="nd";


  constructor(){
    this.sIdCard = 0;
    this.sTitoloCard = 'null';
    this.sImgCard = 'null';
    this.sTestoCard = 'null';
    this.sTestoLinkCard = 'null';
    this.sPathCard = 'null';
  }

  ngOnInit() {
    if(this.sIdCard!=0)
      this.sIdC = this.sIdCard;
    if(this.sTitoloCard!="null")
    this.sTitoloC = this.sTitoloCard;
    if(this.sImgCard!="null")
      this.sImgC = this.sImgCard;
    if(this.sTestoCard!="null")
      this.sTestoC = this.sTestoCard;
    if(this.sTestoLinkCard!="null")
      this.sTestoLinkC = this.sTestoLinkCard;
    if(this.sPathCard!="null")
      this.sPathC = this.sPathCard;
  }
}
