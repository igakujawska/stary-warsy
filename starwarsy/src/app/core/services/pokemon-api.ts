import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon, PokemonListDTO } from '../models/character';
import { HttpClient } from '@angular/common/http';

const PG_API = 'https://pokeapi.co/api/v2/';

@Service()
export class PokemonApi {
    private http = inject(HttpClient);
    onGetPokemon(index: number): Observable<Pokemon> {
       return this.http.get<Pokemon>(`${PG_API}pokemon/${index}`);
    }

    onGetPokemonList(): Observable<PokemonListDTO> {
        return this.http.get<PokemonListDTO>(`${PG_API}pokemon?limit=20&offset=0`);
    }
}