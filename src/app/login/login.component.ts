import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CategoriaUtente } from '../interfaces/categoria-utente';
import { GetCategorieService } from '../services/get-categorie.service';
import { GetAllieviService } from '../services/get-allievi.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Utente } from '../interfaces/utente';

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
  
  nome_utente: string = '';
  password: string = '';
  errorMessage: string = '';

  uMioUtente: Utente = {
    mailUtente: '',
    passwordUtente: '',
  };

  categoria: CategoriaUtente | undefined;
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);
  GetAllieviServiceInst: GetAllieviService = inject(GetAllieviService);

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {}

  async ngOnInit() {
    this.idInserito = this.route.snapshot.params['id'];
    this.titolo = this.route.snapshot.params['titolo'];
    await this.GetCategorieServiceInst.getAllCategorie(this.idInserito);
    this.categoria = this.GetCategorieServiceInst.getCategoriaById(this.idInserito);
    console.log(this.categoria?.nomeCat);
  }

  async submitForm() {
    try {
      const result = await this.authService.login(this.nome_utente, this.password);
      console.log('Login successful', result);
      // Reindirizza al componente Allievi dopo il login
      this.router.navigate(['/allievi']);
    } catch (error) {
      this.errorMessage = 'Login fallito. Per favore, controlla le tue credenziali.';
    }
  }
}
