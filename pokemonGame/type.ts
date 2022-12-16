type SuperEffectivePokemonTable = {
    [key: string]: string[];
}

const superEffective: SuperEffectivePokemonTable = {
    Grass: ["Water", "Ground", "Rock"],
    Fire: ["Grass", "Ice", "Bug", "Steel"],
    Water: ["Fire", "Ground", "Rock"],
    Electric: ["Water", "Flying"],
    Ice: ["Grass", "Ground", "Flying", "Dragon"],
    Fighting: ["Normal", "Ice", "Rock", "Dark", "Steel"],
    Poison: ["Grass", "Fairy"],
    Ground: ["Fire", "Electric", "Poison", "Rock", "Steel"],
    Flying: ["Grass", "Fighting", "Bug"],
    Psychic: ["Fighting", "Poison"],
    Bug: ["Grass", "Psychic", "Dark"],
    Rock: ["Fire", "Ice", "Flying", "Bug"],
    Ghost: ["Psychic", "Ghost"],
    Dragon: ["Dragon"],
    Dark: ["Psychic", "Ghost"],
    Steel: ["Ice", "Rock", "Fairy"],
    Fairy: ["Fighting", "Dragon", "Dark"]
}

const imunity: SuperEffectivePokemonTable = {
    Normal: ["Ghost"],
    Fighting: ["Ghost"],
    Flying: ["Ground"],
    Poison: ["Steel"],
    Ground: ["Flying"],
    Rock: ["None"],
    Bug: ["None"],
    Ghost: ["Normal", "Fighting"],
    Steel: ["Poison"],
    Fire: ["None"],
    Water: ["None"],
    Grass: ["None"],
    Electric: ["Ground"],
    Psychic: ["Dark"],
    Ice: ["None"],
    Dragon: ["None"],
    Dark: ["Psychic"],
    Fairy: ["None"]
}

const notVerryEffective: SuperEffectivePokemonTable = {
    Grass: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"],
    Fire: ["Water", "Dragon", "Rock", "Fire", "Steel"],
    Water: ["Electric", "Grass", "Dragon"],
    Electric: ["Electric", "Grass", "Dragon"],
    Ice: ["Fire", "Water", "Ice", "Steel"],
    Fighting: ["Poison", "Flying", "Psychic", "Bug", "Fairy"],
    Poison: ["Poison", "Ground", "Rock", "Ghost"],
    Ground: ["Grass", "Bug"],
    Flying: ["Electric", "Rock", "Steel"],
    Psychic: ["Psychic", "Steel"],
    Bug: ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"],
    Rock: ["Fighting", "Ground", "Steel"],
    Ghost: ["Dark"],
    Dragon: ["Steel"],
    Dark: ["Fighting", "Dark", "Fairy"],
    Steel: ["Fire", "Water", "Electric", "Steel"],
    Fairy: ["Fire", "Poison", "Steel"]
}

export const enum Effectiveness { 
    SuperEffective = 2, 
    Effective = 1,
    NotVerryEffective = 0.5, 
    Imunity = 0
};

export class SuperEffective {
    
    public static calculateDamage(attackType: string, damagedPokemonType: string): Effectiveness {
        if(superEffective[attackType] && superEffective[attackType].indexOf(damagedPokemonType) >= 0) {
            return Effectiveness.SuperEffective;
        }
        
        if(superEffective[attackType] && notVerryEffective[attackType].indexOf(damagedPokemonType) >= 0) {
            return Effectiveness.NotVerryEffective;
        }
    
        if(imunity[attackType] && imunity[attackType].indexOf(damagedPokemonType) >= 0) {
            return Effectiveness.Imunity;
        }
    
        return Effectiveness.Effective;
    }

    public static getText(effectiveness: Effectiveness): string {
        switch(effectiveness) { 
            case Effectiveness.SuperEffective: { 
               return 'Wooow It is super effective!!!'; 
            } 
            case Effectiveness.NotVerryEffective: { 
                return 'It is not verry effective!'; 
            }
            case Effectiveness.Imunity: { 
                return 'Has no effect.'; 
            } 
            default: { 
                return 'The damage was effective!'; 
            } 
         } 
    }
}

