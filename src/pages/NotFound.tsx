import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 120,
      }}
    >
      <Reveal as="div">
        <p className="label-caps">Error</p>
        <h1 style={{ fontSize: "clamp(40px, 8vw, 90px)", marginTop: 16 }}>
          Nothing here
        </h1>
        <p
          style={{
            marginTop: 20,
            color: "var(--color-silver)",
            fontWeight: 300,
          }}
        >
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="btn btn--primary"
          style={{ marginTop: 36, display: "inline-flex" }}
        >
          Return home
        </Link>
      </Reveal>
    </div>
  );
}
