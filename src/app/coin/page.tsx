import Chart from './Chart'
import CoinEssentialInfo from './CoinInfo'

export default function ChartPage() {
  return (
    <main>
        <div className='flex flex-row'>
            <div className='flex w-1/3 justify-center'><CoinEssentialInfo/></div>
            <div className='w-2/3 h-screen'><Chart/></div>
        </div>
      
    </main>
  )
}