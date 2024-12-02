export function getEnumName<T extends Record<string, number | string>>(
  enumObject: T,
  value: T[keyof T],
): string | undefined {
  return Object.keys(enumObject).find((key) => enumObject[key] === value);
}
