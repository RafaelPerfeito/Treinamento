import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes() : Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>('https://treinamento-505d8.firebaseio.com/lista.json');
  }
}
