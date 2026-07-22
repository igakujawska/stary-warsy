import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterCard } from './features/characters/character-card/character-card';
import { PokemonList } from './features/pokemon/pokemon-list/pokemon-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharacterCard, PokemonList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('starwarsy');
}
