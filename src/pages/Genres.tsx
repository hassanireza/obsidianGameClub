import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { GENRE_LIST } from "../data/genres";
import { gamesByGenre } from "../lib/categories";
import "./genres.css";

export default function Genres() {
  return (
    <div className="genres-page container">
      <Reveal as="div">
        <p className="label-caps">Catalog</p>
        <h1>Genres</h1>
        <p className="genres-page__intro">
          Seven shelves instead of ten. Chess and puzzle logic share a
          shelf now; everything else keeps its own room.
        </p>
      </Reveal>

      <div className="genres-page__list">
        {GENRE_LIST.map((genre, i) => {
          const count = gamesByGenre(genre.slug).length;
          return (
            <Reveal
              as="div"
              key={genre.slug}
              delay={(i % 3) as 0 | 1 | 2}
              className="genres-page__row"
            >
              <Link to={`/catalog?genre=${genre.slug}`}>
                <span className="genres-page__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="genres-page__name">{genre.name}</span>
                <span className="genres-page__desc">{genre.description}</span>
                <span className="genres-page__count">
                  {count} title{count === 1 ? "" : "s"}
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
