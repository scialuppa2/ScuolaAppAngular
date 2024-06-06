import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllieviService {
  private apiUrl = 'http://localhost:8080/getallievi';

  constructor() { }

  getAllievi(): Observable<any[]> {
    return new Observable<any[]>(observer => {
      fetch(this.apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          console.error('An error occurred:', error);
          observer.error(error);
        });
    });
  }
}
