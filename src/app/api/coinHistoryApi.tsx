import { AxiosResponse } from 'axios';
import client from './apiClient';

export default function getCoinHistory(coin : string, days : number){
    return () => client.get(`/coins/${coin}/market_chart?vs_currency=usd&days=${days}`);
}