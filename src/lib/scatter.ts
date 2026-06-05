function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export function scatterPositions(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    left: `${5 + seededRandom(i * 2) * 75}%`,
    top: `${seededRandom(i * 2 + 1) * 1800}px`,
  }));
}
