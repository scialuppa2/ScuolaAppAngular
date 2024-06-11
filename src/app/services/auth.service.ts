import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}

  login(nome_utente: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { nome_utente, password });
  }
}
