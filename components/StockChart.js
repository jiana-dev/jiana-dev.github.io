import { DataGrid } from '@material-ui/data-grid';
import React, { useState, useEffect } from 'react';

export default function StockChart(props) {
  const [chart, setChart] = useState([]);
  const columns = [
    { field: 'col1', headerName: 'Ticker Symbol', width: 300 },
    { field: 'col2', headerName: 'Peter Lynch Value', width: 300 },
  ];

  useEffect(() => {
    fetch(props.stockListFile)
       .then( r => r.text() )
       .then( t => {
          fetch(props.valueListFile)
           .then( r => r.text() )
           .then( t2 => {
             let stocklist = t.split('\n').map( e => e.trim() );
             let valuelist = t2.split('\n').map( e => e.trim() );
             stocklist = stocklist.filter(function (el) {
              return el !== "";
            });
             valuelist = valuelist.filter(function (el) {
              return el !== "";
            });
             let res = stocklist.map((ticker, idx) =>
               { return { id: idx, col1: ticker, col2: parseFloat(valuelist[idx]) } }
             )
             setChart(res)
           }
           )
         }
       )
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h6>{props.title} as of {props.as_of_date}</h6>
      <DataGrid rowHeight={20} rows={chart} columns={columns} pagination/>
    </div>
  )
}
