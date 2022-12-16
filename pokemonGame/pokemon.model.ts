// Define interface of move
export interface Move {
    name: string;
    type: string;
    power: number;
    accuracy: number;
    specialAttack: boolean;
}
  
// Define the Pokemon interface
export interface Pokemon {
    name: string;
    type: string;
    health: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    level: number;
    moves: Array<Move>;
    life: number;
}
  
export class PokemonHelper {
  
    public static calculateHP(pokemon: Pokemon): Pokemon {
      // Calculate the base HP of the Pokémon
      let baseHP = 10 + (2 * pokemon.health);

      // Calculate the level modifier
      let levelModifier = Math.floor(pokemon.level / 100) + 1;

      // Calculate the final HP of the Pokémon
      let finalHP = baseHP * levelModifier;
      pokemon.life = finalHP;

      return pokemon;
    }
}