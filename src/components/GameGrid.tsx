import type { Game } from "../types";
import GameCard from "./GameCard";
import "./gameGrid.css";

export default function GameGrid({ games }: { games: Game[] }) {
  if (games.length === 0) {
    return <p className="game-grid__empty">No games found.</p>;
  }

  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard key={game.slug} game={game} />
      ))}
    </div>
  );
}
