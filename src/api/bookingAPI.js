export function fetchAPI(date) {
  const result = [];
  const seed = new Date(date).getDate();

  for (let i = 17; i <= 22; i++) {
    if ((seed + i) % 2 === 0) {
      result.push(`${i}:00`);
      result.push(`${i}:30`);
    }
  }

  return result.length ? result : ["17:00"];
}

export function submitAPI(formData) {
  return !!formData;
}
