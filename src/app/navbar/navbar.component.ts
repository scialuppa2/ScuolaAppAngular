import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  @Input() sTestoNavbar:string;
  @Input() sColoreNavbar:string;

  titleNavbar = "Mc Donalds";
  logoNavbar = "assets/LogoScuola.png"

  constructor() {
    this.sTestoNavbar = "null"
    this.sColoreNavbar = "null"
  }

  ngOnInit() {
    if(this.sTestoNavbar!="null")
    this.titleNavbar = this.sTestoNavbar;
  }
}
