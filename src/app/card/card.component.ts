import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() sTitoloCard:string;
  @Input() sImgCard:string;
  @Input() sTestoCard:string;
  @Input() sTestoLinkCard:string;

  sTitoloC="nd";
  sImgC="nd";
  sTestoC="nd";
  sTestoLinkC="nd";


  constructor(){
    this.sTitoloCard = 'null';
    this.sImgCard = 'null';
    this.sTestoCard = 'null';
    this.sTestoLinkCard = 'null';
  }

  ngOnInit() {
    if(this.sTitoloCard!="null")
    this.sTitoloC = this.sTitoloCard;
    if(this.sImgCard!="null")
      this.sImgC = this.sImgCard;
    if(this.sTestoCard!="null")
      this.sTestoC = this.sTestoCard;
    if(this.sTestoLinkCard!="null")
      this.sTestoLinkC = this.sTestoLinkCard;
  }
}
