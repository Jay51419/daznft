import { SVGProps } from "react";

export default function HomeIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="17"
      height="19"
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-gray-900"
      stroke={"currentColor"}
      {...props}
    >
      <path
        d="M1 6.83333L8.5 1L16 6.83333V16C16 16.442 15.8244 16.866 15.5118 17.1785C15.1993 17.4911 14.7754 17.6667 14.3333 17.6667H2.66667C2.22464 17.6667 1.80072 17.4911 1.48816 17.1785C1.17559 16.866 1 16.442 1 16V6.83333Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.99992 17.6666V9.33325H10.9999V17.6666"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
