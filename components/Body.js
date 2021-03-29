import Header from './Header';
import MainContentArea from './MainContentArea';
import SecondaryContentArea from './SecondaryContentArea';
import FeaturePost from './FeaturePost';
import TwoColumnImageLayout from './TwoColumnImageLayout';
import TwoColumnTextImageLayout from './TwoColumnTextImageLayout';
import SubscribeSection from './Subscribe';
import Loader from './Loader';

export default function Body() {
  return (
    <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
      <Header/>
      <MainContentArea/>
      <SecondaryContentArea/>
      <FeaturePost/>
      <TwoColumnImageLayout/>
      <TwoColumnTextImageLayout/>
      <SubscribeSection/>
      <Loader/>
    </div>
  )
}
