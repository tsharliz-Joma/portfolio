import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const generateRandomColors = (object, KeyName) => {
  // This function will generate a random color for each item in map function
  return object[KeyName].map(
    () => `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`
  );
};

const generateColorsProp = (object, KeyName, colors) => {
  // Check if the property exist && and the Property is an Array
  if (object.hasOwnProperty(KeyName) && Array.isArray(object[KeyName])) {
    if (!colors || colors.length === 0) {
      console.error("Colors array is empty or not provided");
    }
    return object[KeyName].map((_, index) => colors[index % colors.length]);
  } else {
    console.error("Invalid key or the key does not point to an array");
    return [];
  }
};

const fonts = [
  "Jaro",
  "Jersey",
  "Permanent Marker",
  "Rock Salt",
  "Yarndings",
  "Exo",
  "anta",
];

const getRandomFontClass = () =>
  fonts[Math.floor(Math.random() * fonts.length)];

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export {
  generateRandomColors,
  cn,
  generateColorsProp,
  getRandomFontClass,
  fonts,
};
