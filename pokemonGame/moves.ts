import { Move } from "./pokemon.model";

const moves: { [key: string]: Move } = {
    Thunderbolt: {
        name : "Thunderbolt",
        type: "Electric",
        power: 90,
        accuracy: 100,
        specialAttack: true
    },
    IceBeam: {
        name: "Ice Beam",
        type: "Ice",
        power: 95,
        accuracy: 100,
        specialAttack: true
    },
    Earthquake: {
        name: "Earthquake",
        type: "ground",
        power: 100,
        accuracy: 100,
        specialAttack: false
    },
    Bubble: {
        name: "Bubble",
        type: "Water",
        power: 40,
        accuracy: 100,
        specialAttack: false
    },
    WaterGun: {
        name: "Water Gun",
        type: "Water",
        power: 40,
        accuracy: 100,
        specialAttack: false
    },
        WaterPulse: {
        name: "Water Pulse",
        type: "Water",
        power: 60,
        accuracy: 100,
        specialAttack: true
    },
    HydroPump: {
        name: "Hydro Pump",
        type: "Water",
        power: 110,
        accuracy: 80,
        specialAttack: true
    },
    FlameThrower: {
        name: "Flame Thrower",
        type: "Fire",
        power: 90,
        accuracy: 100,
        specialAttack: true
    },
    FireBlast: {
        name: "Fire Blast",
        type: "Fire",
        power: 110,
        accuracy: 85,
        specialAttack: true
    },
    FirePunch: {
        name: "Fire Punch",
        type: "Fire",
        power: 75,
        accuracy: 100,
        specialAttack: false
    },
    CrocoCrunch: {
        name: "Croco Crunch",
        type: "Water",
        power: 80,
        accuracy: 100,
        specialAttack: false
    },
    FlameFang: {
        name: "Flame Fang",
        type: "Fire",
        power: 95,
        accuracy: 95,
        specialAttack: false
    },
    FlameTail: {
        name: "Flame Tail",
        type: "Fire",
        power: 60,
        accuracy: 100,
        specialAttack: false
    },
    Inferno: {
        name: "Inferno",
        type: "Fire",
        power: 150,
        accuracy: 50,
        specialAttack: true
    },
    ElectrifiedScales: {
        name: "Electrified Scales",
        type: "Electric",
        power: 85,
        accuracy: 100,
        specialAttack: false
    }
};

export class Moves {
    public static getMoves(moveNames: string[]): Move[] {
        const selectedMoves: Move[] = [];

        for (const moveName of moveNames) {
            selectedMoves.push(moves[moveName]);
        }

        return selectedMoves;
    }
}
