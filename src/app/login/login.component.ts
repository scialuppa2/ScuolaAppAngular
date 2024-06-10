import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CategoriaUtente } from '../categoria-utente';
import { GetCategorieService } from '../services/get-categorie.service';
import { GetAllieviService } from '../services/get-allievi.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Utente } from '../utente';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  idInserito: number = -1;
  titolo: string = '';
  
  email: string = '';
  password: string = '';

  uMioUtente: Utente = {
    mailUtente: '',
    passwordUtente: '',
  };

  categoria: CategoriaUtente | undefined;
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);
  GetAllieviServiceInst: GetAllieviService = inject(GetAllieviService);

  constructor(private route: ActivatedRoute, private router: Router) {}

  async ngOnInit() {
    this.idInserito = this.route.snapshot.params['id'];
    this.titolo = this.route.snapshot.params['titolo'];
    await this.GetCategorieServiceInst.getAllCategorie(this.idInserito);
    this.categoria = this.GetCategorieServiceInst.getCategoriaById(this.idInserito);
    console.log(this.categoria?.nomeCat);
  }

  async submitForm() {
    this.uMioUtente.mailUtente = this.email;
    this.uMioUtente.passwordUtente = this.password;
    await this.GetAllieviServiceInst.getAllAllievi(this.uMioUtente);
    this.router.navigateByUrl('/allievi');
  }
}
