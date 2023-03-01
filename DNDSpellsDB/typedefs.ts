export const typeDefs = `#graphql

type Spell{
    name: String!,
    source: String!,
    page: Int,
    otherSources: [OtherSource],
    level: Int,
    school: String,
    time: [Time],
    range: Range,
    components: Component,
    duration: [Duration],
    entries: [String],
    entriesHigherLevel: [Entry],
    affectsCreatureType: [String],
    miscTags: [String],
    damageInflict: [String],
    savingThrow: [String],
    spellAttack: String,
    scalingLevelDice: [ScalingLevelDice],
    areaTags: [String],
    classes: Class
}

type ScalingLevelDice{
    label: String
}

type ClassListEntry{
    name: String,
    source: String,
    definedInSource: String
}

type Class{
    fromClassList: [ClassListEntry],
    fromClassListVariant: [ClassListEntry]
}

type Entry{
    type: String,
    name: String,
    entries: [String]
}

type Duration{
    type: String
}

type Component{
    v: Boolean,
    s: Boolean,
    m: String
}

type Distance{
    type: String,
    amount: Int
}

type Range{
    type: String,
    distance: Distance
}

type Time{
    Int: Int,
    unit: String
}

type OtherSource{
    source: String,
    page: Int
}

type Spells{
    spell: [Spell]
}

type SpellList{
    spells: [Spells]
}

type Query{
    SpellsXGE: Spells,
    SpellsTCE: Spells,
    SpellsSCC: Spells,
    SpellsPHB: Spells,
    SpellsLLK: Spells,
    SpellsIDROTF: Spells,
    SpellsGGR: Spells,
    SpellsFTD: Spells,
    SpellsEGW: Spells,
    SpellsAITFR: Spells,
    SpellsAI: Spells,
    SpellsAAG: Spells,
    GetTables: [String],
    QueryAll: [Spells]
}

type Response{
    message: String,
    success: Boolean,
    data: Spell
}

input MutationInputData{
    bookName: String!,
    spellName: String!,
    data: SpellInput!
}

input SpellInput{
    name: String,
    source: String,
    page: Int,
    otherSources: [OtherSourceInput],
    level: Int,
    school: String,
    time: [TimeInput],
    range: RangeInput,
    components: ComponentInput,
    duration: [DurationInput],
    entries: [String],
    entriesHigherLevel: [EntryInput],
    affectsCreatureType: [String],
    miscTags: [String],
    damageInflict: [String],
    savingThrow: [String],
    spellAttack: String,
    scalingLevelDice: [ScalingLevelDiceInput],
    areaTags: [String],
    classes: ClassInput
}

input ScalingLevelDiceInput{
    label: String
}

input ClassListEntryInput{
    name: String,
    source: String,
    definedInSource: String
}

input ClassInput{
    fromClassList: [ClassListEntryInput],
    fromClassListVariant: [ClassListEntryInput]
}

input EntryInput{
    type: String,
    name: String,
    entries: [String]
}

input DurationInput{
    type: String
}

input ComponentInput{
    v: Boolean,
    s: Boolean,
    m: String
}

input DistanceInput{
    type: String,
    amount: Int
}

input RangeInput{
    type: String,
    distance: DistanceInput
}

input TimeInput{
    Int: Int,
    unit: String
}

input OtherSourceInput{
    source: String,
    page: Int
}

input SpellsInput{
    spell: [SpellInput]
}

input SpellListInput{
    spells: [SpellsInput]
}

type Mutation{
    editSpell(data: MutationInputData!): Response
}
`;
