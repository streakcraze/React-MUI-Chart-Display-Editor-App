import React, { useContext } from 'react';
import { ChartContext } from './context';

import Paper from '@mui/material/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


export default function ChartDisplay() {
    const { chartData } = useContext(ChartContext);

    return (
        <>
            <Paper>
                <Chart
                    data={chartData}
                >
                    <ArgumentAxis />
                    <ValueAxis max={7} />

                    <BarSeries
                        valueField="population"
                        argumentField="year"
                    />
                    <Title text="World Population" />
                    <Animation />
                </Chart>
            </Paper>
        </>
        );
}
