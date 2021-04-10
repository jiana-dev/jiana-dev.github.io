import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import ResourcePostHeader from '../../components/ResourcePostHeader';
import ResourcePostFooter from '../../components/ResourcePostFooter';

import postData from '../../public/data/resources/library.json';
import styles from '../../components/BlogPost.module.css';

import { getSortedPostsData } from '../../lib/books';
import Book from '../../components/Book';

export default function Library({ allPostsData }) {
  const bookComponents = allPostsData.map(({ id, title, author, topPick, description }) => (
    <Book title={title} author={author} description={description} url={`/resources/library/${id}`} topPick={topPick} key={id}/>))

  const post =
    <div className={styles.postContent}>
      <div className='bookshelf'>
        { bookComponents }
      </div>
      <style jsx>{`
        .bookshelf {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>

  const post2 =
    <>
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
    </>

  return (
    <>
      <HeadTag pageTitle={`JIANA - ${postData.title}`}/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <ResourcePostHeader title={postData.title} date={postData.date} readTime={postData.readTime} subtitle={postData.subtitle}/>
            { post }
            <ResourcePostFooter date={postData.date}/>
          </div>
        </div>
      </div>
      <SubscribeSection/>
      <Loader/>
      <Footer/>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
