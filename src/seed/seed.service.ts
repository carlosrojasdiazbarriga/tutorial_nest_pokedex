import { PokemonService } from './../pokemon/pokemon.service';
import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(private readonly pokemonService: PokemonService) {}
  async populateDB() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=650');
    const data: PokeResponse = await response.json();
    const dataFormatted = data.results.map(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      return { name, no };
    });

    return this.pokemonService.createForSeed(dataFormatted);
  }
}
