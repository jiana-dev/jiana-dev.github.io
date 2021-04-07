import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/blogs/github_gems_mos.json';

export default function GithubGemsMos() {
  const post =
    <div>
      <p>
      Whenever I&#39;m looking for a particular software to help me do something, I always look to the most advertised and popular option that shows up in my Google search results first.
      </p>
      <p>This often leads to me finding software that fits my needs entirely, but with a cost. Don&#39;t get me wrong, I&#39;m happy to pay for software that I think is truly outstanding. That I see the complete need for using everyday, is well reviewed, and well-worth supporting the developers and team that made it.</p>
      <p>However, when I can, I like to find free alternatives as much as possible. <em>Call me cheap, because it&#39;s true. I am quite frugal.</em> This isn&#39;t always easy as some apps are very specialized and free versions are limited and just not as good. I think most people are like me in this sense, where of course, they&#39;re happy to pay if they need to but would love a free alternative.</p>
      <p><strong>Cue Github.</strong></p>
      <p>I feel like most people who aren&#39;t as tech-savvy or unfamiliar with Github, wouldn&#39;t be drawn to exploring what it has to offer. But boy, if that sounds like you, you are missing out on an entire world of hidden software and add-on gems!</p>
      <p>Let me give y&#39;all a lil bit of context.</p>
      <p>One Saturday afternoon, the scroll on my mouse was acting wonky. I don&#39;t use an Apple Magic Mouse or Mac trackpad because I think those tools are far too expensive for what they are. They&#39;re the kind of things that would be nice and luxurious to have, but my regular ol&#39; mouse is doing just fine for the job. Until it wasn&#39;t. A couple weeks ago, my scroll was acting super jumpy and not smooth. My scrolling experience had gone from acceptable to unbearable before I had time to notice any gradual degradation. Honestly, I still don&#39;t know what happened there. All I knew was that I had to fix the problem.</p>
      <p>After trying all the hardware tricks (blowing the dust out, resetting, changing the battery), I looked for any software alternatives to help fix my problem. People everywhere seemed to have the same problem, but no tangible solutions stated. I was pointed in the direction of this application called <strong>SmoothScroll</strong> which made the mouse scroll an animated smooth scrolling motion rather than a block-y scroll. Even though that&#39;s not particularly what I wanted (I just wanted the mouse scroll not to be jumpy-it was scrolling a tiny bit up for every continuous scroll down I did), I tried it out.</p>
      <p>I downloaded it, started using it, and was pleasantly surprised! This was working! Even though it didn&#39;t directly fix my problem, it solved it in a round-about way, and I wasn&#39;t seeing that crazy mouse jumpiness anymore. Then I saw it. <strong>20 days left in trial</strong>. <em>Ugh</em>.</p>
      <p>I knew this was likely a fairly simple thing to code, this smooth scrolling feature. Why did they have to mark it up like that? I looked online and people gave it rave reviews, but I wasn&#39;t convinced. That&#39;s when I saw another alternative, <strong>Smooze</strong>. Someone had posted it on Reddit, and I think it was the developer, so I thought <em>Oh! Sweet! That will probably be free because it&#39;ll be less well-known.</em> But then I saw the words trial again and continued on my search.</p>
      <p>I don&#39;t know how I got there, but somewhere along my hunt, I was led to Github. People were linking <a href="https://github.com/Caldis/Mos">Mos</a>. I took a quick peak, and didn&#39;t understand a thing because it wasn&#39;t English, but from the comments, it looked like this could work. So I <code>brew install</code>&#39;d that shiz and tested it out for myself.</p>
      <p>OMG It was exactly what I was looking for! And they thought of everything! They even solved my problem of having to check and uncheck <strong>Reverse Direction</strong> everytime I plugged my mouse back in (which <strong>BetterTouchTool</strong> also does I believe).</p>
      <p><img src="../images/github-gems/mos/Screen Shot 2020-11-29 at 7.48.39 PM.png" alt="Screen Shot 2020-11-29 at 7.48.39 PM"/></p>
      <p><img src="../images/github-gems/mos/Screen Shot 2020-11-29 at 7.48.50 PM.png" alt="Screen Shot 2020-11-29 at 7.48.50 PM"/></p>
      <p><img src="../images/github-gems/mos/Screen Shot 2020-11-29 at 7.49.01 PM.png" alt="Screen Shot 2020-11-29 at 7.49.01 PM"/></p>
      <p>I was in awe. Github strikes again.</p>
      <p>The sheer awesomeness of open source software was enough to make me write this blog post. I just find it amazing that there are all of these people loving and rating <strong>SmoothScroll</strong> and <strong>Smooze</strong> who might not know that this amazingly created free alternative exists! Now perhaps I am being narrow minded, and those apps have something to offer that <a href="https://github.com/Caldis/Mos"><strong>Mos</strong></a> doesn&#39;t, but nonetheless, this post is mostly about bringing awareness to the resources <em>everyone</em> has available to them through Github!</p>
      <p>All it takes is going a little bit out of your comfort zone to figure out how to clone/get something onto your computer, and then it functions just like a normal app would. So this is like a PSA not to shy away from Github or other resource hubs that might not be familiar to you. You might be missing out on a whole world of software opportunities!</p>
      <p>Regardless, I love <a href="https://github.com/Caldis/Mos"><strong>Mos</strong></a>. You can open it on startup, choose exception applications you don&#39;t want smooth scrolling on, and even configure the step, speed, and duration on certain applications. Wow. <a href="https://github.com/Caldis/Mos/commits?author=Caldis">Caldis</a>, you have truly outdone yourself here. Open source too!? Round of applause, honestly. This made me that much more happy for contributing to this year&#39;s <a href="https://hacktoberfest.digitalocean.com/">Hacktoberfest</a> (<em>which I was really, really proud of by the way heh, just wanted to share that.</em>)</p>
      <p>I think I&#39;ve got my message across. Use Github. Support open source. Don&#39;t limit yourself.</p>
      <p>With lots of love,</p>
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
