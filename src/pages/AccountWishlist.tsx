import GameGrid from "../components/GameGrid";
import { GAMES } from "../data/games";
import { useAuth } from "../lib/auth";

export default function AccountWishlist() {
  const { user } = useAuth();
  const games = GAMES.filter((g) => user?.wishlist.includes(g.slug));

  if (games.length === 0) {
    return (
      <p className="account-empty">
        Your wishlist is empty. Tap the heart on any game card to save it here.
      </p>
    );
  }

  return <GameGrid games={games} />;
}
