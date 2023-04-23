import { SVGProps } from "react";

export default function SearchIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.66663 14.8333C11.3485 14.8333 14.3333 11.8485 14.3333 8.16663C14.3333 4.48475 11.3485 1.5 7.66663 1.5C3.98475 1.5 1 4.48475 1 8.16663C1 11.8485 3.98475 14.8333 7.66663 14.8333Z"
        stroke="#131330"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 16.5L12.3751 12.875"
        stroke="#131330"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
