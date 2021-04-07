import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/blogs/analog_creation.json';

export default function AnalogCreation() {
  const post =
    <div>
      <p>About two years ago now, I spent a lot of time creating things with my hands. I ventured into crocheting at first, and made a few baskets.</p>
      <span className='image-container'>
        <img src="/images/analog_creation/basket.jpg" alt="basket"/>
      </span>
      <p>I dabbled in clay and made a few figurines. </p>
      <span className='image-container'>
        <img src="/images/analog_creation/elephants.jpg" alt="elephants"/>
      </span>
      <span className='image-container'>
        <img src="/images/analog_creation/ferb.jpg" alt="ferb"/>
      </span>
      <span className='image-container'>
        <img src="/images/analog_creation/baljeet.jpg" alt="baljeet"/>
      </span>
      <p>My usual routine while doing these arts and crafts would be to put on a show in the background, relax, and enjoy using my hands to create something. In real life!</p>
      <p>Now, I know it sounds weird to be so fascinated with this concept but for someone who almost always only builds things digitally, the change in pace was refreshing. The idea of using a picture for reference and bringing something to life with my hands was kind of exhilarating. Albeit, the real life versions I made never looked as good as the reference pictures, but I did get better at making them over time.</p>
      <p>However, over the past two years I kind of just stopped. I stopped making things with my hands because frankly I didn&#39;t feel like it yielded me anything except a cool new figurine or practical jewellery holder. I also didn&#39;t think I was any good at it. My interests shifted and I no longer had the desire to create a new character from my favourite movie or TV show and so I shelfed the clay and the yarn for a while.</p>
      <p>But more and more I&#39;ve been thinking about other things I can do or use to perhaps create another stream of income. And thus, the shelved arts and crafts have resurfaced. </p>
      <p>I don&#39;t quite know what I want to make or sell (or what I could even produce that&#39;s good enough to sell), but yesterday, for the first time in 2 years I picked up my clay and started creating again. And although my craft turned out nothing like the picture, the invincible feeling of &quot;I can make anything!&quot; came back with a vengeance. A billion thoughts came rushing to my head on what I could make (and Pinterest helped too, I guess).</p>
      <blockquote>
      <p>The excitement of analog creation was back!</p>
      </blockquote>
      <p>Now, I&#39;ll post my failure here for a reference point of where I&#39;m at right now. I&#39;m a long way before I can create something good enough to attempt to sell, but if nothing comes out of this experience, I&#39;ve at least re-sparked the joy that comes from creating outside of the digital world.</p>
      <p>Here was the beautiful expectation:</p>
      <span className='image-container'>
        <img src="/images/analog_creation/a885d0ddd531faa88870e6a85db56f34.jpg" alt="toothbrush_holder"/>
      </span>
      <p>And the sad, sad reality:</p>
      <span className='image-container'>
        <img src="/images/analog_creation/my_version.jpg" alt="my_version"/>
      </span>
      <p>Hey, I tried!</p>
      <p>Now, this blog post isn&#39;t just to harp on myself for my lack of creative execution, nor to arbitrarily introduce you to my hobbies outside of tech.</p>
      <p>I think there&#39;s a real certain wonder in using your hands and your physical body to produce something in real life that we so easily forget wrapped up in our digital world. Since high school, I haven&#39;t been put in a setting to exercise creating in real life so I&#39;ve let this skill wither away with time. I just never felt I was as good with it as digital creation, hence why I went into a purely digital field!</p>
      <p>If you&#39;ve been in wrapped up in the digital world for a while, I want to encourage you to think of something tangible you can create. Something you can hold in your hands, or produce with your body (something analog—like music). If you&#39;ve got no ideas, a few (real-life) things I plan to dabble in within the near future are clay, yarn, wood, a guitar!</p>
      <p>Try something out! Just once. If you don&#39;t like it, you can put all the blame on me and bill me for your hours. Just kidding, I don&#39;t think I could actually support that, but I think the sentiment remains.</p>
      <p>In conclusion, as you can tell, from the embarrassing expectation vs. reality picture, I am clearly extremely rusty. In fact, it&#39;s almost anti-proof that I ever had any talent at all in creating with clay, lol. However, I hope you can take this highlight of my shortcomings to give you comfort in knowing that, if you&#39;re extremely bad at the first thing you try to make, don&#39;t worry! I&#39;m likely worse!</p>
      <blockquote>
      <p>We all gotta start somewhere—the important thing is that we just start.</p>
      </blockquote>
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
