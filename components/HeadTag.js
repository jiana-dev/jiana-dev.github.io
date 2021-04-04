import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import TagManager from 'react-gtm-module'

export default function HeadTag(props) {
  const tagManagerArgs = {
    gtmId: 'GTM-WK4DVBJ'
  }

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
    window.dataLayer.push({
      event: 'pageview'
    });
  }, [])

  const GA_TRACKING_ID = "G-RJM7QC73T6"

  return (
    <Head>
      <title>{props.pageTitle ? props.pageTitle : 'Jiana'}</title>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', "${GA_TRACKING_ID}",
        {
          debug_mode: true,
        });
      `}}/>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://code.jquery.com/jquery-migrate-3.3.2.min.js"></script>
      <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="../js/owl.carousel.min.js"></script>
      <script src="../js/jquery.stellar.min.js"></script>
      <script src="../js/jquery.countdown.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
      <script src="../js/jquery.easing.1.3.js"></script>
      <script src="../js/jquery.fancybox.min.js"></script>
      <script src="../js/jquery.sticky.js"></script>
      <script src="../js/main.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-RJM7QC73T6"></script>
    </Head>
  )
}
