// https://codegolf.stackexchange.com/a/150252
export const hsl2rgb = (H: number, S: number, L: number) => {
  let Y: number;
  let A: Function;
  return [5, 3, 1].map(
    (i) => A(L * 2) * S * ([1, Y, 0, 0, Y, 1][(i - ~H) % 6] - 0.5) + L,
    (Y = (A = (n: number) => (n > 1 ? 2 - n : n))((H /= 60) % 2))
  );
};
