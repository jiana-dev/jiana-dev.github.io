import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/secret_blogs/chapter_2.json';

export default function ChapterTwo() {
  const post =
    <div>
      <h2 className="lead">When I met Stephen, I was still smoking weed everyday.</h2>
      <p>This quickly slowed and came to a stop when I started filling my time with other things. Over time, I learned my first lesson.</p>
      <p><i>Please excuse me because this is going to sound like an attack, but it's really simply what it was for me, so I won't hold back. But if this does feel like an attack, then maybe there's something deeper going on because I'm just words on a page. It's your choice what feelings they elicit.</i></p>
      <blockquote>1. If you’re smoking weed everyday and you’re telling yourself it’s because you enjoy it, it’s because you’re bored.</blockquote>
      <p>You likely haven’t taken the time to identify bigger goals and ambitions, so you fill the time with what is easy, convenient, and satisfying in the moment. This is a habit I stopped unconsciously because of filling my time with more fruitful things, like playing games or spending quality time with my partner. And it helped tremendously that he wasn’t into smoking weed either. In my previous relationship, this <i>was</i> the quality time. Ending the night off with a joint was a ritual. Oh, how the times have changed.</p>
      <p>So weed was over, thank God. But I still had this long-standing nicotine addiction that has been in the making for 7 years now (gross). It was too easy with a vape. I could smoke inside, I could smoke wherever and whenever I wanted. Looking back on it, I can see that I was truly at junkie level. I was taking breaks from social situations to go to the bathroom and "relieve stress". Mind you, stress I wouldn't have had if I just powered through the discomfort. I would have--and every vaper knows what I’m talking about—-a mini heart-attack anytime I thought I misplaced my vape. It was as glued to me as my own hand. I was purchasing four pods a week and wasted thousands of dollars on this disgusting habit.</p>
      <p>
      Until one day Stephen told me he didn’t want me vaping in the condo anymore. He didn’t want the second-hand nicotine vapor around him and the cats. I tried desperately to convince him that second-hand nicotine vapour wasn’t a thing. I tried so hard to cling to my comfort blanket and not be inconvenienced to step outside just to smoke my vape. After all, the convenience was too good that going back to having to “step outside” didn’t seem like an option really. So like the junkie I was, I would take a few drags on my washroom breaks, even at home. I would sometimes not even have to pee but I'd still go, just to get my "fix". I’ll bet I even snuck in a few drags when Stephen looked away. And if he was in another room, forget about it, all rules were thrown out the door. Thinking about it now makes me sick.
      </p>
      <p>
      Completely disrespecting his concerns, I went on like this. I mean, it’s not like I wasn’t trying to stop. I got flavours I didn’t like, I tried limiting myself to only buying once a week, I tried getting lighter nicotine content pods. I was making an effort, or so I thought. But I didn’t really. I had a collection of almost finished pods that I didn’t throw out so that in case I got desperate, I would have something. Every now and then, I would look at my stash of over 100 pods and feel like an actual loser. And everyday, when Stephen or I went to the bathroom in the morning and I would sneak in my morning vape session, I hated myself more and more.
      </p>
      <p>
      I was blatantly disrespecting someone I loved and all for what? An addiction that wasn’t serving me? A choice that was only harming me and those around me? It was only when I felt truly pathetic that my last pod turned into my last pod. I turned 24 and I decided that I’m not doing this anymore. I’m not going to be this person anymore. I read an article that really helped and touched me, but I couldn’t pinpoint why. Here it is: https://www.allencarr.com/easyway-stop-vaping/how-to-quit/
      </p>
      <p>
      Reading what I’ve read and knowing what I know now, it was the emphasis on being a “non-vaper”. The emphasis on the identity rather than the action. I wasn’t trying to be someone who is addicted to nicotine who attempts to curb her cravings and fight her addiction. From that day forward I was a “non-vaper”/“non-smoker”. I’m reluctant to even use the terms because non-smokers don’t even think this way, they are just <i>normal</i>. It gave me hope to know that once I’ve kicked it to the curb, I won’t ever miss it. I won’t miss being a slave to anything, I’ll be a <i>normal person.</i> Finally. After 8 years of doing myself a massive disservice I was finally prioritizing myself, and my health. What a relief. I was finally on my way to breaking even with myself. Back at ground zero.
      </p>
      <p>
      Proud to say I’ve been nicotine free for over a year.
      </p>
      <p>Though I only brought myself back to ground zero, I felt like I was walking on clouds. The positive effects didn't take long to present themselves. I could hang around my family for extended periods of time now. I didn't feel the need to lock myself in my room so I could smoke. I no longer had an excuse to step out of social situations, I just had to face it head on because I threw away my crutch. I could just hang out on the couch like a normal freaking person and not waste time freaking out about my vape falling between the cushions. I could go places with <b>just</b> my phone and my wallet. I never again had to take a trip to the vape store and waste large amounts of money. I never had anything to hide around my family or strangers I'm meeting for the first time. I never again had to worry that my skin wasn't healing properly from a bruise because of a smoking side effect or some other adverse health effects. I never had to look at a cautionary tale of a vape or smoker and worry for my own life. I could finally tell my family doctor, that no, I don't smoke or vape. I no longer have to check off that I was a smoker on any forms. I never again had to stand at a sketchy street corner outside of the building alongside creepy old men who were indulging in the same habit as I. I got to tell people, old and new, that no, I'm not a smoker or a vaper or an anything-er. I'm just Jiana. Making the decision to be a normal freaking person was the best decision I've ever made for myself and I'm running now. I have never looked back and I am running miles and miles away from that girl because I'm finally free.
      </p>
    </div>
  return (
    <div className="container">
      <HeadTag pageTitle={`JIANA - ${postData.title}`}/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <BlogPostHeader title={postData.title} date={postData.date} readTime={postData.readTime} subtitle={postData.subtitle}/>
              { post }
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
