// --------------ข้อ1-------------- 
enum gender {
    male = "male",
    female = "female"
}

// interface animalType {
//     name: string,
//     fly: boolean,
//     gender: gender,
//     leg: number,
//     swim: boolean
// }
// ----------หรือ----------
type animalType = {
    name: string,
    fly: boolean,
    gender: gender,
    leg: number,
    swim: boolean
}

const Animal1: animalType = {
    name: 'tiger',
    fly: false,
    gender: gender.male,
    leg: 4,
    swim: true
}

// --------------ข้อ2--------------
enum genderEnum {
    male = "male",
    female = "female"
}
type peopleType = {
    name: string;
    age: number;
    gender: genderEnum;
    hobbies: string[] | string
    job?: string
}

const People1: peopleType = {
    name: "Peter",
    age: 20,
    gender: genderEnum.male,
    hobbies: ['watch movie', 'swiming']
}
const People2: peopleType = {
    name: "Alex",
    age: 18,
    gender: genderEnum.female,
    hobbies: "play game",
    job: "doctor"
}
// --------------ข้อ3--------------
enum TypePokemon {
    Fire = "Fire",
    Flying = "Flying",
    Grass = "Grass"
}
type StatType = {
    armor: number,
    damage: number,
    hp: number,
    speef: number
}
type PokemonType = {
    name: string;
    gender: string;
    height: number;
    weight: number;
    location_area_encounters: string;
    move: {
        name: string;
        effect: string;
    }[];
    type: TypePokemon[] | TypePokemon;
    held_item?: {
        name: string;
        stat: StatType;
    }[];

}

const Pokemon1: PokemonType = {
    name: "charlizard",
    gender: "female",
    height: 200,
    weight: 200,
    location_area_encounters: "forest",
    move: [
        {
            name: "flying",
            effect: "cannot take damage from ground"
        }
    ],
    type: [TypePokemon.Fire, TypePokemon.Flying]

}

const Pokemon2: PokemonType = {
    name: "babalsor",
    gender: "female",
    height: 200,
    weight: 200,
    location_area_encounters: "forest",
    move: [
        {
            name: "kick",
            effect: "deal damage 50"
        }
    ],
    type: TypePokemon.Grass,
    held_item: [
        {
            name: "glove",
            stat: {
                armor: 20,
                damage: 10,
                hp: 200,
                speef: 200
            }
        },
        {
            name: "glove2",
            stat: {
                armor: 20,
                damage: 10,
                hp: 200,
                speef: 200
            }
        }
    ]
}