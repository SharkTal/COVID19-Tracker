import React from 'react'
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';

const buildChartData = (data, casesType) => {
    const chartData = [];
    let lastDataPoint;

    for (let date in data.cases) {
        if (lastDataPoint) {
            const newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint
            }

            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
}


function LineGraph({ casesType= 'cases'}) {
    const [data, setData] = useState({});



    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
                .then(response => response.json())
                .then(data => {
                    //console.log('LINEGRAPH DATA >>>', data)
                    const chartData = buildChartData(data, casesType);
                    console.log('CHARTDATA >>>', chartData)
                    setData(chartData)
                });
        };
        fetchData();

    }, [casesType])


    return (
        <div>
            {
                data?.length > 0 && (
                    <Line
                      
                        data={{
                            datasets: [
                                {
                                    data: data,
                                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                                    borderColor: "#CC1034",
                                    label: 'Daily New Cases by Last 30 Days',
                                    fill: true,
                                    tension: 0.1,
                                    hoverBackgroundColor:"#CC1034",
                                }]
                        }}
                    />
                )
            }

        </div>
    )
}

export default LineGraph
