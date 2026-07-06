import type { Game } from "../types";
import { GAMES } from "../data/games";

// Anchor date drives "new" so the catalog stays meaningful as time passes.
const NOW = new Date("2026-07-06T00:00:00Z");
const NEW_WINDOW_DAYS = 60;

const daysSince = (dateStr: string) => {
  const then = new Date(dateStr + "T00:00:00Z");
  return (NOW.getTime() - then.getTime()) / (1000 * 60 * 60 * 24);
};

export const isNewRelease = (game: Game) =>
  daysSince(game.releaseDate) <= NEW_WINDOW_DAYS;

// A composite score built from real fields rather than a boolean toggle.
// Rewards weight of engagement (plays), quality (rating x review volume),
// and recency, so trending is not just "everything".
const trendScore = (game: Game) => {
  const recency = Math.max(0, 1 - daysSince(game.releaseDate) / 365);
  const engagement = Math.log10(game.plays + 1);
  const quality = (game.rating / 5) * Math.log10(game.reviewCount + 1);
  return engagement * 0.5 + quality * 0.35 + recency * 0.15;
};

export const trendingGames = (): Game[] => {
  const ranked = [...GAMES].sort((a, b) => trendScore(b) - trendScore(a));
  const cutoff = Math.max(3, Math.ceil(GAMES.length * 0.4));
  return ranked.slice(0, cutoff);
};

export const newReleases = (): Game[] =>
  [...GAMES]
    .filter(isNewRelease)
    .sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );

const featuredScore = (game: Game) =>
  game.rating * 0.6 + Math.log10(game.reviewCount + 1) * 0.4;

export const featuredGames = (): Game[] => {
  const eligible = GAMES.filter(
    (g) => g.isEditorsChoice || g.rating >= 4.6
  );
  return eligible
    .sort((a, b) => featuredScore(b) - featuredScore(a))
    .slice(0, 6);
};

export const editorsChoice = (): Game[] =>
  GAMES.filter((g) => g.isEditorsChoice).sort((a, b) => b.rating - a.rating);

export const topRated = (): Game[] =>
  [...GAMES].sort((a, b) => b.rating - a.rating).slice(0, 6);

export const gamesByGenre = (slug: string): Game[] =>
  GAMES.filter((g) => g.genre === slug);

export const findGame = (slug: string): Game | undefined =>
  GAMES.find((g) => g.slug === slug);

export const searchGames = (query: string): Game[] => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return GAMES.filter(
    (g) =>
      g.name.toLowerCase().includes(q) ||
      g.tagline.toLowerCase().includes(q) ||
      g.developer.toLowerCase().includes(q)
  );
};
