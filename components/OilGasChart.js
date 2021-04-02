import StockChart from './StockChart';

export default function OilGasChart() {
  const stockListFile = 'https://raw.githubusercontent.com/jianajavier/stashofgoodies/master/stock_valuer/2021-03-09/oil_and_gas_stocks_stocklist.txt'
  const valueListFile = 'https://raw.githubusercontent.com/jianajavier/stashofgoodies/master/stock_valuer/2021-03-09/oil_and_gas_stocks_peterlynchlist.txt'
  const title = 'Oil and Gas Watchlist'
  const date = '03/09/21'

  return (
    <StockChart
      stockListFile={stockListFile}
      valueListFile={valueListFile}
      title={title}
      as_of_date={date}
    />
  )
}
