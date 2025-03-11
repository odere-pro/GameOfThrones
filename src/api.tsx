import { type Character } from './types';

export const getAllCharacters = async (): Promise<Character[] | undefined> => {
  const response = await fetch('https://thronesapi.com/api/v2/Characters');
  if (!response.ok) throw new Error('Failed to fetch Characters');
  return response.json();
};

export const getCharacter = async (
  id: number,
): Promise<Character | undefined> => {
  const response = await fetch(
    `https://thronesapi.com/api/v2/Characters/${id}`,
  );
  if (!response.ok) throw new Error('Failed to fetch Character by ID');
  return response.json();
};
