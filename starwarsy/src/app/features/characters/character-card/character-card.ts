import { Component, inject } from '@angular/core';
import { tap } from 'rxjs';
import{StarWarsApi} from '../../../core/services'

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
})
export class CharacterCard {
  private starWarsApi = inject(this.StarWarsApi);

  onGetData(): void {
    this.starWarsApi.onGetCharacter().pipe(
      tap(character => {console.log(character)

      })
    ).subscribe()
}
