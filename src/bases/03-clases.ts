import axios from "axios";
import { PokeapiResponse, Move } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    // public id: number;
    // public name: string;

    get imageUrl(): string {
        return `https://pokemon.co/${ this.id }.jpg`;
    }

    constructor(public readonly  id: number, public name: string) {
    }
    
    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMovies(): Promise<Move[]> {
        // const moves = 10;

        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        console.log(data.moves[0].move);
        

        return data.moves;
    }
}

export const charmander = new Pokemon( 4, 'Charmander' );

// console.log(charmander.getMovies());

charmander.getMovies();