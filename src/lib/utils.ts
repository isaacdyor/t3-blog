import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(inputString: string) {
  const lowercaseString = inputString.toLowerCase();

  const capitalizedString =
    lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);

  return capitalizedString;
}
