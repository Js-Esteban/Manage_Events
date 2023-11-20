import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reserva } from '../model/reserva.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getItems(): Observable<reserva[]> {
    return this.http.get<reserva[]>(`${this.apiUrl}/reservas`);
  }

  addItem(item: reserva): Observable<reserva> {
    return this.http.post<reserva>(`http://localhost:3000/reserva/agregar`, item);
  }
}
