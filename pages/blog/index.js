import Head from 'next/head'

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogList from '../../components/BlogList';
import PopularPostsSection from '../../components/PopularPostsSection';

export default function Blog() {
  return (
    <div className="container">
      <Head>
        <title>JIANA</title>
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
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <BlogList/>
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
