import * as React from 'react';
interface RightArrowIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: string;
}
export const RightArrowIcon: React.FC<RightArrowIconProps> = ({
  color = 'white',
  size = '19',
  ...props
}) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_12602_264)">
      <path
        d="M14.0087 10.3911L6.26898 18.1306C5.77664 18.6231 4.97839 18.6231 4.48629 18.1306C3.99415 17.6384 3.99415 16.8402 4.48629 16.3481L11.3348 9.49987L4.48649 2.65186C3.99435 2.15952 3.99435 1.36139 4.48649 0.869254C4.97863 0.376915 5.77684 0.376915 6.26918 0.869254L14.0089 8.60885C14.255 8.85504 14.3779 9.17735 14.3779 9.49983C14.3779 9.82247 14.2547 10.145 14.0087 10.3911Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_12602_264">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(0.25 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
