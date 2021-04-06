import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/blogs/productivity_marathon.json';

export default function ProductivityMarathon() {
  const post =
    <div>
      <p>This week, I&#39;ve been struggling a lot with managing my productivity system. It pains me to think about how much time I&#39;ve spent on... tangibly nothing. But I like to believe that if nothing else, I&#39;m feeding my soul and I&#39;d really like to think that I&#39;m taking steps towards developing something that truly works for me.</p>
      <p>I&#39;ve felt like a mess this week when it comes to managing projects I want to complete and everyday tasks. I made a whole plan for the week and followed through on absolutely none of it.</p>
      <p>To give you some context, I recently started dabbling with the app <strong>Notion</strong>, and with the crazy amounts of information out there on it, I felt I would be in good hands to make this my One-Size-Fits-All solution to productivity systems and all I had to do was learn how to use it properly.</p>
      <p>Boy, oh boy was I wrong.</p>
      <p>At first I tried creating Weekly plans, Monthly plans, a daily Dashboard, the whole shebang that they show you on Youtube. But this just didn&#39;t work for me. My weekly plan was taking more time to organize and re-organize to achieve what I really wanted with it and no online template really fit the needs I had. Needless to say, this system was not working for me, in fact, it was the other way around!</p>
      <p>I watched a few Youtube videos on how to use Notion to organize your life, but surprise, surprise! No one has the exact same life and needs as me! (Not only that but Notion was quite slow, and I felt like it was too much overhead for things that are very simple and mundane.) I was thinking about agile methodologies, and scrum, and Pomodoro, and trying to get a grip on how I can incorporate all of these things seamlessly. I was starting to feel an extreme sense of helplessness and I decided I would read the highly referenced book made exactly for this purpose: <strong>Getting Things Done</strong> by David Allen.</p>
      <p>When I started reading, at first I was riddled with <em>Okay, well I knew that.</em>&#39;s and <em>Ah thats an interesting way of putting it, touché!</em>&#39;s. And then as I got further in, I was getting more and more captivated by how I could use these principles in my own life. I started getting ahead of myself. I was so excited about these things he was saying that I prematurely tried developing the system before even getting through the whole chapter.</p>
      <p>Then I started following the workflow diagram from the book and filling in the blanks for my own life. It started like this.</p>
      <p><img src="../images/productivity_marathon/organizing_life.png" alt="organizing_life"/></p>
      <p>I thought okay this isn&#39;t the worst! My <strong>Inbox</strong> is my Drafts, and from there I delegate to the proper places, this is GREAT!</p>
      <p>My thought process went a little something like this: <em>Right! Well everything should have a date if it&#39;s to get done, right?</em> So I started inserting literally everything into my calendar. Even dates that I didn&#39;t know about in the future, journal entries I wanted to write <em>eventually</em> but didn&#39;t know when, I would pop em in as a week long event to indicate to myself, this should be done during this week. <em>Now the only place I had to look was my Calendar!</em> Perfect, right?</p>
      <p>Hell to the no, girl. Once again, I was severely incorrect. I started not really taking my Calendar seriously because some things that were on there weren&#39;t hard deadlines and I could actually just move to another day if I were to do it early or late. When I completed something simple like &quot;Talk to parents&quot;, it just kind of lingered there on my calendar when it felt like it should have been something I could dismiss and check as done.  It no longer became <strong>sacred ground</strong> and I had broken a key principle from the book.</p>
      <p>I went on like this. Thinking up random things about how I wanted my process to be here and there and experimenting for a little while to see if they worked. Nothing was working.</p>
      <p>So I kept reading. and lo and behold, my prayers were answered. <em>Perhaps I should have listened before trying things, huh Jiana?</em></p>
      <p>Anyways, I&#39;ll quit the rambling and just break this down into things I&#39;ve learned and give you the deets on my current system and some insight on how it came to be.</p>
      <ol>
        <li>Calendar should be sacred ground. Only for hard deadlines or booked appointments. If it&#39;s in your calendar, it&#39;s happening.</li>
        <li>In order to relieve your mind, you must build a system that you trust. You must make it so that you know you&#39;ll be reminded of things when they matter, that you&#39;ve captured everything and know where to find it later, and you must regularly review things to make sure they are still working in order to iterate and make it better. If you don&#39;t trust your system, the whole thing falls apart.</li>
        <li>The power of Context Lists. &quot;At home&quot;, &quot;Emails&quot;, &quot;Phone calls&quot;, &quot;Christmas&quot;. Separating actions by context gives you a better sense of control and compartmentalization of your responsibilities.</li>
        <li>The difference between a Project and a Someday/Maybe. A Project can be classified as anything that is a multi-step to-do. &quot;Find a lawyer&quot; is an example. These should be reviewed as regularly as you want to keep tabs on your progress. A Someday/Maybe is something you can&#39;t act on within the near future but would like to remember for the future when you have more X (time, money, a dog, a child).</li>
        <li>The importance of specifying the next action. Our brains are so lazy they want things to be as simple and easy as possible. If you list a multi-step action as a &quot;next action&quot;, by default you will avoid it in favour of simpler things to do and may not get to what you deemed your true priorities for the time.</li>
        <li>Your inbox plays one role and one role only. It is an IN box. Nothing stays in here, everything should be moved into its appropriate place.</li>
        <li>The beauty of checklists. Checklists allow your brain to move on autopilot.</li>
        <li>You must set out everything that needs to be accomplished on a daily, weekly, monthly, x basis. Within your weekly, it is recommended to do a Weekly Review on things in your Someday/Maybe, Projects, etc. </li>
      </ol>
      <p>There is a lot I learned, but let me just show you how I incorporated my learnings into the system I am currently trying out. Here lies my current system.</p>
      <p><img src="../images/productivity_marathon/DigitalOrg.png" alt="DigitalOrg"/></p>
      <p><img src="../images/productivity_marathon/DigitalFiling.png" alt="DigitalFiling"/></p>
      <p><img src="../images/productivity_marathon/Screen Shot 2020-11-22 at 2.06.25 PM.png" alt="Screen Shot 2020-11-22 at 2.06.25 PM"/></p>
      <video src="../images/productivity_marathon/notion.mp4" autoPlay controls></video>

      <video src="../images/productivity_marathon/Reminders.mp4" autoPlay controls></video>
      <br></br>

      <p>I suspect that although my system looks promising to me, I think it&#39;s still far from done. It probably won&#39;t be done for the rest of my life! But for now, here is a snippet in My Productivity Marathon. Don&#39;t you worry, cause we&#39;ll be back.</p>
      <p>Until next time,</p>
      <p>Jiana</p>
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
