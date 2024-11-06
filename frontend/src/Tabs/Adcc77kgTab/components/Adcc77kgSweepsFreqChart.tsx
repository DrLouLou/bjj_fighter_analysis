import React, { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const Adcc77kgSweepsFreqChart = () => {
  useLayoutEffect(() => {
    const root = am5.Root.new('sweepsfreqchartdiv');

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
        fill: am5.color(0x90e0ef),
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
        fill: am5.color(0x00b4d8),
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

    legend.data.setAll(chart.series.values);

    const data: any[] = [
        { technique: "Single leg", takedowns: 7, failures: 2 },
        { technique: "Double leg", takedowns: 2, failures: 0 },
        { technique: "Sub sweep", takedowns: 4, failures: 0 },
        { technique: "Half guard", takedowns: 1, failures: 0 },
        { technique: "Kiss of the D", takedowns: 0, failures: 0 },
        { technique: "Lumberjack", takedowns: 1, failures: 0 },
        { technique: "Dummy sweep", takedowns: 1, failures: 0 },
        { technique: "Hook sweep", takedowns: 1, failures: 0 },
        { technique: "50/50", takedowns: 1, failures: 0 },
        { technique: "SLX", takedowns: 0, failures: 0 },
        { technique: "Matrix", takedowns: 1, failures: 0 },
        { technique: "Armadillo", takedowns: 0, failures: 0 },
        { technique: "Bodylock", takedowns: 3, failures: 1 },
        { technique: "Tripod", takedowns: 1, failures: 0 },
        { technique: "X-guard", takedowns: 0, failures: 0 },
        { technique: "Scissor", takedowns: 1, failures: 0 },
        { technique: "Tornado", takedowns: 2, failures: 0 },
        { technique: "Berimbolo", takedowns: 1, failures: 0 },
        { technique: "John Wayne", takedowns: 0, failures: 0 },
        { technique: "Hip bump", takedowns: 0, failures: 0 },
        { technique: "Roll over", takedowns: 1, failures: 0 },
        { technique: "Snap down", takedowns: 0, failures: 0 },
        { technique: "Double leg", takedowns: 0, failures: 0 },
        { technique: "Ankle Pick", takedowns: 0, failures: 0 },
        { technique: "Flower Sweep", takedowns: 0, failures: 0 },
        { technique: "Groll", takedowns: 0, failures: 0 },
        { technique: "Bear Trap", takedowns: 0, failures: 0 },
        { technique: "False Reap", takedowns: 2, failures: 0 },
    ];

    xAxis.data.setAll(data.map(item => ({ technique: item.technique })));
    subsSeries.data.setAll(data);
    failuresSeries.data.setAll(data);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="sweepsfreqchartdiv" style={{ width: '100%', height: '500px' }}></div>;
};

export default Adcc77kgSweepsFreqChart;





