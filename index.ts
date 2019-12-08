/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_themes/spiritedaway.js from "@amcharts/amcharts4/themes/themes/spiritedaway.js";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.ready(function() {
  let chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.data = require('./data.json');

  let categoryAxis = chart.xAxes.push(new am4charts.DateAxis());
  categoryAxis.dataFields.date = "date";
  categoryAxis.title.text = "日付";

  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "量";

  let series = chart.series.push(new am4charts.LineSeries());
  series.stroke = am4core.color("＃ff0000");  // 赤
  series.strokeWidth = 3;  // 3px

  let bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.tooltipText = "シリーズ：{date} \n値：{value}";

  series.dataFields.valueY = "value";
  series.dataFields.dateX = "date";

  // ADJUST BULLETS ONTO LEFT EDGE OF EACH CELL!!!!!
  series.dataItems.template.locations.dateX = 0;

  // /* Chart code */
  // // Themes begin
  // // am4core.useTheme(am4themes_spiritedaway);
  // am4core.useTheme(am4themes_animated);
  // // Themes end

  // let chart = am4core.create("chartdiv", am4charts.XYChart);
  // chart.maskBullets = false;

  // let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  // let yAxis = chart.yAxes.push(new am4charts.CategoryAxis());

  // yAxis.dataFields.category = "nutrion";
  // xAxis.renderer.minGridDistance = 40;
  // xAxis.dataFields.category = "product";

  // xAxis.renderer.grid.template.disabled = true;
  // yAxis.renderer.grid.template.disabled = true;
  // xAxis.renderer.axisFills.template.disabled = true;
  // yAxis.renderer.axisFills.template.disabled = true;
  // yAxis.renderer.ticks.template.disabled = true;
  // xAxis.renderer.ticks.template.disabled = true;

  // yAxis.renderer.inversed = true;

  // let series = chart.series.push(new am4charts.ColumnSeries());
  // series.dataFields.categoryY = "nutrion";
  // series.dataFields.categoryX = "product";
  // series.dataFields.value = "value";
  // series.columns.template.disabled = true;
  // series.sequencedInterpolation = true;
  // //series.defaultState.transitionDuration = 3000;

  // let bullet = series.bullets.push(new am4core.Circle());
  // bullet.tooltipText = "{nutrion}, {product}: {value.workingValue.formatNumber('#.')}";
  // bullet.strokeWidth = 3;
  // bullet.stroke = am4core.color("#ffffff");
  // bullet.strokeOpacity = 0;

  // bullet.adapter.add("tooltipY", function(tooltipY, target) {
  //   return -target.radius + 1;
  // })

  // series.heatRules.push({
  //   property: "radius",
  //   target: bullet,
  //   min: 2,
  //   max: 40
  // });

  // bullet.hiddenState.properties.scale = 0.01;
  // bullet.hiddenState.properties.opacity = 1;

  // let hoverState = bullet.states.create("hover");
  // hoverState.properties.strokeOpacity = 1;

  // chart.data = require('./data.json');

  // console.log(chart.data);

  // // this changes data each 3 seconds
  // setInterval(function(){
  //     series.dataItems.each(function(dataItem){
  //         dataItem.value += dataItem.value * Math.random() * 0.3;
  //     })
  // }, 3000)
});

