import { useAuth } from "../lib/auth";

export default function AccountOverview() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <div>
      <p style={{ color: "var(--color-silver)", fontWeight: 300, maxWidth: 480 }}>
        {user.library.length} game{user.library.length === 1 ? "" : "s"} in
        your library. {user.wishlist.length} on your wishlist. Joined{" "}
        {new Date(user.joined).toLocaleDateString()}.
      </p>
    </div>
  );
}
