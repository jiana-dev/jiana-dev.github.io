import { ImageWithCaption } from '../components';
import Card from 'react-bootstrap/Card';

export default function FeaturePost() {
  return (
    <div className="d-block d-lg-flex flex-column justify-content-center mb-5">
      <Card bg='light' style={{alignSelf: 'center', padding: '2em'}}>
        <ImageWithCaption className='profile' src="/images/profile/new_me.jpg" imgStyle={{}}/>
        <ImageWithCaption src="/images/text/hey.png" alt="oh hey there friends of the Internet" style={{}}/>
        <p className="mb-3">Thank you for visiting! My name is Jiana. I am a girl who (<i>please insert <em>sometimes</em> before all verbs</i>) builds things, journals, makes videos, plays music, learns, and spends a little too much time in her own head.</p>
        <p className="mb-3">I originally thought my purpose was to share my peculiarly particular way of doing things with others in hopes that someone somewhere will relate or find it useful. Although that may be one of the reasons I'm here, honestly, I haven't figured it all out. I'm a constant work in progress in all aspects of my life so I'm not going to pretend I know exactly what I'm doing.</p>
        <p className="mb-3">What I do know, is that I love to document things and I love to learn from other people. I've written in a diary since I was 12 years old, I capture a lot of digital footage and I also love using technology to help me achieve things I think are cool. The only difference now is that I plan to do this in public. I want to turn the internet back into a place I can come to and learn from others, so I'm starting the only place I really can. With me. I hope you'll come along for the ride.</p>
      </Card>
      <style jsx>{`
      `}</style>
    </div>
  )
}
