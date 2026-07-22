export interface Character {
    name: string;
    height: string;
    hair_color: string;
    birth_year: string;
    gender: string;
    films: string[];
    vehicles: string[];
    starships: string[];
}
export type Pokemon = {
    name: string;
    height: string;
    weight: number;
}

export interface PokemonList {
    result: {
        name: string;
        url: string;        
    }
}
