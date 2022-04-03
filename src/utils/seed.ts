export default function random(seed: number): number {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}
