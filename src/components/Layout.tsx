import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GrainOverlay from "./GrainOverlay";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <GrainOverlay />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
