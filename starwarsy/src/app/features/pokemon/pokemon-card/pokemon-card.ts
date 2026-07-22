import { Component, inject, input, OnInit } from '@angular/core';
import { PokemonGallery } from '../../../core/services/pokemon-gallery';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
})
export class PokemonCard implements OnInit{
  private pokemonGallery = inject(PokemonGallery);
  name = input<string>('');
  imgUrl: string = '';

  ngOnInit(): void {
    this.imgUrl = this.pokemonGallery.onGenerateLinkBasedName(this.name);
}
}