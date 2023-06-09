import { SVGProps } from "react";

export default function LockIcon(
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
        d="M13.8 8.19995H2.6C1.71634 8.19995 1 8.9163 1 9.79995V15.4C1 16.2836 1.71634 17 2.6 17H13.8C14.6837 17 15.4 16.2836 15.4 15.4V9.79995C15.4 8.9163 14.6837 8.19995 13.8 8.19995Z"
        stroke="#9999A7"
        stroke-opacity="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.2 8.2V5C4.2 3.93913 4.62142 2.92172 5.37157 2.17157C6.12172 1.42143 7.13913 1 8.2 1C9.26086 1 10.2783 1.42143 11.0284 2.17157C11.7786 2.92172 12.2 3.93913 12.2 5V8.2"
        stroke="#9999A7"
        stroke-opacity="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
