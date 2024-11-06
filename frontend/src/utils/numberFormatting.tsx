/**
 * Formats a number to UK format
 * @param p - number to format
 * @param decPlaces - number of decimal places
 * @returns
 */
export function toUkFormat(value: number, decPlaces: number): string {
  if (!value) return "";
  if (Number.isNaN(value)) return `${value}`;
  return value < 0
    ? "(" +
        Math.floor(value * -1)
          .toFixed(decPlaces)
          .toString()
          .replaceAll(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
        ")"
    : Math.floor(value)
        .toFixed(decPlaces)
        .toString()
        .replaceAll(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
