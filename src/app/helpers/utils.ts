import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const objHasValue = (obj: {}) => {
  return Object.values(obj).some(
    (value) => value !== null && value !== undefined
  );
};
