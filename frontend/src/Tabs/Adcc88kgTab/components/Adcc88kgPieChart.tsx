import React, { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const Adcc88kgPieChart = () => {
  useLayoutEffect(() => {
    const root = am5.Root.new('chartdiv');

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.horizontalLayout,
      })
    );

    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'category',
      })
    );

    series.data.setAll([
      { category: 'Dec/DQ/Injury/Draw', value: 2 },
      { category: 'Neck', value: 3 },
      { category: 'Arm', value: 1 },
      { category: 'Leg', value: 2 },
      { category: 'Point', value: 8 },
    ]);

    chart.children.unshift(
      am5.Label.new(root, {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        x: am5.p50,
        centerX: am5.p50,
        y: -20,
      })
    );

    const legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(series.dataItems);

    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: '100%', height: '500px' }}></div>;
};

export default Adcc88kgPieChart;
