import StockChart from './StockChart';

export default function CanadianStocksChart() {
  const stockListFile = 'https://raw.githubusercontent.com/jianajavier/stashofgoodies/master/stock_valuer/2021-03-09/canadian_stocks.txt'
  const valueListFile = 'https://raw.githubusercontent.com/jianajavier/stashofgoodies/master/stock_valuer/2021-03-09/canadian_stocks_peterlynchlist.txt'
  const title = 'Canada Market Leaders'
  const date = '03/09/2021'

  return (
    <StockChart
      stockListFile={stockListFile}
      valueListFile={valueListFile}
      title={title}
      as_of_date={date}
    />
  )
}
