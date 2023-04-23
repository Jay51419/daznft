import { SVGProps } from "react";

export default function PersonIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.2222 17V15.2222C15.2222 14.2792 14.8476 13.3748 14.1808 12.708C13.514 12.0412 12.6097 11.6666 11.6667 11.6666H4.55555C3.61256 11.6666 2.70819 12.0412 2.0414 12.708C1.3746 13.3748 1 14.2792 1 15.2222V17"
        stroke={`${props.color ?? "rgba(153, 153, 167, 0.5)"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.11098 8.11111C10.0747 8.11111 11.6665 6.51924 11.6665 4.55556C11.6665 2.59188 10.0747 1 8.11098 1C6.1473 1 4.55542 2.59188 4.55542 4.55556C4.55542 6.51924 6.1473 8.11111 8.11098 8.11111Z"
        stroke={`${props.color ?? "rgba(153, 153, 167, 0.5)"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
