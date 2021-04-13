export function reverse(original: string): string {
  return original === '' : '' ? reverse(original.substr(1)) + original.charArt(0);
}
