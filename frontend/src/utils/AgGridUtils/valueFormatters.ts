import type { ValueFormatterParams } from "@ag-grid-community/core";

/**
 * Returns a string multiplied by 100 with a 1 decimal place
 * @param v - number
 * @returns - string with a maximum of 3 decimal places
 * @example threeDecPlaces(1.234) // "1.2"
 * @example threeDecPlaces(1.3345) // "1.3"
 * @example threeDecPlaces(1.61334) // "1.6"
 */
export const formatPercentNumber = <T extends number>(v?: T): string => {
  if (v == null || Number.isNaN(v)) {
    return "0";
  }
  const result = (v * 100).toFixed(1);
  const [integerPart, decimalPart] = result.split(".");

  return decimalPart === "0" ? integerPart : result;
};

export const formatPercentNumberTwoDp = <T extends number>(v?: T): string => {
  if (v == null || Number.isNaN(v)) {
    return "0";
  }
  // Format with two decimal places
  const result = (v * 100).toFixed(2); 
  const [integerPart, decimalPart] = result.split(".");

  // Return with two decimal places, even if decimalPart is "00"
  return decimalPart === "00" ? integerPart : result;
};

/**
 * Returns a string with a 1 decimal place and a percent sign
 * @param {number} value - number
 * @returns - string with a 1 decimal place and a percent sign
 * @example numberToPercentGrid({ value: 0.123 }) // "12.3%"
 *  numberToPercentGrid({ value: 0.1234 }) // "12.3%"
 *  numberToPercentGrid({ value: 0.12345 }) // "12.3%"
 */
export const numberToPercentGrid = ({ value }: { value: number }): string => {
  if (value == null || Number.isNaN(value)) {
    return "";
  }

  if (value < 0) {
    return `(${formatPercentNumber(value * -1)}%)`;
  }
  return formatPercentNumber(value) + "%";
};

export const numberToPercentGridTwoDp = ({ value }: { value: number }): string => {
  if (value == null || Number.isNaN(value)) {
    return "";
  }

  if (value < 0) {
    return `(${formatPercentNumberTwoDp(value * -1)}%)`;
  }
  return formatPercentNumberTwoDp(value) + "%";
};

export const numberToPercent = (value: number): string =>
  numberToPercentGrid({ value });

/**
 * Returns a string with a maximum of 2 decimal places
 * @param number - number
 * @returns - string with commas
 * @example formatNumbers(1000) // "1,000"
 * @example formatNumbers(-1000) // "(1,000)"
 * @example formatNumbers(1000000) // "1,000,000"
 */
export const formatNumbers = <T extends number>(number: T): string => {
  if (!number || Number.isNaN(number)) return "";

  const formattedNumber = Math.round(Math.abs(number))
    .toString()
    .replaceAll(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  return number < 0 ? "(" + formattedNumber + ")" : formattedNumber;
};

/*
 * Returns a string with a maximum of 2 decimal places
 * @param number - number
 * @returns - string with commas
 * @example formatNumbers(1000) // "1,000"
 * @example formatNumbers(-1000) // "(1,000)"
 * @example formatNumbers(1000000) // "1,000,000"
 */
export const formatAgGridNumbers = ({ value }: { value: number }): string =>
  formatNumbers(value);

/**
 * Returns a string with a maximum of specified decimal places
 * @param number - number
 * @param decimals - number of decimal places, defaults to 2
 * @returns - string with commas
 * @example formatNumbers(1000) // "1,000"
 * @example formatNumbers(-1000) // "(1,000)"
 * @example formatNumbers(1000000) // "1,000,000"
 * @example formatNumbers(1000000.123) // "1,000,000.12"
 */
export const formatNumberWithDecimals = <T extends number>(
  value: T,
  decimals = 2,
) => {
  if (value == null || Number.isNaN(value)) return "0.00";

  // Check if number is negative
  const isNegative = value < 0;

  // Convert number to absolute value and round to 2 decimal places
  const absoluteNumber = Math.abs(value).toFixed(decimals);

  // Split number into integer and decimal parts
  const [integerPart, decimalPart] = absoluteNumber.split(".");

  // Add thousands separator to integer part
  let formattedIntegerPart = "";
  for (let i = 0; i < integerPart.length; i++) {
    if (i > 0 && (integerPart.length - i) % 3 === 0) {
      formattedIntegerPart += ",";
    }
    formattedIntegerPart += integerPart[i];
  }

  // Add negative sign if necessary and return formatted number
  const formattedNumber = formattedIntegerPart + "." + decimalPart;
  return isNegative ? "(" + formattedNumber + ")" : formattedNumber;
};

/**
 * Returns a string with a maximum of specified decimal places
 * @param number - number
 * @param decimals - number of decimal places, defaults to 2
 * @returns - string with commas
 * @example formatNumbers(1000) // "1,000"
 *  formatNumbers(-1000) // "(1,000)"
 *  formatNumbers(1000000) // "1,000,000"
 *  formatNumbers(1000000.123) // "1,000,000.12"
 *  formatNumbers(1000000.1234) // "1,000,000.12"
 *  formatNumbers(1000000.12345) // "1,000,000.12"
 */
export const formatNumberWithDecimalsIfNeeded = <T extends number>(
  value: T,
  decimals = 2,
) => {
  if (value == null || Number.isNaN(value)) return "";

  const res = formatNumberWithDecimals(value, decimals);

  const [integerPart, decimalPart] = res.split(".");

  const decWithoutZeroes = decimalPart.replace(/(\d*?[1-9])0+$/, "$1");

  return Number.parseInt(decimalPart) === 0
    ? integerPart
    : `${integerPart}.${decWithoutZeroes}`;
};

/**
 * @param p - ValueFormatterParams
 * @returns - 0 if value is undefined, otherwise value
 * @example undefinedToZero({ value: undefined }) // 0
 * @example undefinedToZero({ value: 1 }) // 1
 * @example undefinedToZero({ value: 0 }) // 0
 */
export const undefinedToZero = (p: ValueFormatterParams): string =>
  p.value === undefined ? 0 : p.value;

export const fiveDecPlaces = <T extends object>(
  e: ValueFormatterParams<T, string>,
): string => {
  return Number.isNaN(e.value) || e.value == null
    ? ""
    : formatNumberWithDecimalsIfNeeded(+e.value, 5);
};
