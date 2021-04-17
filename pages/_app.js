// import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../meranda-master/master.css'
import '../meranda-master/css/pagination.css';
import 'loaders.css/src/animations/pacman.scss';
import netlifyIdentity from 'netlify-identity-widget';
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.on('init', user => console.log('init', user));
    netlifyIdentity.init();
  }, [])

  return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
