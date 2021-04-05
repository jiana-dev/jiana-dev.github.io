import Head from 'next/head'

import HomeBody from '../components/HomeBody';

import Header from '../components/Header';
import SubscribeSection from '../components/Subscribe';
import Loader from '../components/Loader';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className="container site-container">
      <Head>
        <title>JIANA</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/jquery-migrate-3.0.1.min.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.stellar.min.js"></script>
        <script src="js/jquery.countdown.min.js"></script>
        <script src="js/bootstrap-datepicker.min.js"></script>
        <script src="js/jquery.easing.1.3.js"></script>
        <script src="js/jquery.fancybox.min.js"></script>
        <script src="js/jquery.sticky.js"></script>
        <script src="js/main.js"></script>
      </Head>
      <Header/>
      <HomeBody/>
      <SubscribeSection/>
      <Loader/>
      <Footer/>
      <style jsx>{`
      .site-container {
        margin: 0;
        padding: 0;
      }
      `}</style>
    </div>
  )
}
