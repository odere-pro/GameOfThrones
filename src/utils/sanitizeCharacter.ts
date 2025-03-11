import type { Character } from '../types';
export const showEmpty = (value: string | undefined) => (value ? value : '-');

export const sanitizeCharacter = (
  c: Character,
): Pick<Character, 'fullName' | 'family' | 'title'> => {
  const { fullName, family, title } = c;
  return {
    // TODO: remove firstName and lastName to keep UI clean (redundant information)
    // firstName: showEmpty(firstName),
    // lastName: showEmpty(lastName),
    fullName: showEmpty(fullName),
    family: showEmpty(family),
    title: showEmpty(title),
  };
};
