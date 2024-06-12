import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/login';

  constructor() {}

  async login(nome_utente: string, password: string): Promise<any> {
    try {
      const response = await fetch(this.loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome_utente, password }),
      });

      if (!response.ok) {
        throw new Error('Errore durante il login');
      }

      const data = await response.json();

      // Salva il token nella memoria locale
      localStorage.setItem('token', data.token);

      return data;
    } catch (error) {
      console.error('Si è verificato un errore:', error);
      throw error;
    }
  }

  logout(): void {
    // Rimuovi il token dalla memoria locale al logout
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    // Recupera il token dalla memoria locale
    return localStorage.getItem('token');
  }
}
