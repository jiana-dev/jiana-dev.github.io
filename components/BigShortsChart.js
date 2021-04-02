import StockChart from './StockChart';

export default function BigShortsChart() {
  const stockListFile = 'https://raw.githubusercontent.com/jianajavier/stashofgoodies/master/stock_valuer/2021-03-02/the_big_shorts_stocklist.txt'
  const valueListFile = 'https://raw.githubusercontent.com/jianajavier/stashofgoodies/master/stock_valuer/2021-03-02/the_big_shorts_peterlynchlist.txt'
  const title = 'Big Shorts'
  const date = '03/02/2021'

  return (
    <StockChart
      stockListFile={stockListFile}
      valueListFile={valueListFile}
      title={title}
      as_of_date={date}
    />
  )
}
