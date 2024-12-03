export function getEnumName<T extends Record<string, number | string>>(
  value: T[keyof T],
  enumObject: T,
): string | undefined {
  return Object.keys(enumObject).find(
    (key) => String(enumObject[key]) === String(value),
  );
}
