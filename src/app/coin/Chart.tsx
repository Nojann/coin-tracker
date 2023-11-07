'use client'

import React, { useEffect, useState } from "react";
import getCoinHistory from "../api/coinHistoryApi";
import useApi from "../hooks/useApi";

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


export default function Chart() {

    var getCoinHistoryApi = useApi(getCoinHistory('ethereum', 180));

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
      
      const labels = getCoinHistoryApi.data?.prices.map((item : number[]) => new Date(item[0]).getDate());
      
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

    }, []);

    return(
        <Line options={options} data={data} />
    )

}

