export interface Pokemon {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: LanguageOrVersionGroupOrPokemonOrGeneration;
  names?: NamesEntity[] | null;
  effect_entries?: EffectEntriesEntity[] | null;
  effect_changes?: EffectChangesEntity[] | null;
  flavor_text_entries?: FlavorTextEntriesEntity[] | null;
  pokemon?: PokemonEntity[] | null;
  sprites: Sprites;
  types: TypesEntity[];
}
export interface LanguageOrVersionGroupOrPokemonOrGeneration {
  name: string;
  url: string;
}
export interface NamesEntity {
  name: string;
  language: LanguageOrVersionGroupOrPokemonOrGeneration;
}
export interface Sprites {
  back_default: string;
  back_female?: null;
  back_shiny: string;
  back_shiny_female?: null;
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
  other: Other;
}
export interface ImaPokemon {
  front_default: string;
}
export interface EffectEntriesEntity {
  effect: string;
  short_effect: string;
  language: LanguageOrVersionGroupOrPokemonOrGeneration;
}
export interface EffectChangesEntity {
  version_group: LanguageOrVersionGroupOrPokemonOrGeneration;
  effect_entries?: EffectEntriesEntity1[] | null;
}
export interface EffectEntriesEntity1 {
  effect: string;
  language: LanguageOrVersionGroupOrPokemonOrGeneration;
}
export interface FlavorTextEntriesEntity {
  flavor_text: string;
  language: LanguageOrVersionGroupOrPokemonOrGeneration;
  version_group: LanguageOrVersionGroupOrPokemonOrGeneration;
}
export interface PokemonEntity {
  is_hidden: boolean;
  slot: number;
  pokemon: LanguageOrVersionGroupOrPokemonOrGeneration;
}
export interface Other {
  dream_world: DreamWorldOrIcons;
}
export interface DreamWorldOrIcons {
  front_default: string;
  front_female?: null;
}

export interface TypesEntity {
  slot: number;
  type: TypeSpecie;
}
export interface TypeSpecie {
  name: string;
  url: string;
}
