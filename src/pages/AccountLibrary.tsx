import GameGrid from "../components/GameGrid";
import { GAMES } from "../data/games";
import { useAuth } from "../lib/auth";

export default function AccountLibrary() {
  const { user } = useAuth();
  const games = GAMES.filter((g) => user?.library.includes(g.slug));

  if (games.length === 0) {
    return (
      <p className="account-empty">
        Nothing here yet. Play a game and it lands in your library.
      </p>
    );
  }

  return <GameGrid games={games} />;
}
