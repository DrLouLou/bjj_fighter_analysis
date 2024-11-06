import { red } from "@ant-design/colors";

type Props = {
  value: number | string;
};

/**
 * Returns a cell style object with a red color if the value is negative
 * @param p - CellClassParams
 * @returns - { color: "red" } if value is negative, otherwise { color: "" }
 * @example redNegatives({ value: -1 }) // { color: "red" }
 * @example redNegatives({ value: 1 }) // { color: "" }
 * @example redNegatives({ value: 0 }) // { color: "" }
 */
export const redNegatives = ({ value }: Props) =>
  value && +value < 0 ? { color: "red" } : null;

/**
 * Returns a cell style object with a red color if the value is negative
 * @param p - CellClassParams
 * @returns - { color: "red" } if value is negative, otherwise { color: "" }
 * @example redNegativesDelta({ value: "(1)" }) // { color: "red" }
 * @example redNegativesDelta({ value: "1" }) // { color: "" }
 * @example redNegativesDelta({ value: "-1" }) // { color: "" }
 */
export const redNegativesDelta = ({ value }: Props) => {
  if (!Number.isNaN(value) && +value < 0) return { color: "red" };
  return value && `${value}`.charAt(0) === "(" ? { color: "red" } : null;
};

export const redCellIfEmpty = ({ value }: Props) =>
  value === "" || value == null ? { backgroundColor: red[1] } : null;
