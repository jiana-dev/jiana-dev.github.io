import HomeBody from '../components/HomeBody';

import Header from '../components/Header';
import HeadTag from '../components/HeadTag';
import SubscribeSection from '../components/Subscribe';
import Loader from '../components/Loader';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container site-container">
      <HeadTag pageTitle={`welcome to my brain`}/>
      <Header activePage='home'/>
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
