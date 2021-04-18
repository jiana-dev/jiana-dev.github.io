// import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../meranda-master/master.css'
import '../meranda-master/css/pagination.css';
import 'loaders.css/src/animations/pacman.scss';
import { useEffect, useState } from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import netlifyAuth from '../lib/netlifyAuth';
import GoTrue from 'gotrue-js';

function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(netlifyIdentity.currentUser() !== null)
  const [user, setUser] = useState(netlifyIdentity.currentUser())

  console.log("user, loggedIn")
  console.log(user)
  console.log(loggedIn)

  useEffect(() => {
    const auth = new GoTrue({
      APIUrl: 'https://jianajavier.com/.netlify/identity',
      audience: '',
      setCookie: false,
    });

    console.log(auth.currentUser())

    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user)
      setUser(user)
    })
  }, [])

  pageProps.auth = {
    user: user,
    loggedIn: loggedIn,
    setUser: setUser,
    setLoggedIn: setLoggedIn
  }

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
