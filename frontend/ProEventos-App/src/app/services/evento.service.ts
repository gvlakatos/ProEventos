import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable(
  //{providedIn: 'root'} // Maneira de realizar injeção do serviço - foi trocada pela injeção no app.module
)
export class EventoService {

baseURL = 'https://localhost:5001/api/eventos';

constructor(private http: HttpClient) { }

public getEventos(): Observable<Evento[]>{
  return this.http.get<Evento[]>(this.baseURL)
}

public getEventosByTema(tema: string): Observable<Evento[]>{
  return this.http.get<Evento[]>(`${this.baseURL}/tema/${tema}`)
}

public getEventoById(id: number): Observable<Evento>{
  return this.http.get<Evento>(`${this.baseURL}/${id}`)
}
}
