import React, { FunctionComponent, useEffect, useState } from 'react';
import PlayerHistory from '../../../models/ifpa/PlayerHistory';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

interface PlayerRankChartParams {
    Player1History: PlayerHistory | null,
    Player2History: PlayerHistory | null
}

const PlayerRankChart: FunctionComponent<PlayerRankChartParams> = ({ Player1History, Player2History }: PlayerRankChartParams) => {
    const [chart, setChart] = useState<am4charts.XYChart | null>(null);

    useEffect(() => {
        //create chart
        let newChart = am4core.create('chartdiv', am4charts.XYChart);

        let categoryAxis = newChart.xAxes.push(new am4charts.DateAxis());
        categoryAxis.title.text = 'Date';

        let valueAxis = newChart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = 'Rank';
        valueAxis.renderer.inversed = true;

        let series1 = newChart.series.push(new am4charts.LineSeries());
        series1.strokeWidth = 3;
        //series1.stroke = am4core.color('#104547');
        series1.dataFields.valueY = 'Rank';
        series1.dataFields.dateX = 'Date';
        series1.hiddenInLegend = true;

        let series2 = newChart.series.push(new am4charts.LineSeries());
        series2.strokeWidth = 3;
        //series2.stroke = am4core.color('#444547');
        series2.dataFields.valueY = 'Rank';
        series2.dataFields.dateX = 'Date';
        series2.hiddenInLegend = true;

        newChart.legend = new am4charts.Legend();
        newChart.legend.useDefaultMarker = true;

        newChart.cursor = new am4charts.XYCursor();

        setChart(newChart);
    }, []);

    useEffect(() => {
        return () => {
            if(chart instanceof am4charts.XYChart){
                chart.dispose();
            }
        };
    }, [chart]);

    useEffect(() => {
        if(chart instanceof am4charts.XYChart){
            if(Player1History instanceof PlayerHistory){
                chart.series.values[0].data = Player1History.RankHistory.reverse();
                chart.series.values[0].name = `${Player1History.FirstName} ${Player1History.LastName}`;
                chart.series.values[0].hiddenInLegend = false;
            }
            else{
                chart.series.values[0].data = [];
                chart.series.values[0].name = '';
                chart.series.values[0].hiddenInLegend = true;
            }

            if(Player2History instanceof PlayerHistory){
                chart.series.values[1].data = Player2History.RankHistory.reverse();
                chart.series.values[1].name = `${Player2History.FirstName} ${Player2History.LastName}`;
                chart.series.values[1].hiddenInLegend = false;
            }
            else{
                chart.series.values[1].data = [];
                chart.series.values[1].name = '';
                chart.series.values[1].hiddenInLegend = true;
            }
        }

        if(chart instanceof am4charts.XYChart){
            chart.draw();
        }
    }, [chart, Player1History, Player2History]);

    return (
        <section>
            <h4>Player Rank</h4>
            <div id='chartdiv' style={{ width: '100%', height: '500px' }}></div>
        </section>
    );
};

export default PlayerRankChart;