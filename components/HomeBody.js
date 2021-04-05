import MainContentArea from '../components/MainContentArea'; //unused
import SecondaryContentArea from '../components/SecondaryContentArea';
import FeaturePost from '../components/FeaturePost';
import TwoColumnImageLayout from '../components/TwoColumnImageLayout';
import TwoColumnTextImageLayout from '../components/TwoColumnTextImageLayout';

export default function HomeBody() {
  return (
    <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
      <FeaturePost/>
      <TwoColumnImageLayout/>
      <style jsx>{`
        padding: 0 2em 0 2em;
      `}</style>
    </div>
  )
}
