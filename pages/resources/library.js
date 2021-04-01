import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/resources/library.json';

export default function Library() {
  const post =
    <div>
      <h6>As of March 7, 2020 9:09AM</h6>
      <p>Check out my <a href="/resources/finance_book_recs" target='_blank'>book list all about Learning about Finances</a>!</p>
      <hr/>
      <h6>As of Saturday December 19, 2020 7:30PM</h6>
      <h4><u>Digital Minimalism by Cal Newport</u></h4>
      <h5><strong>What is it about?</strong></h5>
      <p>Cal Newport presents a philosophy where one incorporates the minimal use of technology to enhance meaning in our lives, rather than determine it. He brings to light the hidden impact of our current digital world. He emphasizes the overwhelming benefits of adopting digital minimalism and the profound impact it has had on those who have adopted the philosophy. He also gives an interesting suggestion for a re-connection to analog activity and it's importance.</p>
      <h5><strong>What it Invoked In Me</strong></h5>
      <ul>
        <li>As a developer, gave me food for thought on a &quot;code of ethics&quot; when thinking about developing applications</li>
        <li>Invoked in me an unspoken commitment to bring true and single value to peoples&#39; lives should I attempt to do so through technology</li>
        <li>Gave me a reason to not always want to be &quot;plugged in&quot;, receiving input, in front of a screen</li>
        <li>Prompted thought about developing my own technology philosophy</li>
        <li>Made me very aware of the danger of distraction a seemingly harmless piece of technology can elicit</li>
        <li>Gave me a reason to favour analog activity and developing a craft, even though it is not improving my general intellectual quotient</li>
        <li>Realization about the importance of social interaction</li>
        <li>Invoked deeper thinking on my bias for technology - Which areas can I limit technology to promote more positivity?</li>
      </ul>

      <h5><strong>Noteworthy Concepts</strong></h5>
      <ul>
        <li>Computers can do so much, they have no longer become a single-use application and that&#39;s what has turned them into greater dangers in our lives</li>
        <li>Connection vs. Conversation<ul>
            <li>Phone office hours</li>
          </ul>
        </li>
        <li>Solitude</li>
        <li>High-quality leisure</li>
        <li>We are not meant to have connection with so many people<ul>
            <li>Social approval nuggets</li>
          </ul>
        </li>
      </ul>

      <h5><strong>Who and When You Should Read This</strong></h5>
      <ul>
        <li>If you&#39;re surrounded by technology 24/7, glued to a screen, but don&#39;t necessarily want to be</li>
        <li>If technology is a gigantic part of your life and you don&#39;t think you could live without it, but you realize it does distract you</li>
        <li>Social media addicts who want to break the habit/addiction</li>
        <li>If you&#39;re a developer, this will give you a nice code of ethics that you might not want to hear when it comes to making the big bucks, but important when it comes to making the world better, or perhaps just not making it worse</li>
      </ul>

      <h4 id="the-creative-habit-by-twyla-tharp"><u>The Creative Habit By Twyla Tharp</u></h4>
      <h5 id="-what-is-it-about-"><strong>What is it about?</strong></h5>
      <p>A book written by a professional dancer on fostering your own creativity, getting your creative gears turning, and understanding more about the process of creation. It also includes valuable words on forgiving yourself where necessary, and ideas on how you can do your best work. She gives practical activities to get you going creatively.</p>
      <h5 id="-what-it-invoked-in-me-"><strong>What it Invoked In Me</strong></h5>
      <p>I didn&#39;t feel like everything in the book applied to me so much but the advice on harnessing creativity were enough to keep me reading this book. It invoked in me a fire to create. It made me want to spend time seeing what I can come up with creatively. Simultaneously makes me want to go go go! But also take the time to really consider the quality of the things I produce. I felt like it pulled out the artist side of me and gave me some good base knowledge on being a creative individual. I glazed over a lot of examples that I didn&#39;t resonate with or relate to as well. I also reserved reading the chapters for my creativity days.</p>
      <h5 id="-noteworthy-concepts-"><strong>Noteworthy Concepts</strong></h5>
      <ul>
        <li>Ch. 5 - Having a project box</li>
        <li>Ch. 6 - Scratching</li>
        <li>Ch. 8 - Spine of a project</li>
        <li>Ch. 9 - Skill</li>
        <li>Ch. 10 - Ruts &amp; grooves<ul>
            <li>Creating a bridge to set yourself up for smooth take-off the next day</li>
          </ul>
        </li>
        <li>Ch. 11 - Failure</li>
      </ul>
      <h5 id="-who-and-when-you-should-read-this-"><strong>Who and When You Should Read This</strong></h5>
      <p>If you have any interest in creative endeavours and honing in on a &quot;craft&quot;, this is for you! Use this when you feel creatively stuck or would love to enhance a skill with some guidance. Allow this to give you a better grasp on creativity and how you can harness it. I think this is very nice for a time when you need some motivation before beginning a project.</p>
      <h4 id="getting-things-done-by-david-allen"><u>Getting Things Done By David Allen</u></h4>
      <h5><strong>What is it about?</strong></h5>
      <ul>
        <li>A methodology to manage your life optimizing for getting things done</li>
        <li>Practical steps and advice you can apply to help you get a handle on your brain.</li>
        <li>Essentially for building a separate brain and ensuring that yours is working optimally for what it is meant to do</li>
        <li>Gives you core concepts, tips and tricks, easily implementable steps to give you an incrementally better grasp on your day-to-day, and so eventually the long term</li>
        <li>The low-level management of tasks to support your desired big picture.</li>
      </ul>
      <h5 id="-what-it-invoked-in-me-"><strong>What it Invoked In Me</strong></h5>
      <ul>
        <li>Organize the constant chaos in my mind about perfecting my productivity system</li>
        <li>Highlight the traps I fall into with productivity</li>
        <li>Sense of relief despite having done things inefficiently for now</li>
        <li>Gives me a forever reference system when it comes to all things life administration</li>
      </ul>
      <h5 id="-noteworthy-concepts-"><strong>Noteworthy Concepts</strong></h5>
      <ul>
        <li>What is the next action?</li>
        <li>&quot;In&quot; box</li>
        <li>Mind like water<ul>
            <li>A mental and emotional state in which your head is clear, able to create and respond freely, unencumbered with distractions and split focus</li>
            <li>Respond to stimulus appropriately</li>
          </ul>
        </li>
        <li>Your mind is for having ideas, not storing them</li>
        <li>The five or six horizons, the low level to the highest levels<ul>
            <li>Calendar/actions</li>
            <li>Projects - open loops</li>
            <li>Areas of focus and acountability</li>
            <li>1-2 year goals objectives</li>
            <li>3-5 year vision</li>
            <li>Purpose and principles</li>
          </ul>
        </li>
      </ul>
      <h5 id="-who-and-when-you-should-read-this-"><strong>Who and When You Should Read This</strong></h5>
      <ul>
        <li>If you have ever felt like your brain is a mess, you have too many things going on to manage</li>
        <li>You aren&#39;t making progress on things you intend to be</li>
        <li>You have lost integrity with yourself due to unfulfilled promises</li>
        <li>You have so many things on your mind</li>
        <li>Your digital and physical world feels cluttered/disorganized and you&#39;ve had enough. Your brain is scattered in 10,000 different places digitally or physically and you want to consolidate it.</li>
        <li>You have a general idea of what it is you should do, but feel disorganized in defining your priorities, values, purpose.</li>
        <li>You&#39;re having difficulty managing day-to-day or remembering important things.</li>
        <li>You don&#39;t have a personal productivity system that you trust and you are holding/remembering things in too many different places that you still feel a mess.</li>
      </ul>
      <h4 id="soft-skills-software-developer-life-manual-by-john-sonmez"><u>Soft Skills - Software Developer Life Manual by John Sonmez</u></h4>
      <h5 id="-what-is-it-about-"><strong>What is it about?</strong></h5>
      <p>Encyclopedia-like handbook heavily applicable to software developers, but can be applicable to anyone. Great advice on things like being more productive, becoming a mentor/mentee, <strong>learning how to learn</strong>, marketing yourself and your skills, basics to investing, fitness, working in a development environment, and just general good life advice.</p>
      <h5 id="-what-it-invoked-in-me-"><strong>What it Invoked In Me</strong></h5>
      <p>Reading this had me nodding along with everything John Sonmez was saying, and taking notes for parts directly applicable to what I want to and am trying to do. I was made aware of the value of things I normally overlook, for example, the importance of teaching, speaking, getting good at presentations. He gave me perhaps one of the most important pieces of life advice I&#39;ve ever gotten: &quot;You only need to be a few steps ahead to teach someone something&quot;. This book really resonated with me and I highly recommend the time investment. Skim over the parts you think you have a good grasp on.</p>
      <h5 id="-noteworthy-concepts-"><strong>Noteworthy Concepts</strong></h5>
      <ul>
        <li>Being a mentor/mentee</li>
        <li>Quota and pomodoro system</li>
        <li>You only need to be a few steps ahead to teach someone something</li>
        <li>Create a learning/self-education plan — create a running list of your knowledge gaps</li>
        <li>The importance of speaking and presentations</li>
        <li>The importance of teaching</li>
        <li>The 10 Step Process to Learning</li>
        <li>How to market yourself</li>
        <li>Working from home advice (Ch. 15)</li>
        <li>Importance of specialization</li>
      </ul>
      <h5 id="-who-and-when-you-should-read-this-"><strong>Who and When You Should Read This</strong></h5>
      <p>Most useful at any point after you&#39;ve already started your career and have your gears going in it. Would also be useful as a student who is closer to finishing school, getting ready to enter the workplace. I think this material is best absorbed when read chunks at a time, especially when the chapter title is immediately relevant to your life.</p>
      <h4 id="four-agreements-by-miguel-ruiz"><u>Four Agreements by Miguel Ruiz</u></h4>
      <h5 id="-what-is-it-about-"><strong>What is it about?</strong></h5>
      <p>Four simple but profound principles that you can incorporate in your everyday life to make it better for yourself.</p>
      <h5 id="-what-it-invoked-in-me-"><strong>What it Invoked In Me</strong></h5>
      <p>Gave me something to track in my bullet journal daily. Four simple principles to live my life and abide by (the four agreements).</p>
      <h5 id="-noteworthy-concepts-"><strong>Noteworthy Concepts</strong></h5>
      <p>All of them! (No assumptions, Don&#39;t take things personally, Do your best, Be impeccable with your word)</p>
      <h5 id="-who-and-when-you-should-read-this-"><strong>Who and When You Should Read This</strong></h5>
      <p>Read at any time and you&#39;ll see yourself trying to apply these things daily. You&#39;ll also be more in tune with yourself for cases when you don&#39;t follow them. This is a pretty quick read that is well worth the insight it delivers.</p>


      <hr/>
      <h6>As of Tuesday, October 13, 2020 9:01PM</h6>
      <table>
        <thead>
          <tr>
            <th>Book</th>
            <th>Overall Impression</th>
            <th>What I think this book invokes</th>
            <th>My recommendation for when I think it&#39;s best to read this</th>
            <th>Noteworthy Concepts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>The Happiness Equation</b> by Neil Pasricha</td>
            <td>Generally good life advice. Unique views on things that can be easily overlooked. Simple ideas and concepts to implement that could inadvertently have a huge impact on your overall happiness as a person. Identify and eliminate less productive uses of time and mental energy.</td>
            <td>Makes you realize what you could be eliminating or doing better to lead to a happier life. Gives you perspective on the simplicity and beauty of life should you choose to look at it that way.</td>
            <td>If you're looking for a burst of sunshine in a book.</td>
            <td>
              <ul>
                <li>All of the diagrams (i.e. Decision Making)</li>
                <li>Partner vs. Your Happiness Matrix</li>
                <li>Never Retire</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><b>7 Habits of Highly Effective People</b> by Stephen Covey</td>
            <td>Eye-opening. Alternative title: How To Be A Better Human Being.</td>
            <td>Makes you take a long, hard look at yourself. Sparks the desire to change what has been ineffective in your life and implement the good. Encourages maturity and leadership.</td>
            <td>A necessity upon maturing into adulthood. Best read when a little bit more mature and ready to be told that everything you&#39;re doing is likely wrong.</td>
            <td>
              <ul>
                <li>Proactive vs. Reactive</li>
                <li>Win/Win Mentality</li>
                <li>Seek to understand then to be understood</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><b>The 4-Hour Workweek</b> by Tim Ferriss</td>
            <td>Very fun and enjoyable read about making sure you&#39;re getting what you want out of life.</td>
            <td>Makes you define and think about big things that you may have been putting off when it comes to your life purpose. Very much makes you feel like it is not only possible to accomplish anything, but it&#39;s &quot;easy&quot; and why haven&#39;t you been doing it already? Makes you want to ditch everything that entails your current life now and live in a foreign country for a little while.</td>
            <td>Any time really. If you&#39;re just entering the workforce, to shield you against working yourself into unhappiness. If you&#39;re steady in it, to propel you into a more exciting version of what success means to you. If you&#39;re still in school, to prepare you for what to prioritize and where to focus your efforts based on what your dreamlines look like. And if you&#39;re none of the above, it&#39;s just a great book to help you define exactly what you want and what it&#39;s going to take for you to get there, with some helpful advice on how you can leverage your time and money to do so.</td>
            <td>
              <ul>
                <li>Dreamlines</li>
                <li>Back of book resources</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><b>Atomic Habits</b> by James Clear</td>
            <td>Humbly written formulaic advice on how you can help yourself get to where you want to be via habits, the essential thing that makes us who we are.</td>
            <td>If you&#39;re already on a good habit trajectory, it makes you want to keep going, and makes little steps not feel meaningless. If you have more bad habits to kick, puts those into perspective for you and makes you want to disassociate with the identity those bad habits may be giving you.</td>
            <td>Any time. Gives you practical steps to rid bad habits and foster good ones, conveyed through a voice filled with motivation and optimism. Classic, feel good book.</td>
            <td>
              <ul>
                <li>The 1% difference</li>
                <li>The ice cube analogy</li>
                <li>Exact steps to building good habits</li>
                <li>Exact steps to breaking bad habits</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><b>Problem Solving 101</b> by Ken Watanabe</td>
            <td>I believe this is a secret weapon book. Puts into words a concept that people try to master and perfect their entire lives. A guide on practical ways to approach the base of every different kind of problem.</td>
            <td>A sense of clarity around the topic of problem-solving. An upgrade in the toolbox of life. With no exaggeration, I feel confident and prepared to tackle any problem life throws at me after reading this book.</td>
            <td>As early as possible. Although written as a children&#39;s book, would be beneficial for anyone who has problems to solve in life. Necessity.</td>
            <td>
              <ul>
                <li>Different types of problem solvers</li>
                <li>Everything in the problem solving toolbox</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><b>Subtle Art of Not Giving a F*ck</b> by Mark Manson</td>
            <td>Humorous, sarcastic, and blunt book to teach you how caring less will free you and make you a happier person.</td>
            <td>A feeling of silliness for caring so much about so much thus far in life. A reality check on how you&#39;ve been living so far.</td>
            <td>Anytime. Especially if you care a lot about what others think.</td>
            <td>
              <ul>
                <li>Feedback Loop from Hell</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><b>The Seven Spiritual Laws of Success</b> by Deepak Chopra</td>
            <td>Quick guidebook on small things you can do to unlock your full potential. Simple, yet profound writing and ideas.</td>
            <td>The desire to be a better person and prioritize easily overlookable life aspects like meditation and generosity.</td>
            <td>Comparable to Think &amp; Grow Rich but communicated in a condensed way with a heavier focus on the spiritual aspect. Short enough to consume easily while still being a heavy hitter.</td>
            <td>
              <ul>
                <li>Importance of meditation and generosity</li>
                <li>What you put into the world is what you&#39;ll receive back from it</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><b>Think &amp; Grow Rich</b> by Napoleon Hill</td>
            <td>Acts like a life handbook to be referenced. Emphasis on your internal power. Can seem woo-woo at first but sticking with it proves well worth it by the end. Very unique concepts, ideas, and lists to refer back to. Almost like a textbook for life. Frequently referenced by many other self-improvement books (Atomic Habits, You are a Badass). Feels like one of the grandfather founders of self-help books.</td>
            <td>Plants deep ideas into your mind that make you question if the author really knows what he&#39;s talking about. But with each chapter, that seed grows into something more powerful and you start truly believing that you can achieve anything you want if you follow the books&#39; thirteen steps. Leaves you feeling winded, incredulous, but convinced at the same time. Also makes you aware of the driving force of different types of fears and allows you to catch yourself when you entertain them.</td>
            <td>Maybe I have been convinced by the book to say this, but I believe this is something that could and should be taught in schools. Earlier awareness about these concepts will be highly beneficial to anyone who reads and internalizes this stuff.</td>
            <td>
              <ul>
                <li>The power of the mind</li>
                <li>Six Basic Fears</li>
                <li>Annual self-review</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><b>How to Win Friends and Influence People</b> by Dale Carnegie</td>
            <td>Great read on how to be outwardly likeable and &quot;get your way&quot; but not in a manipulative way. How to be the bigger person and communicate with others more effectively.</td>
            <td>Makes you more others-centric in your communication with people. Helps you develop core people skills.</td>
            <td>A good book, particularly for after you&#39;ve done inner work. On the same playing field as 7 Habits and Happiness Equation with a focus on how to be a more pleasant person outside of yourself as opposed to within yourself.</td>
            <td>
              <ul>
                <li>Man with umbrella story</li>
                <li>Make it about what you can do for others</li>
                <li>Make people feel special and needed</li>
                <li>Negativity and attacking never got anyone their way</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><b>You are a Badass: How to Stop Doubting Yourself and Start Living an Awesome Life</b> by Jen Sincero</td>
            <td>Feel-good book that will make you feel like you&#39;re worth it and you have someone to relate to in Jen Sincero. A concise combination of concepts from Think &amp; Grow Rich and other self help books with a modern twist. Spiritual aspect but communicated in a way that makes it less woo-woo. Tons of gold mine book recommendations at the end.</td>
            <td>Makes you want to do the self-work. Drills in the idea of tuning in your frequency to match that of the limitless power of our higher being. Light-hearted feel with some very heavy-hitting statements. Makes you want to keep reading with each chapter because each one gives you general good advice and makes you feel so delightful by the end.</td>
            <td>Anytime but especially if you&#39;re feeling down on yourself. May be a repetition of concepts from other books but well worth the overlap.</td>
            <td>
              <ul>
                <li>Raise your frequency</li>
                <li>Identify your stories</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><b>Finding Your Own North Star</b> by Martha Beck</td>
            <td>Exactly what the title states. Martha Beck helps people "design their lives" and she provides a practical workbook that asks unique and illuminating questions to help you discover and find what you're meant to offer the world. Really highlights things about yourself you may have never paid attention to before like how your body feels when you're entertaining or disobeying your true nature.</td>
            <td>Makes you want to dive deep into self discovery to get the most out of the book as possible. Gives you a sense of relief when it comes to big changes in your life. Puts order the chaos of life ups and downs. Makes you really want to honour your true self and no longer give into what external circumstances have deemed you <i>should</i> do.</td>
            <td>The four cycles of change should be read anytime you're going through a life crisis, or are down on yourself because of an unforeseen circumstance. The rest of the book is amazing for the time when you're ramping up to try to figure out what you want to do, how to spend your time, and learning how to trust your instincts. The earlier these concepts are learned, the better! They will lead you to your right path sooner.</td>
            <td>
              <ul>
                <li>Your essential and social self</li>
                <li>Your everybody</li>
                <li>Being highly somatic</li>
                <li>The four cycles of change</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  return (
    <div className="container">
      <HeadTag/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <BlogPostHeader title={postData.title} date={postData.date} readTime={postData.readTime}/>
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
