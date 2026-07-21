import { HttpClient } from '@angular/common/http';
import { Service } from '@angular/core';
  const SW_API = 'https://swapi.dev/api/';
@Service()
export class StarWarsApi {
  
    private http = inject(HttpClient);

}
