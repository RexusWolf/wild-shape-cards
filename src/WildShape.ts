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
  resistances: string;
  languages: string;
  feats: { name: string; description: string }[];
  actions: { name: string; description: string }[];
};
