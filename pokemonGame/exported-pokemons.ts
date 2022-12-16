
import { Moves } from './moves';
import { Pokemon, PokemonHelper } from './pokemon.model';

export const jacareco: Pokemon = PokemonHelper.calculateHP({
    name: "Jacareco",
    type: "Water",
    health: 120,
    attack: 80,
    defense: 75,
    specialAttack: 90,
    specialDefense: 85,
    speed: 70,
    level: 100,
    moves: Moves.getMoves(["Bubble", "CrocoCrunch", "WaterPulse", "HydroPump"]),
    life: 0
});
  
export const iara: Pokemon = PokemonHelper.calculateHP({
    name: "Iara",
    type: "Water",
    health: 72,
    attack: 95,
    defense: 67,
    specialAttack: 103,
    specialDefense: 71,
    speed: 122,
    level: 100,
    moves: Moves.getMoves(["Thunderbolt", "IceBeam", "WaterPulse", "HydroPump"]),
    life: 0
});
  
export const boitatin: Pokemon = PokemonHelper.calculateHP({
    name: "Boitatin",
    type: "Fire",
    health: 85,
    attack: 105,
    defense: 100,
    specialAttack: 79,
    specialDefense: 83,
    speed: 78,
    level: 100,
    moves: Moves.getMoves(["ElectrifiedScales", "Earthquake", "FlameFang", "Inferno"]),
    life: 0
});
