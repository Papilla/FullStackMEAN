import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  pokemons: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPokemonAll();
  }


  getPokemonAll() {
    this.apiService.getPokemons().subscribe(resp => {
      this.pokemons = resp;
      console.log(this.pokemons);
    });
  }
}
