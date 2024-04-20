import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getByUrl(url: string) {
    return this.http.get(url);
  }

  public getPokemons() {
    return this.http.get(`${api}/pokemon`)
  }
}