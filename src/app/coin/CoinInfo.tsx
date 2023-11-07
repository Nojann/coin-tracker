'use client'

import {useEffect } from 'react';
import getCoinInfo from '../api/coinInfoApi'
import useApi from '../hooks/useApi';

export default function CoinEssentialInfo(){

    var getCoinInfoApi = useApi(getCoinInfo('ethereum'));

    useEffect(() => {
        getCoinInfoApi.request();
    }, []);

    return(
        <div>
            <div className="card bg-base-100 mt-10">
            <div className="card-body">
                <h1 className="card-title text-3xl"><img src={getCoinInfoApi.data?.image.thumb}/> {getCoinInfoApi.data?.name} ({getCoinInfoApi.data?.symbol})</h1>
                <h2 className="text-xl">Economic data</h2>
                <p>Market cap Rank : {getCoinInfoApi.data?.market_cap_rank}</p>
                <p>Market cap : {getCoinInfoApi.data?.market_data.market_cap.usd} USD</p>
                <p>Price : {getCoinInfoApi.data?.market_data.current_price.usd} USD</p>
                <p>Volume : {getCoinInfoApi.data?.market_data.total_volume.usd} USD</p>
                <h2 className="text-xl mt-5">Categories</h2>
                {getCoinInfoApi.data?.categories.map((item : string) =>
                    <div className="badge badge-neutral">{item}</div>
                )}
                <h2 className="text-xl mt-5"></h2>
            </div>
            </div>
        </div>
        
    );
}