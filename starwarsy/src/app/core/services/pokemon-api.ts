import { Service } from '@angular/core';

const PG_API = 'https://pokeapi.co/api/v2/';

@Service()
export class PokemonApi {
    private http = inject(HttpClient);
    onGetPokemon(index: number): Observable<Pokemon> {
       return this.http.get<Pokemon>(`${PG_API}pokemon/${index}`);
    }

    onGetPokemonList(): Observable<PokemonList> {
        return this.http.get<PokemonList>(`${PG_API}pokemon?limit=20&offset=0`);
    }
}