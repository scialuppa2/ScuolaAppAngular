import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  @Input() sTitoloSection:string;
  @Input() sTestoSection:string;
  @Input() sTestoLinkSection:string;

  sTitoloS="nd";
  sTestoS="nd";
  sTestoLinkS="nd";

  constructor(){
    this.sTitoloSection = 'null';
    this.sTestoSection = 'null';
    this.sTestoLinkSection = 'null';
  }

  ngOnInit() {
    if(this.sTitoloSection!="null")
    this.sTitoloS = this.sTitoloSection;
    if(this.sTestoSection!="null")
      this.sTestoS = this.sTestoSection;
    if(this.sTestoLinkSection!="null")
      this.sTestoLinkS = this.sTestoLinkSection;
  }

}
