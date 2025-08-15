export function cleanHTML(text: string) {
  return text.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]*>/g, "");
}
