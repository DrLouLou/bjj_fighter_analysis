import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const Adcc88kgTakedownFreqChart = () => {
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
      { technique: "Single leg", takedowns: 5, failures: 38 },
      { technique: "Double leg", takedowns: 5, failures: 6 },
      { technique: "Deashi barai", takedowns: 4, failures: 0 },
      { technique: "Mat return", takedowns: 0, failures: 2 },
      { technique: "Throw by", takedowns: 4, failures: 6 },
      { technique: "Armdrag", takedowns: 0, failures: 1 },
      { technique: "Uchimata", takedowns: 2, failures: 3 },
      { technique: "Bodylock", takedowns: 2, failures: 3 },
      { technique: "Kosoto gari", takedowns: 1, failures: 0 },
      { technique: "Kouchi gari", takedowns: 5, failures: 3 },
      { technique: "Duck under", takedowns: 1, failures: 3 },
      { technique: "Snapdown", takedowns: 1, failures: 1 },
      { technique: "Sasae tsu. ashi", takedowns: 0, failures: 1 },
      { technique: "Kneetap", takedowns: 7, failures: 1 },
      { technique: "Ankle pick", takedowns: 1, failures: 3 },
      { technique: "Tawara/Sumi", takedowns: 1, failures: 0 },
      { technique: "O/Uki goshi", takedowns: 0, failures: 1 },
      { technique: "Lat drop", takedowns: 1, failures: 0 },
      { technique: "Slide by", takedowns: 1, failures: 0 },
      { technique: "Osoto gari", takedowns: 0, failures: 1 },
      { technique: "Kani Basami", takedowns: 1, failures: 0 },
      { technique: "Koshi guruma", takedowns: 0, failures: 1 },
      { technique: "Ura nage", takedowns: 0, failures: 0 },
      { technique: "Uki waza", takedowns: 0, failures: 0 },
      { technique: "Ude", takedowns: 1, failures: 0 },
      { technique: "Broom stick", takedowns: 0, failures: 0 },
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

export default Adcc88kgTakedownFreqChart;
