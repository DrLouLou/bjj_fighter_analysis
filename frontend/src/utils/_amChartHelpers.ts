import * as am5 from "@amcharts/amcharts5";
import type * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";
import type * as am5xy from "@amcharts/amcharts5/xy";

import type { Theme } from "@/redux/theme/_themeModels";

/**
 * Creates a chart root with theme.
 * @param chartRef - The reference to the HTMLDivElement that will contain the chart.
 * @returns The created chart root.
 * @example
 * // Create chart root with theme.
 * const root = createChartRootWithTheme(chartRef, currentTheme);
 * @see https://www.amcharts.com/docs/v5/getting-started/creating-a-chart/
 * @see https://www.amcharts.com/docs/v5/themes/
 */
export const createChartRootWithTheme = (
  chartRef: React.RefObject<HTMLDivElement>,
  theme: Theme,
) => {
  //   Create chart root
  const root = am5.Root.new(chartRef.current!); // Add the non-null assertion operator (!) after chartRef.current

  //   Add theme to the chart root
  if (theme === "dark") {
    root.setThemes([am5themes_Animated.new(root), am5themes_Dark.new(root)]);
  } else {
    root.setThemes([am5themes_Animated.new(root)]);
  }

  //   Remove logo
  root._logo?.dispose();

  return root;
};

/**
 * Changes the color of a pie series.
 * @param series - The pie series to change the color of.
 * @example
 * // Change the color of a pie series.
 * changePieSeriesColor(pieSeries);
 * @see https://www.amcharts.com/docs/v5/charts/pie-chart/series/
 * @see https://www.amcharts.com/docs/v5/charts/pie-chart/series/#Colors
 */
export const changePieSeriesColor = (series: am5percent.PieSeries) => {
  series
    .get("colors")
    ?.set("colors", [
      am5.color("#184e77"),
      am5.color("#99d98c"),
      am5.color("#1a759f"),
      am5.color("#52b69a"),
      am5.color("#b5e48c"),
      am5.color("#349fa3"),
      am5.color("#113b66"),
      am5.color("#20608c"),
      am5.color("#2983a2"),
      am5.color("#008000"),
      am5.color("#32CD32"),
      am5.color("#228B22"),
      am5.color("#0000FF"),
      am5.color("#00BFFF"),
      am5.color("#4285F4"),
    ]);
};

/**
 * Changes the axis labels to display values in millions.
 * The axis labels are divided by 1,000,000 and appended with "mm".
 * @param axis The value axis to modify.
 * @example
 * // Change the axis labels to display values in millions.
 * changeAxisLabelsToMillions(yAxis);
 * @see https://www.amcharts.com/docs/v5/charts/xy-chart/axes/value-axis/#Changing_labels
 * @see https://www.amcharts.com/docs/v5/concepts/formatters/#Number_formatters
 */
export const changeAxisLabelsToMillions = (
  axis: am5xy.ValueAxis<am5xy.AxisRenderer>,
) => {
  axis.get("renderer").labels.template.adapters.add("text", (text) => {
    return +(text || "0")?.replaceAll(",", "") / 1000000 + "mm";
  });
};

/**
 * Creates a scrollbar for a chart.
 * @param root - The am5.Root instance.
 * @param containerID - The ID of the container.
 * @returns The created chart container.
 */
export function createChartScrollbar(root: am5.Root, settings: am5.IScrollbarSettings) {
  const scrollBar = am5.Scrollbar.new(root, {
    ...settings,
  });

  scrollBar.startGrip.set("scale", 0.7);
  scrollBar.endGrip.set("scale", 0.7);

  return scrollBar;
}
