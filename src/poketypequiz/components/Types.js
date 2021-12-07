export const TypeCount = 18;

export const Types = {
    Normal: 1,
    Fire: 2,
    Water: 3,
    Electric: 4,
    Grass: 5,
    Ice: 6,
    Fighting: 7,
    Poison: 8,
    Ground: 9,
    Flying: 10,
    Psychic: 11,
    Bug: 12,
    Rock: 13,
    Ghost: 14,
    Dragon: 15,
    Dark: 16,
    Steel: 17,
    Fairy: 18,
};

export const typeMap = {
    [Types.Normal]: {
        effective: [],
        nonEffective: [Types.Rock, Types.Steel],
        noEffect: [Types.Ghost],
    },
    [Types.Fire]: {
        effective: [Types.Grass, Types.Ice, Types.Bug, Types.Steel],
        nonEffective: [Types.Fire, Types.Water, Types.Rock, Types.Dragon],
        noEffect: [],
    },
    [Types.Water]: {
        effective: [Types.Fire, Types.Ground, Types.Rock],
        nonEffective: [Types.Water, Types.Grass, Types.Dragon],
        noEffect: [],
    },
    [Types.Electric]: {
        effective: [Types.Water, Types.Flying],
        nonEffective: [Types.Electric, Types.Grass, Types.Dragon],
        noEffect: [Types.Ground],
    },
    [Types.Grass]: {
        effective: [Types.Water, Types.Ground, Types.Rock],
        nonEffective: [Types.Fire, Types.Grass, Types.Poison, Types.Flying, Types.Bug, Types.Dragon, Types.Steel],
        noEffect: [],
    },
    [Types.Ice]: {
        effective: [Types.Grass, Types.Ground, Types.Flying, Types.Dragon],
        nonEffective: [Types.Fire, Types.Water, Types.Ice, Types.Steel],
        noEffect: [],
    },
    [Types.Fighting]: {
        effective: [Types.Normal, Types.Ice, Types.Rock, Types.Dark, Types.Steel],
        nonEffective: [Types.Poison, Types.Flying, Types.Psychic, Types.Bug, Types.Fairy],
        noEffect: [Types.Ghost],
    },
    [Types.Poison]: {
        effective: [Types.Grass, Types.Fairy],
        nonEffective: [Types.Poison, Types.Ground, Types.Rock, Types.Ghost],
        noEffect: [Types.Steel],
    },
    [Types.Ground]: {
        effective: [Types.Fire, Types.Electric, Types.Poison, Types.Rock, Types.Steel],
        nonEffective: [Types.Grass, Types.Bug],
        noEffect: [Types.Flying],
    },
    [Types.Flying]: {
        effective: [Types.Grass, Types.Fighting, Types.Bug],
        nonEffective: [Types.Electric, Types.Rock, Types.Steel],
        noEffect: [],
    },
    [Types.Psychic]: {
        effective: [Types.Fighting, Types.Poison],
        nonEffective: [Types.Psychic, Types.Steel],
        noEffect: [Types.Dark],
    },
    [Types.Bug]: {
        effective: [Types.Grass, Types.Psychic, Types.Dark],
        nonEffective: [Types.Fire, Types.Fighting, Types.Poison, Types.Flying, Types.Ghost, Types.Steel, Types.Fairy],
        noEffect: [],
    },
    [Types.Rock]: {
        effective: [Types.Fire, Types.Ice, Types.Flying, Types.Bug],
        nonEffective: [Types.Fighting, Types.Ground, Types.Steel],
        noEffect: [],
    },
    [Types.Ghost]: {
        effective: [Types.Psychic, Types.Ghost],
        nonEffective: [Types.Dark],
        noEffect: [Types.Normal],
    },
    [Types.Dragon]: {
        effective: [Types.Dragon],
        nonEffective: [Types.Steel],
        noEffect: [Types.Fairy],
    },
    [Types.Dark]: {
        effective: [Types.Psychic, Types.Ghost],
        nonEffective: [Types.Fighting, Types.Dark, Types.Fairy],
        noEffect: [],
    },
    [Types.Steel]: {
        effective: [Types.Ice, Types.Rock, Types.Fairy],
        nonEffective: [Types.Fire, Types.Water, Types.Electric, Types.Steel],
        noEffect: [],
    },
    [Types.Fairy]: {
        effective: [Types.Fighting, Types.Dragon, Types.Dark],
        nonEffective: [Types.Fire, Types.Poison, Types.Steel],
        noEffect: [],
    },
};
