import { Component, inject, OnInit } from '@angular/core';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { PokemonApi } from '../../../core/services/pokemon-api';
import { tap } from 'rxjs';
import { PokemonListDTO } from '../../../core/models/character';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCard],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList implements OnInit{
  private pokemonApi = inject(PokemonApi);

  pokemons: PokemonListDTO|undefined;

  ngOnInit(): void {
    this.pokemonApi.onGetPokemonList().pipe(
      tap((data: PokemonListDTO) => {
        this.pokemons = data;
        console.log(data);
      })
    ).subscribe();
}
}