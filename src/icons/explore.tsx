import { SVGProps } from "react";

export default function ExploreIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.33333 1.5H1.5V7.33333H7.33333V1.5Z"
        stroke="#131330"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 1.5H10.6666V7.33333H16.5V1.5Z"
        stroke="#131330"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 10.6667H10.6666V16.5001H16.5V10.6667Z"
        stroke="#131330"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.33333 10.6667H1.5V16.5001H7.33333V10.6667Z"
        stroke="#131330"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
