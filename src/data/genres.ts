import type { Genre, GenreSlug } from "../types";

export const GENRES: Record<GenreSlug, Genre> = {
  mystical: {
    slug: "mystical",
    name: "Mystical",
    description: "Divination, tarot and atmosphere driven experiences.",
  },
  "puzzle-strategy": {
    slug: "puzzle-strategy",
    name: "Puzzle & Strategy",
    description: "Chess, logic grids and tactical thinking, one shelf.",
  },
  classic: {
    slug: "classic",
    name: "Classic",
    description: "Timeless formats, rebuilt with care.",
  },
  racing: {
    slug: "racing",
    name: "Racing",
    description: "Speed, drift and survival through open space.",
  },
  arcade: {
    slug: "arcade",
    name: "Arcade",
    description: "Short sessions, high replay value.",
  },
  action: {
    slug: "action",
    name: "Action",
    description: "Reflex driven runs and combat.",
  },
  card: {
    slug: "card",
    name: "Card",
    description: "Table games with real stakes and structure.",
  },
};

export const GENRE_LIST: Genre[] = Object.values(GENRES);
