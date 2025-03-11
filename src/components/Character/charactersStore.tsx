import { Store } from '@tanstack/store';
import type { Character, Family, WeightedCharacter } from './types';

export type StoreState = Character[];

export const store = new Store<StoreState>([]);

export const getAllCharacters = (state: StoreState): StoreState => state;

export const getAllHouses = (state: StoreState): string[] => {
  const houses = state
    .map((character) => character.family)
    .filter((family) => family.toLowerCase().includes('house'));
  return Array.from(new Set(houses));
};

export const getAllFamilies = (state: StoreState): string[] => {
  const houses = state.map((character) => character.family);
  return Array.from(new Set(houses));
};

export const getAllFamilyMembers = (state: StoreState): Family[] => {
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
  (state: StoreState): Family[] => {
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

    return Object.entries(result).map(
      ([key, value]: [string, Character[]]) => ({
        name: key,
        members: value,
      }),
    );
  };

export const searchCharacters =
  (query: string) =>
  (state: StoreState): WeightedCharacter[] => {
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

    return result
      .filter(({ weight }) => weight)
      .sort((a, b) => b.weight - a.weight);
  };
