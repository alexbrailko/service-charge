import * as React from 'react';
interface LeftArrowIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: string;
}
export const LeftArrowIcon: React.FC<LeftArrowIconProps> = ({
  color = 'white',
  size = '19',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_12602_285)">
      <path
        d="M4.99129 10.3911L12.731 18.1306C13.2234 18.6231 14.0216 18.6231 14.5137 18.1306C15.0058 17.6384 15.0058 16.8402 14.5137 16.3481L7.66524 9.49987L14.5135 2.65186C15.0056 2.15952 15.0056 1.36139 14.5135 0.869254C14.0214 0.376915 13.2232 0.376915 12.7308 0.869254L4.99109 8.60885C4.74502 8.85504 4.62212 9.17735 4.62212 9.49983C4.62212 9.82247 4.74526 10.145 4.99129 10.3911Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12602_285">
        <rect
          width="18"
          height="18"
          fill={color}
          transform="matrix(-1 0 0 1 18.75 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
