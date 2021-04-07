import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/blogs/time_is_money.json';

export default function TimeIsMoney() {
  const post =
    <div>
      <p>Until recently, I have been heavily under the mentality that saving money is the most important thing. I mean, don&#39;t get me wrong, I was blessed enough during my childhood to be provided for by my parents. So any money I did make, I was able to spend on my wants, and so I did just that over the years.</p>
      <p>But my primary mentality around money since entering adulthood was to prioritize saving money. What for, well of course for emergencies, the future, for all the things my parents warn me about needing to have oodles and doodles of money for. </p>
      <p>However, this lead to a pretty negative relationship with money. I thought of it as scarce, as the most prized commodity. In turn, leading me to not being as generous as I could have been, quite frugal in the moments where it could  potentially hinder my relationships with people, wasting tons of time on negligible money-related decisions, and in general turning me into a person I didn&#39;t like when it came to the topic of money.</p>
      <p>Thankfully, I&#39;ve always been pretty good about spending for myself on hobbies, like for example, buying a good vlogging camera, or a microphone for singing. But weirdly enough when it came to taking an Uber or doing a 50 minute walk, buying the trusted brand vs. the quality-lacking alternative, purchasing over the counter products from the drugstore, going out of my way to different grocery stores to get the cheapest X, or deciding between replacing an item or doing a difficult repair, I always chose the alternative that made it a little harder for me. So sure, I saved a couple dollars here and there, but in turn I sacrificed my time, my mental effort, my energy, or in the worst case, my health.</p>
      <p>Only recently have I realized the value of money in exchange for time, and peace of mind, and convenience. I was all about the <em>Why would we order in when we can take a 10 minute walk to go grab the food</em> life. And to some extent I still have this mentality. But I&#39;d like to think that I&#39;ve become smarter about my decision to spend money. In favour of the more willy-nilly way.</p>
      <p>I guess simply put, to the old me, money was the highest currency. Now that I&#39;m working full time and can really put a dollar amount to my time, I can see that money is far from the highest currency.</p>
      <p>Here are the things I now measure that have changed my relationship with money:</p>
      <ul>
        <li>Convenience (How much do I not want to do this thing myself?)</li>
        <li>Total Time Involved (How much time do I save if I spend the money?)</li>
        <li>Mental Effort (How much mental effort will this save me?)</li>
        <li>Contribution to happiness (How happy will having this thing make me?)</li>
        <li>Contribution to growth (Will doing this contribute to my growth as an individual?)</li>
        <li>Coming back to think about it (Will I keep thinking about this if I don&#39;t spend on it?)</li>
        <li>Peace of mind (Does this contribute to my peace of mind?)</li>
        <li>Experience/stories (Will this contribute to a cool experience or yield a future story to tell?)</li>
        <li>Energy (How much of my energy will this save me?)</li>
        <li>Ease (How much easier does this make things for me?)</li>
        <li>Showing support (Will this support something important to me?)</li>
        <li>Generosity (Is this a generous act that I will feel good about?)</li>
        <li>Negative effects on others (Is not spending the money negatively affecting others?)</li>
      </ul>
      <p>Simply put, I have somewhat developed this internal scale on whether or not to spend money on something factoring in these considerations. </p>
      <p>I want to clear up that even though I&#39;m &quot;frugal&quot;, I&#39;m almost what I would call fake frugal because sometimes I make impulsive buys, and spend money quite outrageously. But that&#39;s for another topic. That one is like a rehabilitation on impulsive spenders, which have help resources all over the internet on &quot;Should I Buy This&quot;. This is almost the opposite of that. For those that are Savey McSaverson to the point of hindrance and want to be convinced out of it. Of course within whatever is in your means.</p>
      <p>So now that I&#39;ve developed this internal system in my head, I&#39;m going to attempt to follow it up with a program so that you too can have a crutch while in this interim phase of money-healing to make it quicker and easier for you to decide. Or you could simply develop your own internal compass and make snappier decisions, but if not, let me know if you&#39;d like this, and I&#39;ll make it.</p>
      <p>Ta ta for now!</p>
      <p>Jiana</p>
    </div>
  return (
    <>
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
    </>
  )
}
