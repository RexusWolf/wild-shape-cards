export type WildShape = {
  name: string;
  size: string;
  alignment: string;
  challengeRating: string;
  imageUrl: string;
  stats: { label: string; value: number }[];
  armorClass: number;
  hitPoints: string;
  speed: string;
  senses: string;
  skills: string;
  feats: { name: string; description: string }[];
  abilities: { name: string; description: string }[];
};
