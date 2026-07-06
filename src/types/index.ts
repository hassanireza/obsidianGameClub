export type GenreSlug =
  | "mystical"
  | "puzzle-strategy"
  | "classic"
  | "racing"
  | "arcade"
  | "action"
  | "card";

export interface Genre {
  slug: GenreSlug;
  name: string;
  description: string;
}

export type ExternalTarget = "self" | "pixelRealms" | "driftlineArcade";

export interface Game {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  genre: GenreSlug;
  developer: string;
  plays: number;
  rating: number;
  reviewCount: number;
  colorFrom: string;
  colorTo: string;
  thumbnail: string;
  releaseDate: string;
  repoUrl: string;
  playUrl: string;
  isEditorsChoice: boolean;
}

export interface User {
  name: string;
  email: string;
  joined: string;
  library: string[];
  wishlist: string[];
}
