import { format, isValid } from "date-fns";

/**
 * Formats a given Date object into a string in the "yyyy-MM-dd" format.
 *
 * @function formatDateAsDDMMMYYYY
 * @param {Date} current - The date to be formatted.
 * @returns {String} - The formatted date string in "yyyy-MM-dd" format.
 * @example
 * const currentDate = new Date();
 * const formattedDate = formatDateAsDDMMMYYYY(currentDate);
 * console.log(formattedDate); // Output: "22-Mar-2021" (for example)
 *
 * @see {@link https://date-fns.org/v2.27.0/docs/format | date-fns format function documentation }
 * for more information on date formatting with date-fns.
 */
export function formatDateAsDDMMMYYYY(current: Date | null): string {
  if (current == null) return "";
  return isValid(current) ? format(current, "dd-MMM-yyyy") : "";
}

/**
 * Formats a given Date object into a string in the "DD-MMM-yyyy hh:mm:ss" format.
 *
 * @function formatDateAsDDMMMYYYYhhmmss
 * @param {Date} current - The date to be formatted.
 * @returns {string} - The formatted date string in "dd-MMM-yyyy hh:mm:ss" format.
 * @example
 * const currentDate = new Date();
 * const formattedDate = formatDateAsDDMMMYYYYhhmmss(currentDate);
 * console.log(formattedDate); // Output: "27-Apr-2023 12:34:56" (for example)
 *
 * @see {@link https://date-fns.org/v2.27.0/docs/format | date-fns format function documentation }
 * for more information on date formatting with date-fns.
 */

export function formatDateAsDDMMMYYYYhhmmss(current: Date): string {
  return format(current, "dd-MMM-yyyy HH:mm:ss");
}

/**
 * Converts an Excel date to a JavaScript Date object.
 * @param date - Excel date, which is the number of days since 1900-01-01
 * @returns - JavaScript Date object
 */
export function excelDateToJSDate(date: number) {
  return new Date(Math.round((date - 25569) * 86400 * 1000));
}

/**
 * Converts an Excel date to a string in the format "dd-MM-yyyy".
 * @param date - Excel date, which is the number of days since 1900-01-01
 * @returns - Date string in the format "dd-MM-yyyy"
 */
export function formatDateAsDDMMMYYYYFromExcelDate(date: number): string {
  return formatDateAsDDMMMYYYY(excelDateToJSDate(date));
}
