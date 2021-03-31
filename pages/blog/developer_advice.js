import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/blogs/developer_advice.json';

export default function DeveloperAdvice() {
  const post =
    <div>
      <p>Hello there, fellow friends and cool people!</p>
      <p>This is the accompanying blog post to my <a href="https://youtu.be/X12FQjqmfuM">three part series on advice I wish I had gotten as a younger developer</a>. I originally planned this to be valuable developer skills and traits, but after filming, I realized that it&#39;s catered more towards those who are just beginning as opposed to intermediates or seniors who likely will already know this stuff.</p>
      <p>Alas, we can only reflect and give advice on our own experiences, right?</p>
      <p>Let&#39;s get into it.</p>
      <h2 id="my-software-development-preconceptions">My Software Development Preconceptions</h2>
      <p>I thought Software Development == Computer Science based on what I learned in school.</p>
      <ul>
        <li>Data structures and algorithms</li>
        <li>Logic, proofs</li>
        <li>Being at least semi-proficient with hardware</li>
      </ul>
      <p>Soon after settling into my first job out of university, I realized that software development is not at all the same as Computer Science. The skills you develop learning Computer Science are sure to help you with development, but are not a necessary prerequisite to do well in it.</p>
      <h2 id="what-i-discovered-is-really-important-as-a-developing-developer">What I Discovered is Really Important as a Developing Developer</h2>
      <ol>
        <li>Improving your problem solving skills<ul>
            <li>Almost every task (not just in development) is a problem to be solved. Get good at this.</li>
            <li>Get to the point where you don&#39;t fear problems because you know you can tackle and overcome every single one of them.</li>
            <li>Never stop training your brain. Iterate and get better at this skill.</li>
            <li>I recommend: <a href="https://www.amazon.ca/Problem-Solving-101-Simple-People/dp/1591842425"><em>Problem Solving 101</em></a> by Ken Watanabe</li>
          </ul>
        </li>
        <li>Asking questions. All the time.<ul>
            <li>Learn from those who have been in your shoes</li>
            <li>There is beauty in the struggle to solve a problem on your own, but there are some tasks that aren&#39;t making you any better or that you&#39;ve spent too much time on already, rendering you truly stuck</li>
            <li>Short-circuit your struggle by leveraging the resources - aka colleagues and peers - around you </li>
            <li>Don&#39;t be afraid to ask people. You&#39;ll be rewarded. If not with the answer, a potential buddy to help you accelerate the path to the answer</li>
          </ul>
        </li>
        <li>Perfecting communication<ul>
            <li>Cater your communication and your language to your audience</li>
            <li>i.e. If you&#39;re speaking with stakeholders about the feature, don&#39;t use lower-level computer science terms. On the other hand, if you&#39;re speaking to a developer, give all the details necessary to truly capture your point</li>
            <li>Keep things at a high (or low, if your audience calls for it) level and on a need-to-know basis. The last thing you want to do is confuse people and make it feel difficult to communicate with you</li>
            <li>Take time to organize your thoughts in a way that they can be communicated simply and effectively</li>
          </ul>
        </li>
        <li>Efficiently asking for help<ul>
            <li><a href="https://xyproblem.info/">XY Problem</a></li>
            <li>Give enough context such that someone can jump into where your head is at</li>
            <li>Make sure you&#39;ve tried everything you think they will initially suggest</li>
            <li><strong>Asking Checklist</strong><ul>
                <li>Is this something that will save me a significant amount of time (and not short me of a valuable learning experience)?</li>
                <li>Did I try everything in my power to find the answers myself?</li>
              </ul>
            </li>
            <li><strong>GIVE EXAMPLES!</strong> This is perhaps the quickest way you can illuminate exactly what your problem is to someone with no context. Don&#39;t be vague and try summarizing it. Give an example right off the bat and things will be much clearer.</li>
          </ul>
        </li>
        <li>Being curious<ul>
            <li>Having an inquiring mind is crucial to improvement</li>
            <li>Dig deep - Build a stronger mental map of what you&#39;re working with to be better for next time</li>
          </ul>
        </li>
        <li>Being a lifelong learner<ul>
            <li>This is crucial to being in the field. If you&#39;re not constantly appreciating with knowledge, you&#39;re depreciating (at least within the tech world).</li>
            <li>Constantly expanding and refining your knowledge ensures your success in this field</li>
          </ul>
        </li>
        <li>Developing a Git/Source Control Proficiency<ul>
            <li>It&#39;s essential to be proficient with a tool you&#39;ll be using everyday</li>
            <li>Upfront learning about this now will save you hours of potential mishaps in this area later</li>
          </ul>
        </li>
        <li>Configuring ideal setup<ul>
            <li>Take the initial time to do this and iterate on it here and there</li>
            <li>A few of my suggestions for tools to use:<ul>
                <li>Vim</li>
                <li>IDEs</li>
                <li>Shortcuts</li>
                <li>Macros</li>
                <li>Database GUI</li>
                <li>Aliases</li>
                <li><a href="https://jonas.github.io/tig/">Tig</a> - A git log visualization</li>
                <li>Terminal - Fuzzy and reverse search</li>
              </ul>
            </li>
            <li>Look for new tools and maximize use of all the ones you have at your disposal</li>
          </ul>
        </li>
        <li>Helping others<ul>
            <li>At my company, we have a weekly hour meeting where developers share learnings and fun, useful things</li>
            <li>As devs, we might have a tendency to learn things and silo into our own corner with our newfound knowledge because we think everyone else must know this already or it&#39;s too small and not worth sharing<ul>
                <li>But chances are that doing a small demo or presentation of it will be worth it because at least one person will learn something new from it. If not directly about what you&#39;re talking about, in the meta-details of the presentation</li>
              </ul>
            </li>
            <li>The benefits of helping others and knowledge sharing:<ul>
                <li>Someone, somewhere is guaranteed to learn something new</li>
                <li>Newer developers will have you as a resource they can go to if they wanted to learn more about the topic you are covering</li>
                <li>Other people will feel free to draw from their own experiences and chime in to add to your points</li>
                <li>The more you share, the more an example will be set to encourage more knowledge sharing (no matter how big or small) among the team</li>
                <li>Other people will get to know you better and feel more of a personal connection to you</li>
              </ul>
            </li>
            <li>I think knowledge sharing like this is what makes the team stronger and better together </li>
          </ul>
        </li>
        <li>Going above and beyond where you can &amp; keeping readability in mind<ol>
            <li>Go above and beyond<ul>
                <li>Don&#39;t be afraid to step outside of your normal work duties</li>
                <li>This is what separates someone good from someone great</li>
                <li>Your care and effort won&#39;t go unnoticed</li>
              </ul>
            </li>
            <li>Keep readability in mind<ul>
                <li>When coding, our audience as developers are developers!</li>
                <li>Evaluate the trade-off between complex, hard-to-read-but-efficient code and simple-to-understand-but-slightly-less-complex code</li>
                <li>Also, write good commit messages where you can</li>
              </ul>
            </li>
          </ol>
        </li>
      </ol>
      <p>So these are just the top things I&#39;ve learned to be important as a developer just starting out. Hopefully this gives you a starting point to becoming a better developer. I stayed away from technical skills because there are tons of better resources out there to give you guidance on that, and I wanted to focus on the more overlooked soft skills in being a developer.</p>
      <p>Hope you enjoyed this anecdotal account of Things I&#39;ve Learned to be Important as a New Developer/Advice I Wish I Had When I Started as a Developer/Valuable New Developer Skills and Traits.</p>
      <p>As you probably could tell. I&#39;ve been struggling with the title of this.</p>
      <p>And don&#39;t forget, if you&#39;re more of a video-learner, watch this in video form <a href="https://youtu.be/X12FQjqmfuM">here</a>!</p>
      <p>Thanks for spending some time with me as always,</p>
      <p>Jiana</p>


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
