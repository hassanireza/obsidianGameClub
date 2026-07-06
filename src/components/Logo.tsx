interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="24"
          height="24"
          stroke="var(--color-bone)"
          strokeWidth="0.75"
        />
        <path
          d="M13 4L20 13L13 22L6 13L13 4Z"
          stroke="var(--color-bone)"
          strokeWidth="0.75"
        />
        <circle cx="13" cy="13" r="1.4" fill="var(--color-bone)" />
      </svg>
      {!compact && (
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "17px",
            letterSpacing: "0.04em",
          }}
        >
          Obsidian Game Store
        </span>
      )}
    </span>
  );
}
