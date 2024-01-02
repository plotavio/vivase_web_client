export function convertToNumberOrUndefined(
  value: string | undefined
): number | undefined {
  if (!value) {
    return undefined;
  }

  return Number(value);
}

export function transformStringToNumberOrUndefined(
  value: any,
  originalValue: any
) {
  if (!!originalValue) {
    return Number(originalValue);
  }

  return undefined;
}

export function getOnlyNumbersFromString(str: string): string {
  if (!str) return '';
  return str.replace(/\D/g, '');
}
