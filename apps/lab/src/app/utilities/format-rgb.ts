import { round } from './round';

export const formatRGB = ([r, g, b]: number[]) => {
  return `${round(r)}, ${round(g)}, ${round(b)}`;
};
