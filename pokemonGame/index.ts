import { Move, Pokemon } from './pokemon.model';
import { boitatin, iara } from './exported-pokemons'
import { Effectiveness, SuperEffective } from './type';

class Battle {
    pokemon1: Pokemon;
    pokemon2: Pokemon;
  
    constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
      this.pokemon1 = pokemon1;
      this.pokemon2 = pokemon2;
    }
  
    // Function to calculate the damage dealt by an attack
    calculateDamage(attacker: Pokemon, defender: Pokemon, move: Move) {
      // Determine the attack and defense stats to use
      const attackStat = move.specialAttack ? attacker.specialAttack : attacker.attack;
      const defenseStat = move.specialAttack ? defender.specialDefense : defender.defense;
      const effective: Effectiveness = SuperEffective.calculateDamage(move.type, defender.type);
      
      alert(SuperEffective.getText(effective));
      //const effective = 1;
      // Calculate the damage dealt
      const damage = Math.floor((((2 * attacker.level / 5 + 2) * attackStat * move.power / defenseStat) / 50) + 2) * effective;
  
      // Return the damage dealt
      return damage;
    }
  
    // Function to simulate a turn in the battle
    battleTurn(attacker: Pokemon, defender: Pokemon): void {
      // Prompt the user to select an attack type
      const attackType = prompt(`
         You using ${attacker.name}, is a [${attacker.type}] type topmon. 
         Your current HP is: [${attacker.life}].

         ${defender.name}, is your opponent, it is a [${defender.type}].
         Your current HP is: [${defender.life}].

         ${attacker.name}, choose an attack:
        1. ${attacker.moves[0].name} [${attacker.moves[0].type}]
        2. ${attacker.moves[1].name} [${attacker.moves[1].type}]
        3. ${attacker.moves[2].name} [${attacker.moves[2].type}]
        4. ${attacker.moves[3].name} [${attacker.moves[3].type}]
        `
      );
  
      // Calculate the damage dealt by the attacker's attack
      const attackDamage = this.calculateDamage(attacker, defender, attacker.moves[Number(attackType) - 1]);
  
      // Subtract the damage dealt from the defender's health
      defender.life -= attackDamage;
  
      if(attacker.moves.length > 0 || defender.moves.length > 0) {
        alert(`${attacker.name} attacked ${defender.name} with move ${attacker.moves[Number(attackType) - 1].name} and cause ${attackDamage} damage.`);
      }
    }
  
    // Function to simulate a full battle
    battle() {  
      // Set the starting level for each Pokemon
      this.pokemon1.level = 50;
      this.pokemon2.level = 50;
  
      // Simulate the battle until one Pokemon's health reaches 0
      while (this.pokemon1.life > 0 && this.pokemon2.life > 0) {
        // Simulate a turn in the battle
        this.battleTurn(this.pokemon1, this.pokemon2);
      
  
        // If Pokemon 2 is not defeated, have it attack next
        if (this.pokemon2.life > 0) {
          this.battleTurn(this.pokemon2, this.pokemon1);
        }
      }
  
      // Determine the winner of the battle
      let winner: Pokemon;
      if (this.pokemon1.life <= 0) {
        winner = this.pokemon2;
      } else {
        winner = this.pokemon1;
      }
  
      // Print the winner of the battle
      alert(`${winner.name} wins the battle!`);
    }
  }
  
  const battle = new Battle(boitatin, iara);
  battle.battle();