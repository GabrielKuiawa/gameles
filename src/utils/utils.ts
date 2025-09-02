export function cleanHTML(text: string) {
  return text.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]*>/g, "");
}

export function formatDate(isoDateString: string) {
  const date = new Date(isoDateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function chunkArray<T>(arr: T[], size: number): T[][] {
  return arr.reduce<T[][]>((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
}
