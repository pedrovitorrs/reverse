export function reverse(original: string): string {
  // return original === '' ? '' : reverse(original.substr(1)) + original.charAt(0);

  return original.split('').reverse().join('');
}
