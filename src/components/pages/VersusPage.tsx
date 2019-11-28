import React, { FunctionComponent, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Player from '../../models/ifpa/Player';
import PlayerProfile from '../ifpa/PlayerProfile';
import FindPlayer from '../ifpa/FindPlayer';
import playerService from '../../services/ifpa/players';
import PlayerHistory from '../../models/ifpa/PlayerHistory';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import '../../css/VersusPage.css';

const VersusPage: FunctionComponent = () => {
    const [player1, setPlayer1] = useState<Player | null>(null);
    const [player1History, setPlayer1History] = useState<PlayerHistory | null>(null);
    const [player2, setPlayer2] = useState<Player | null>(null);
    const [player2History, setPlayer2History] = useState<PlayerHistory | null>(null);
    const [chart, setChart] = useState<am4charts.XYChart | null>(null);
    const [chartVisible, setChartVisible] = useState(false);

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
        let isSubscribed = true;

        if(player1 instanceof Player){
            playerService.getHistory(player1.ID)
                .then(history => {
                    if(history && isSubscribed){
                        setPlayer1History(history);
                    }
                });
        }
        else{
            setPlayer1History(null);
        }

        return () => {
            isSubscribed = false;
        };
    }, [player1]);

    useEffect(() => {
        let isSubscribed = true;

        if(player2 instanceof Player){
            playerService.getHistory(player2.ID)
                .then(history => {
                    if(history && isSubscribed){
                        setPlayer2History(history);
                    }
                });
        }
        else{
            setPlayer2History(null);
        }

        return () => {
            isSubscribed = false;
        };
    }, [player2]);

    useEffect(() => {
        if(chart instanceof am4charts.XYChart){
            if(player1History instanceof PlayerHistory){
                chart.series.values[0].data = player1History.RankHistory.reverse();
                chart.series.values[0].name = `${player1History.FirstName} ${player1History.LastName}`;
                chart.series.values[0].hiddenInLegend = false;
            }
            else{
                chart.series.values[0].data = [];
                chart.series.values[0].name = '';
                chart.series.values[0].hiddenInLegend = true;
            }

            if(player2History instanceof PlayerHistory){
                chart.series.values[1].data = player2History.RankHistory.reverse();
                chart.series.values[1].name = `${player2History.FirstName} ${player2History.LastName}`;
                chart.series.values[1].hiddenInLegend = false;
            }
            else{
                chart.series.values[1].data = [];
                chart.series.values[1].name = '';
                chart.series.values[1].hiddenInLegend = true;
            }
        }

        setChartVisible((player1History instanceof PlayerHistory || player2History instanceof PlayerHistory));
        if(chart instanceof am4charts.XYChart){
            chart.draw();
        }
    }, [chart, player1History, player2History]);

    const displayPlayerProfile = (player: Player | null) => {
        if(player instanceof Player){
            return (<PlayerProfile Player={player} />);
        }

        return null;
    };

    return (
        <section>
            <h3>Head to Head</h3>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Grid container>
                        <Grid item xs={12} sm={2}>Player 1:</Grid>
                        <Grid item xs={12} sm={10}>
                            <FindPlayer SetPlayerProfile={setPlayer1} />
                        </Grid>
                    </Grid>
                    {displayPlayerProfile(player1)}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container>
                        <Grid item xs={12} sm={2}>Player 2:</Grid>
                        <Grid item xs={12} sm={10}>
                            <FindPlayer SetPlayerProfile={setPlayer2} />
                        </Grid>
                    </Grid>
                    {displayPlayerProfile(player2)}
                </Grid>
            </Grid>
            <Grid container className={(chartVisible) ? '' : 'hideChart' }>
                <h4>Player Rank</h4>
                <div id='chartdiv' style={{ width: '100%', height: '500px' }}></div>
            </Grid>
        </section>
    );
};

export default VersusPage;