import * as React from 'react';
interface BurgerIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}
export const BurgerIcon: React.FC<BurgerIconProps> = ({
  color = '#2A2A39',
  ...props
}) => (
  <svg
    width="43"
    height="43"
    viewBox="0 0 43 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y="0.75" width="43" height="43" rx="10" fill={color} />
    <path
      d="M31.0869 21.3369H11.913C11.4088 21.3369 11 21.7457 11 22.2499C11 22.7542 11.4088 23.163 11.913 23.163H31.0869C31.5912 23.163 32 22.7542 32 22.2499C32 21.7457 31.5912 21.3369 31.0869 21.3369Z"
      fill="white"
    />
    <path
      d="M11.913 16.7716H31.0869C31.5912 16.7716 32 16.3628 32 15.8586C32 15.3543 31.5912 14.9456 31.0869 14.9456H11.913C11.4088 14.9456 11 15.3543 11 15.8586C11 16.3628 11.4088 16.7716 11.913 16.7716Z"
      fill="white"
    />
    <path
      d="M31.0869 27.728H11.913C11.4088 27.728 11 28.1368 11 28.6411C11 29.1454 11.4088 29.5541 11.913 29.5541H31.0869C31.5912 29.5541 32 29.1454 32 28.6411C32 28.1368 31.5912 27.728 31.0869 27.728Z"
      fill="white"
    />
  </svg>
);
