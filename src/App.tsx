import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import GameDetail from "./pages/GameDetail";
import Genres from "./pages/Genres";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import AccountOverview from "./pages/AccountOverview";
import AccountLibrary from "./pages/AccountLibrary";
import AccountWishlist from "./pages/AccountWishlist";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/games/:slug" element={<GameDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />}>
          <Route index element={<AccountOverview />} />
          <Route path="library" element={<AccountLibrary />} />
          <Route path="wishlist" element={<AccountWishlist />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
