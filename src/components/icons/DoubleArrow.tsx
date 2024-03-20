import * as React from "react";
import { SVGProps } from "react";
const DoubleArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={64}
    fill="none"
    viewBox="0 0 65 64"
    {...props}
  >
    <mask
      id="a"
      width={65}
      height={64}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="currentColor" d="M64.38 0h-64v64h64V0Z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="currentColor"
        d="m43.047 45.333 10.666-10.666v-24h-24L19.047 21.332h24v24Zm-16 16 10.666-10.666v-24h-24L3.047 37.332h24v24Z"
      />
    </g>
  </svg>
);
export default DoubleArrow;
