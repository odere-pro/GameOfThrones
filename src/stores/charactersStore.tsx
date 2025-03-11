import { Store } from '@tanstack/store';
import type { Character, Family, WeightedCharacter } from '../types';

export type StoreState = Character[];

export const charactersStore = new Store<StoreState>([]);

export const getAllCharacters = (state: StoreState): StoreState => state;

export const getCharacterById =
  (id: string) =>
  (state: StoreState): Character | undefined => {
    return state.filter((character) => character.id === Number(id))[0];
  };

// TODO: extra feature, for the next steps
export const getAllHouses = (state: StoreState): string[] => {
  const houses = state
    .map((character) => character.family)
    .filter((family) => family.toLowerCase().includes('house'));
  return Array.from(new Set(houses));
};

// TODO: extra feature, for the next steps
export const getAllFamilies = (state: StoreState): string[] => {
  const houses = state.map((character) => character.family);
  return Array.from(new Set(houses));
};

// TODO: extra feature, for the next steps
export const getAllMembersGroupedByFamily = (state: StoreState): Family[] => {
  const result: Record<string, Character[]> = {};

  state.forEach((character) => {
    const { family } = character;
    if (!result[family]) {
      result[family] = [];
    }
    result[family].push(character);
  });

  return Object.entries(result).map(([key, value]: [string, Character[]]) => ({
    name: key,
    members: value,
  }));
};

export const getFamilyMembers =
  (name: string) =>
  (state: StoreState): Family | undefined => {
    const result: Record<string, Character[]> = {};

    state
      .filter(({ family }) => family === name)
      .forEach((character) => {
        const { family } = character;
        if (!result[family]) {
          result[family] = [];
        }

        result[family].push(character);
      });

    if (result[name]) {
      return {
        name,
        members: result[name],
      };
    }
  };

// TODO: add improvements to the search
export const searchCharacters = (
  state: StoreState,
  query: string,
): Character[] => {
  const words = query
    .split(' ')
    .map((word) => word.trim())
    .filter((word) => word.length > 0);

  const result: WeightedCharacter[] = state.map((character) => {
    const { family, fullName, title } = character;
    let score = 0;
    words.forEach((word) => {
      if (family.toLowerCase().includes(word.toLowerCase())) {
        score += 1;
      }
      if (title.toLowerCase().includes(word.toLowerCase())) {
        score += 2;
      }
      if (fullName.toLowerCase().includes(word.toLowerCase())) {
        score += 3;
      }
    });

    return {
      ...character,
      weight: score,
    };
  });

  return (
    result
      .filter(({ weight }) => weight)
      .sort((a, b) => b.weight - a.weight)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map(({ weight, ...rest }) => rest)
  );
};
