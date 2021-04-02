import StockChart from './StockChart';

export default function BerkshireChart() {
  const stockListFile = 'https://raw.githubusercontent.com/jianajavier/stashofgoodies/master/stock_valuer/2021-02-25/the_berkshire_hathaway_portfolio_stocklist.txt'
  const valueListFile = 'https://raw.githubusercontent.com/jianajavier/stashofgoodies/master/stock_valuer/2021-02-25/the_berkshire_hathaway_portfolio_peterlynchlist.txt'
  const title = 'Berkshire Hathaway'
  const date = '02/25/2021'

  return (
    <StockChart
      stockListFile={stockListFile}
      valueListFile={valueListFile}
      title={title}
      as_of_date={date}
    />
  )
}
