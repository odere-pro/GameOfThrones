import type { Character } from '../types';
import { sanitizeCharacter } from '../utils/sanitizeCharacter';
import FamilyGroupe from './FamilyGroupe';
import Image from './Image';

export default function CharacterDetails(character: Character) {
  const data = sanitizeCharacter(character);

  return (
    <div className="flex flex-col gap-4 md:gap-8 w-full px-4 md:px-0 items-start">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8  w-full">
        <h1 className="text-xl md:text-3xl font-bold md:hidden select-none">
          {character.fullName}
        </h1>
        <Image
          url={character.imageUrl}
          altText={character.fullName}
          height={'30dvh'}
        />
        <div className="flex flex-col md:col-span-1">
          <h1 className="text-3xl font-bold mb-4 hidden md:block select-none">
            {character.fullName}
          </h1>
          <ul className="w-full flex flex-col gap-2 mx-auto items-start">
            {Object.entries(data).map(([key, value]) => (
              <li key={key} className="w-full">
                <div className="hidden md:flex gap-8 text-[calc(12px+1vmin)]">
                  <span className="capitalize select-none">{key}:</span>
                  <span>{value}</span>
                </div>
                <div className="md:hidden flex flex-col text-[calc(12px+1vmin)]">
                  <span className="capitalize text-xs select-none">{key}:</span>
                  <span>{value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <FamilyGroupe name={character.family} currentId={character.id} />
    </div>
  );
}
