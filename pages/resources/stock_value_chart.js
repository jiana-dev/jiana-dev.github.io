import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/resources/stock_value_chart.json';

import BerkshireChart from '../../components/BerkshireChart';
import BigShortsChart from '../../components/BigShortsChart';
import OilGasChart from '../../components/OilGasChart';
import CanadianStocksChart from '../../components/CanadianStocksChart';

export default function StockValueChart() {
  const columns = [
    { field: 'col1', headerName: 'Ticker Symbol', width: 300 },
    { field: 'col2', headerName: 'Peter Lynch Value', width: 300 },
  ];

  const post =
    <div>
      <p>This is the result of a script I wrote to value stocks in any given portfolio according to Peter Lynch's method for a stock's fair value. This method is as follows:</p>
      <code>value rating = p/e ratio / growth rate + dividend yield</code>
      <p>Let me know via email if you'd like me to run this for any other Yahoo Finance portfolios or any ticker symbols in particular!</p>
      <h6><strong>How to read the results:</strong></h6>
      <table>
      <tbody>
      <tr>
        <td>{'value rating < 0'}</td>
        <td>No predictions on fair value since company's growth or PE is negative.</td>
      </tr>
      <tr>
        <td>{'0 < value rating <= 0.5'}</td>
        <td>Amazing! Stock is selling for less than or equal to half of what it's worth.</td>
      </tr>
      <tr>
        <td>{'0.5 < value rating <= 1'}</td>
        <td>Pretty good. The stock is selling for a bit less than what its worth.</td>
      </tr>
      <tr>
        <td>{'value rating = 1'}</td>
        <td>Stock is exactly at a fair value.</td>
      </tr>
      <tr>
        <td>{'1 < value rating < 2'}</td>
        <td>Not great. The stock is selling for more than and up to double it's worth.</td>
      </tr>
      <tr>
        <td>value rating > 2</td>
        <td>Way overpriced.</td>
      </tr>
      </tbody>
      </table>
      <h5><strong>DISCLAIMER:</strong> This especially does not work for stocks with negative growth rates. Use at your own risk! Values with None could not be calculated automatically.</h5>
      <BerkshireChart/>
      <BigShortsChart/>
      <OilGasChart/>
      <CanadianStocksChart/>
    </div>

  return (
    <div className="container">
      <HeadTag pageTitle={`JIANA - ${postData.title}`}/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <BlogPostHeader title={postData.title} date={postData.date} readTime={postData.readTime} subtitle={postData.subtitle}/>
              { post }
            </div>
          </div>
        </div>
      </div>
      <SubscribeSection/>
      <Loader/>
      <Footer/>
    </div>
  )
}
