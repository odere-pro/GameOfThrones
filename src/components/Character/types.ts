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

export interface WeightedCharacter extends Character {
  weight: number;
}

export type Family = {
  name: string;
  members: Character[];
};
