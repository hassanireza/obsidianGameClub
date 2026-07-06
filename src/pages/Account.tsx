import { Navigate, NavLink, Outlet } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useAuth } from "../lib/auth";
import "./account.css";

export default function Account() {
  const { user, logout } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="account-page container">
      <Reveal as="div">
        <p className="label-caps">Account</p>
        <h1>{user.name}</h1>
        <p className="account-page__meta">{user.email}</p>
      </Reveal>

      <nav className="account-nav">
        <NavLink to="/account" end>
          Overview
        </NavLink>
        <NavLink to="/account/library">Library</NavLink>
        <NavLink to="/account/wishlist">Wishlist</NavLink>
      </nav>

      <div className="account-section">
        <Outlet />
      </div>

      <button className="btn btn--ghost account-logout" onClick={logout}>
        Sign out
      </button>
    </div>
  );
}
