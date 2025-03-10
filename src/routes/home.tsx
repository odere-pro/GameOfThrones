import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';

export const Route = createFileRoute('/home')({
  component: Home,
});

export const CACHE_KEY = 'Characters';

export type Character = {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  family: string;
  image: string;
  imageUrl: string;
};

export const fetchCharacters = async (): Promise<Character[] | undefined> => {
  const response = await fetch('https://thronesapi.com/api/v2/Characters');
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
};

export function Home() {
  const { data, isLoading } = useQuery({
    queryKey: [CACHE_KEY],
    queryFn: fetchCharacters,
    initialData: [],
  });

  if (isLoading) return <p>Loading...</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
