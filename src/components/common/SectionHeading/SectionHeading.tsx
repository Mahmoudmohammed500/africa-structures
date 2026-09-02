import type { ReactNode } from "react";

import "../../../styles/SectionHeading.css";

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "start";
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) => {
  return (
    <div
      className={`section-heading section-heading--${align} ${className}`}
    >
      {eyebrow && (
        <span className="section-heading__eyebrow">
          {eyebrow}
        </span>
      )}

      <h2 className="section-heading__title">
        {title}
      </h2>

      <span
        className="section-heading__line"
        aria-hidden="true"
      />

      {description && (
        <p className="section-heading__description">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
