import { charactersStore, getFamilyMembers } from '../stores/charactersStore';
import { useStore } from '@tanstack/react-store';
import CharacterLink from './CharacterLink';

export default function FamilyGroupe({
  name,
  currentId,
}: {
  name: string;
  currentId?: number;
}) {
  const family = useStore(charactersStore, getFamilyMembers(name));

  if (!family) {
    return null;
  }

  let members = family?.members;
  if (currentId !== undefined) {
    members = members.filter(({ id }) => id !== currentId);
  }

  return (
    <div className="flex flex-col gap-2 md:gap-4 items-start w-full ">
      <h2 className="text-lg font-bold select-none">{family.name} members</h2>
      {members.length === 0 ? (
        <p>No family members</p>
      ) : (
        <ul className="flex md:flex-wrap gap-2 -mx-8 md:mx-0 py-2 w-dvw overflow-x-auto md:overflow-visible">
          {members.map(({ id, fullName, imageUrl }) => (
            <li key={id}>
              <CharacterLink id={id} imageUrl={imageUrl} fullName={fullName} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
