import HeadTag from '../../components/HeadTag';
import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

export default function ThankYou() {
  return (
    <div className="container">
      <HeadTag pagetitle='Contact'/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <p>Thank You!</p>
            </div>
          </div>
        </div>
      </div>
      <SubscribeSection/>
      <Footer/>
    </div>
  )
}
