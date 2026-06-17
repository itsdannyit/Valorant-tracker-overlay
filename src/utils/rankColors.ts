export function getRankColor(rank: string): string {
  const r = rank.toLowerCase();
  if (r.includes('radiant')) return '#fcfeb5';
  if (r.includes('immortal')) return '#ff385a';
  if (r.includes('ascendant')) return '#23c967';
  if (r.includes('diamond')) return '#b489ff';
  if (r.includes('platinum')) return '#4ab2b5';
  if (r.includes('gold')) return '#eedb57';
  if (r.includes('silver')) return '#b2b2b2';
  if (r.includes('bronze')) return '#af815c';
  if (r.includes('iron')) return '#5a5a5a';
  return '#ffffff';
}

export function getRankGlow(rank: string): string {
  const r = rank.toLowerCase();
  if (r.includes('radiant')) return '0 0 15px rgba(252, 254, 181, 0.4)';
  if (r.includes('immortal')) return '0 0 15px rgba(255, 56, 90, 0.4)';
  if (r.includes('ascendant')) return '0 0 15px rgba(35, 201, 103, 0.4)';
  if (r.includes('diamond')) return '0 0 15px rgba(180, 137, 255, 0.4)';
  return 'none';
}
