import React, { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const Adcc66kgSubFreqChart = () => {
  useLayoutEffect(() => {
    const root = am5.Root.new('subfreqchartdiv');

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
        categoryField: 'submission',
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 20,
        }),
      })
    );

    xAxis.get('renderer').labels.template.setAll({
      visible: false
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    xAxis.data.setAll([
      { submission: 'RNC' },
      { submission: 'Inside HH' },
      { submission: 'Outside HH' },
      { submission: 'Armbar' },
      { submission: 'Ankle Lock' },
      { submission: 'Guillotine' },
      { submission: 'Triangle' },
      { submission: 'Kneebar' },
      { submission: 'Arm Triangle' },
      { submission: 'Toe Hold' },
      { submission: 'Kimura' },
      { submission: 'Darce' },
      { submission: 'Choibar' },
      { submission: 'Smooother' },
      { submission: 'Ezekiel' },
      { submission: 'Omoplata' },
      { submission: 'Anaconda' },
      { submission: 'Inv. Armbar' },
      { submission: 'Aoki Lock' },
      { submission: 'Rear Triangle' },
      { submission: 'Americana' },
      { submission: 'Dead Orchard' },
      { submission: 'Estima Lock' },
      { submission: 'Gogoplata' },
      { submission: 'Suloev Stretch' },
      { submission: 'Linns Lock' },
      { submission: 'NS Choke' },
      { submission: 'No Arm' },
      { submission: 'Dogbar' },
      { submission: 'Calf Slicer' },
      { submission: 'Z-Lock' },
      { submission: 'Side Triangle' },
      { submission: 'Texas Brataplata' },
      { submission: 'Twister' },
      { submission: 'Buggy Choke' },
      { submission: 'Wrist Lock' },
      { submission: 'E. Chairs/B.Split' },
      { submission: 'C. Terra' },
    ]);

    const subsSeries = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Subs',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'subs',
        categoryXField: 'submission',
        clustered: true,
        fill: am5.color(0x000000),
      })
    );

    const failuresSeries = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Failures',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'failures',
        categoryXField: 'submission',
        clustered: true,
        fill: am5.color(0xff0000),
      })
    );

    subsSeries.data.setAll([
      { submission: 'RNC', subs: 0 },
      { submission: 'Inside HH', subs: 0 },
      { submission: 'Outside HH', subs: 0 },
      { submission: 'Armbar', subs: 1 },
      { submission: 'Ankle Lock', subs: 1 },
      { submission: 'Guillotine', subs: 0 },
      { submission: 'Triangle', subs: 0 },
      { submission: 'Kneebar', subs: 1 },
      { submission: 'Arm Triangle', subs: 1 },
      { submission: 'Toe Hold', subs: 0 },
      { submission: 'Darce', subs: 1 },
      { submission: 'Choibar', subs: 0 },
      { submission: 'Smooother', subs: 0 },
      { submission: 'Ezekiel', subs: 0 },
      { submission: 'Omoplata', subs: 0 },
      { submission: 'Anaconda', subs: 0 },
      { submission: 'Inv. Armbar', subs: 0 },
      { submission: 'Aoki Lock', subs: 1 },
      { submission: 'Rear Triangle', subs: 0 },
      { submission: 'Americana', subs: 0 },
      { submission: 'Dead Orchard', subs: 0 },
      { submission: 'Estima Lock', subs: 0 },
      { submission: 'Gogoplata', subs: 0 },
      { submission: 'Suloev Stretch', subs: 0 },
      { submission: 'Linns Lock', subs: 0 },
      { submission: 'NS Choke', subs: 0 },
      { submission: 'No Arm', subs: 0 },
      { submission: 'Dogbar', subs: 0 },
      { submission: 'Calf Slicer', subs: 0 },
      { submission: 'Z-Lock', subs: 0 },
      { submission: 'Side Triangle', subs: 0 },
      { submission: 'Texas Brataplata', subs: 0 },
      { submission: 'Twister', subs: 0 },
      { submission: 'Buggy Choke', subs: 0 },
      { submission: 'Wrist Lock', subs: 0 },
      { submission: 'E. Chairs/B.Split', subs: 0 },
      { submission: 'C. Terra', subs: 0 }
    ]);
    
    failuresSeries.data.setAll([
      { submission: 'RNC', failures: 4 },
      { submission: 'Inside HH', failures: 5 },
      { submission: 'Outside HH', failures: 1 },
      { submission: 'Armbar', failures: 3 },
      { submission: 'Ankle Lock', failures: 4 },
      { submission: 'Guillotine', failures: 12 },
      { submission: 'Triangle', failures: 1 },
      { submission: 'Kneebar', failures: 1 },
      { submission: 'Arm Triangle', failures: 1 },
      { submission: 'Toe Hold', failures: 2 },
      { submission: 'Darce', failures: 0 },
      { submission: 'Choibar', failures: 2 },
      { submission: 'Smooother', failures: 0 },
      { submission: 'Ezekiel', failures: 0 },
      { submission: 'Omoplata', failures: 3 },
      { submission: 'Anaconda', failures: 2 },
      { submission: 'Inv. Armbar', failures: 1 },
      { submission: 'Aoki Lock', failures: 0 },
      { submission: 'Rear Triangle', failures: 0 },
      { submission: 'Americana', failures: 0 },
      { submission: 'Dead Orchard', failures: 0 },
      { submission: 'Estima Lock', failures: 0 },
      { submission: 'Gogoplata', failures: 0 },
      { submission: 'Suloev Stretch', failures: 0 },
      { submission: 'Linns Lock', failures: 1 },
      { submission: 'NS Choke', failures: 0 },
      { submission: 'No Arm', failures: 0 },
      { submission: 'Dogbar', failures: 0 },
      { submission: 'Calf Slicer', failures: 0 },
      { submission: 'Z-Lock', failures: 0 },
      { submission: 'Side Triangle', failures: 0 },
      { submission: 'Texas Brataplata', failures: 0 },
      { submission: 'Twister', failures: 0 },
      { submission: 'Buggy Choke', failures: 0 },
      { submission: 'Wrist Lock', failures: 0 },
      { submission: 'E. Chairs/B.Split', failures: 1 },
      { submission: 'C. Terra', failures: 0 }
    ]);
    

    subsSeries.columns.template.setAll({
      tooltipText: "[bold]{name}[/]\n{categoryX}: {valueY}",
      tooltipY: 0
    });
    failuresSeries.columns.template.setAll({
      tooltipText: "[bold]{name}[/]\n{categoryX}: {valueY}",
      tooltipY: 0
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

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="subfreqchartdiv" style={{ width: '100%', height: '500px' }}></div>;
};

export default Adcc66kgSubFreqChart;
