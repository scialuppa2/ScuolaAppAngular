import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaUtente } from '../categoria-utente';
import { GetCategorieService } from '../services/get-categorie.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  idInserito: number = -1;
  titolo: string = '';

  categoria: CategoriaUtente | undefined;
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.idInserito = this.route.snapshot.params['id'];
    this.titolo = this.route.snapshot.params['titolo'];
    await this.GetCategorieServiceInst.getAllCategorie(this.idInserito);
    this.categoria = this.GetCategorieServiceInst.getCategoriaById(
      this.idInserito
    );
  }
}
