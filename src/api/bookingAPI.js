export function fetchAPI(date) {
  const seededRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const result = [];
  const dateSeed = new Date(date).getDate();

  for (let i = 17; i <= 22; i++) {
    if (seededRandom(dateSeed + i) > 0.5) {
      result.push(`${i}:00`);
      result.push(`${i}:30`);
    }
  }

  return result;
}

export function submitAPI(formData) {
  if (!formData) return false;
  return true;
}
