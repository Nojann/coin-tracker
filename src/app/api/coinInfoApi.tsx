import client from './apiClient';

export default function getCoinInfo(coin : string){
    return () => client.get(`/coins/${coin}`);
}