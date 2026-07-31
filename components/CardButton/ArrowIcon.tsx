import { JSX, SVGProps } from 'react';
const ArrowIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <g
      stroke="#1473E6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      clipPath="url(#a)"
    >
      <path d="M4.167 10h11.666M12.5 13.333 15.833 10M12.5 6.667 15.833 10" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ArrowIcon;
