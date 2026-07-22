import { Service } from '@angular/core';

@Service()
export class PokemonGallery {
    onGenerateLinkBAsedName(name: string): string{
        return`https://img.pokemondb.net/artwork/large/${name}.jpg`
    }
}
