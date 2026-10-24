import type { SVGProps } from "react";

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 5h18a1 1 0 0 1 1 1v.4l-10 6.6L2 6.4V6a1 1 0 0 1 1-1Zm19 3.8V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.8l9.45 6.25a1 1 0 0 0 1.1 0L22 8.8Z" />
    </svg>
  );
}
