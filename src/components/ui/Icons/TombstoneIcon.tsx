import type { SVGProps } from "react";

export function TombstoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={56}
      height={60}
      viewBox="0 0 56 60"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M10 46V22a18 18 0 0 1 36 0v24" />
      <path d="M28 18v18M21 24h14" />
      <path d="M3 50h50v6H3z" fill="currentColor" />
    </svg>
  );
}
