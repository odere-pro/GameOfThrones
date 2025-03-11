import type { Character } from '../types';
import { Link } from '@tanstack/react-router';
import Image from './Image';

export default function CharacterLink(
  props: Pick<Character, 'imageUrl' | 'fullName' | 'id'>,
) {
  const { imageUrl, fullName, id } = props;

  return (
    <Link
      className="inline-block hover:shadow-lg hover:scale-105 transition-transform duration-200"
      to="/characters/$charactersId"
      params={{ charactersId: id.toString() }}
    >
      <div className="w-[15vh] h-[15vh]">
        <Image url={imageUrl} altText={fullName} fullWidth />
      </div>
    </Link>
  );
}
