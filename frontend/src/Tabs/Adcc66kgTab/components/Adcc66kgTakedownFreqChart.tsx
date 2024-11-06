import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const Adcc66kgTakedownFreqChart = () => {
  useLayoutEffect(() => {
    const root = am5.Root.new('takedownfreqchartdiv');

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
      })
    );

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'technique',
        renderer: am5xy.AxisRendererX.new(root, { minGridDistance: 30 }),
      })
    );

    xAxis.get('renderer').labels.template.setAll({
      visible: false
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, { renderer: am5xy.AxisRendererY.new(root, {}) })
    );

    const subsSeries = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Takedowns',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'takedowns',
        categoryXField: 'technique',
        clustered: true,
        fill: am5.color(0xff5733),
      })
    );

    const failuresSeries = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Failures',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'failures',
        categoryXField: 'technique',
        clustered: true,
        fill: am5.color(0xc70039),
      })
    );

    subsSeries.columns.template.setAll({
      tooltipText: "[bold]{name}[/]\n{categoryX}: {valueY}",
      tooltipY: 0,
    });

    failuresSeries.columns.template.setAll({
      tooltipText: "[bold]{name}[/]\n{categoryX}: {valueY}",
      tooltipY: 0,
    });

    const legend = chart.children.push(am5.Legend.new(root, {
      x: am5.p100,
      y: am5.p0,
      layout: root.horizontalLayout,
      centerY: am5.p0,
      centerX: am5.p100,
      marginRight: 15,
      marginTop: 15,
    }));

    legend.data.setAll([subsSeries, failuresSeries]);

    const data = [
      { technique: "Single leg", takedowns: 26, failures: 6 },
      { technique: "Double leg", takedowns: 10, failures: 3 },
      { technique: "Deashi barai", takedowns: 5, failures: 1 },
      { technique: "Mat return", takedowns: 4, failures: 3 },
      { technique: "Armdrag", takedowns: 4, failures: 2 },
      { technique: "Uchimata", takedowns: 4, failures: 0 },
      { technique: "Bodylock", takedowns: 2, failures: 0 },
      { technique: "Kosoto gari", takedowns: 4, failures: 1 },
      { technique: "Kouchi gari", takedowns: 8, failures: 1 },
      { technique: "Duck under", takedowns: 1, failures: 0 },
      { technique: "Snapdown", takedowns: 6, failures: 1 },
      { technique: "Sasae tsurikomi ashi", takedowns: 2, failures: 1 },
      { technique: "Kneetap", takedowns: 1, failures: 1 },
      { technique: "Ankle pick", takedowns: 9, failures: 1 },
      { technique: "Tawara/Sumi", takedowns: 1, failures: 1 },
      { technique: "Fireman's carry", takedowns: 1, failures: 1 },
      { technique: "Harai goshi", takedowns: 1, failures: 0 },
      { technique: "Uki waza", takedowns: 1, failures: 0 },
    ];
    

    xAxis.data.setAll(data.map(item => ({ technique: item.technique })));
    subsSeries.data.setAll(data);
    failuresSeries.data.setAll(data);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="takedownfreqchartdiv" style={{ width: '100%', height: '500px' }}></div>;
};

export default Adcc66kgTakedownFreqChart;
