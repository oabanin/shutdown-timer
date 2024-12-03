export function isEnumValue<T extends object>(
  value: unknown,
  enumType: T,
): value is T[keyof T] {
  return Object.values(enumType).map(String).includes(String(value));
}
