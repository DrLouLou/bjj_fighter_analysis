import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const Adcc99kgPassesFreqChart = () => {
  useLayoutEffect(() => {
    const root = am5.Root.new('passesfreqchartdiv');

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
        fill: am5.color(0xffd700), 
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
        fill: am5.color(0xff4500), 
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

    const legend = chart.children.push(
      am5.Legend.new(root, {
        x: am5.p100,
        y: am5.p0,
        layout: root.horizontalLayout,
        centerY: am5.p0,
        centerX: am5.p100,
        marginRight: 15,
        marginTop: 15,
      })
    );

    legend.data.setAll([subsSeries, failuresSeries]);

    const data: any[] = [
        { technique: "Half guard", takedowns: 18, failures: 1 },
        { technique: "Knee slice", takedowns: 7, failures: 2 },
        { technique: "Toreando", takedowns: 4, failures: 0 },
        { technique: "Bodylock", takedowns: 2, failures: 2 },
        { technique: "NS Pass", takedowns: 2, failures: 1 },
        { technique: "3/4 Mount", takedowns: 1, failures: 0 },
        { technique: "Smash", takedowns: 2, failures: 0 },
        { technique: "Double under", takedowns: 1, failures: 1 },
        { technique: "Leg drag", takedowns: 1, failures: 1 },
        { technique: "Scoop grip", takedowns: 2, failures: 0 },
        { technique: "Hip switch", takedowns: 2, failures: 0 },
        { technique: "Long step", takedowns: 2, failures: 0 },
        { technique: "Cartwheel", takedowns: 2, failures: 0 },
        { technique: "Cradle", takedowns: 0, failures: 0 },
        { technique: "Over under", takedowns: 1, failures: 0 },
        { technique: "Cross grip", takedowns: 1, failures: 0 },
        { technique: "High step", takedowns: 0, failures: 0 },
        { technique: "Float", takedowns: 1, failures: 0 },
        { technique: "Sub leg pin", takedowns: 0, failures: 0 },
        { technique: "Legdrag", takedowns: 0, failures: 0 },
        { technique: "Wrecking ball", takedowns: 0, failures: 0 },
        { technique: "Knee circle", takedowns: 0, failures: 0 },
        { technique: "Crab ride", takedowns: 0, failures: 0 }
    ];

    xAxis.data.setAll(data.map(item => ({ technique: item.technique })));
    subsSeries.data.setAll(data);
    failuresSeries.data.setAll(data);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="passesfreqchartdiv" style={{ width: '100%', height: '500px' }}></div>;
};

export default Adcc99kgPassesFreqChart;
