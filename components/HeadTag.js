import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import TagManager from 'react-gtm-module';

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
      <title>{props.pageTitle ? props.pageTitle : 'JIANA - I forgot to title this'}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

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
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/stellar.js/0.6.1/jquery.stellar.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.4/jquery.sticky.js"></script>
      <script src="/js/main.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-RJM7QC73T6"></script>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin="anonymous"
      />

      <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
  )
}
