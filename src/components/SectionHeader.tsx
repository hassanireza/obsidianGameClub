import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { IconArrow } from "./icons";
import "./sectionHeader.css";

interface SectionHeaderProps {
  numeral: string;
  label: string;
  title: string;
  seeAllHref?: string;
}

export default function SectionHeader({
  numeral,
  label,
  title,
  seeAllHref,
}: SectionHeaderProps) {
  return (
    <Reveal as="div" className="section-header">
      <div className="section-header__row">
        <div>
          <p className="label-caps">
            <span className="section-header__numeral">{numeral}</span> — {label}
          </p>
          <h2 className="section-header__title">{title}</h2>
        </div>
        {seeAllHref && (
          <Link to={seeAllHref} className="section-header__see-all">
            See all <IconArrow />
          </Link>
        )}
      </div>
    </Reveal>
  );
}
