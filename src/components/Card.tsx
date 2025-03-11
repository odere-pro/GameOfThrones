import Image from './Image';
import type { Character } from '../types';
import { Link } from '@tanstack/react-router';

export default function Card({
  id,
  imageUrl,
  fullName,
}: Pick<Character, 'id' | 'imageUrl' | 'fullName'>) {
  return (
    <Link
      className="flex flex-col h-full gap-1 align-center ´hover:shadow-lg hover:scale-105 transition-transform duration-200"
      to="/characters/$charactersId"
      params={{ charactersId: id.toString() }}
    >
      <Image url={imageUrl} altText={fullName} fullWidth height="100%" />
      <p className="text-center text-xs md:text-sm">{fullName}</p>
    </Link>
  );
}
