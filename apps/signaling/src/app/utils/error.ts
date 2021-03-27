export function error(message: string) {
  console.error(message);
  throw new Error(message);
}
