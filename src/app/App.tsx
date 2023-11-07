'use client'

import React, { useEffect, useState } from "react";
import getCoinHistory from "./api/coinHistoryApi";
import useApi from "./hooks/useApi";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


export default function App() {

    var getCoinHistoryApi = useApi(getCoinHistory('ethereum', 1));

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Ethereum',
          },
        },
      };
      
      const labels = getCoinHistoryApi.data?.prices.map((item : number[]) => item[0]);
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Ethereum',
            data: getCoinHistoryApi.data?.prices.map((item : number[]) => item[1]),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

    useEffect(() => {
        getCoinHistoryApi.request();

    }, [getCoinHistoryApi]);

    console.log(getCoinHistoryApi.data);

    return(
        <div>
            <Line options={options} data={data} />
        </div>
    )

}

