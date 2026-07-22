import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Character } from '../models/character';
import { Observable } from 'rxjs';

const SW_API = 'https://swapi.dev/api/';

@Service()
export class StarWarsApi {
    private http = inject(HttpClient);

    onGetCharacter(): Observable<Character> {
       return this.http.get<Character>(`${SW_API}people/1`);
    }
}

