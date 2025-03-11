import { createFileRoute } from '@tanstack/react-router';
import { charactersStore, getAllCharacters } from '../stores/charactersStore';
import { useStore } from '@tanstack/react-store';
import Card from '../components/Card';

export const Route = createFileRoute('/')({
  component: App,
});

export function App() {
  const allCharacters = useStore(charactersStore, getAllCharacters);

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
      {allCharacters.map(({ id, fullName, imageUrl }) => (
        <li
          key={id}
          className="flex flex-col mx-auto md:h-56 md:w-48 h-44 w-36"
        >
          <Card id={id} imageUrl={imageUrl} fullName={fullName} />
        </li>
      ))}
    </ul>
  );
}
