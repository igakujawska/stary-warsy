import { Component, inject, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { StarWarsApi } from '../../../core/services/star-wars-api';
import { Character } from '../../../core/models/character';

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
})
export class CharacterCard implements OnInit{
  private starWarsApi = inject(StarWarsApi);

  public character: Character|undefined;

  ngOnInit(): void {
    this.onGetData();
  }

  onGetData(): void {
    this.starWarsApi.onGetCharacter().pipe(
      tap(data => {
        this.character = data;
        console.log(data)

      })
    ).subscribe()
}}