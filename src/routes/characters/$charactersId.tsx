import { createFileRoute, useParams } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import {
  charactersStore,
  getCharacterById,
} from '../../stores/charactersStore';
import { useStore } from '@tanstack/react-store';
import CharacterDetails from '../../components/CharacterDetails';

export const Route = createFileRoute('/characters/$charactersId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { charactersId } = useParams({ from: '/characters/$charactersId' });
  const character = useStore(charactersStore, getCharacterById(charactersId));

  if (!character) {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <Link to="/" className="text-blue-500 hover:underline mb-4">
          Go home
        </Link>
        <div className="text-red-500 text-xl">404: Character not found</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <CharacterDetails {...character} />
    </div>
  );
}
