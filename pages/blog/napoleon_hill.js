import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/blogs/napoleon_hill.json';

export default function NapoleonHill() {
  const post =
    <div>
      <p>With the end of the insane year that was 2020, I decided to do a Self-Analysis taken straight from Think and Grow Rich! by Napoleon Hill. It gives you a really great self-examination that you can refer to year over year to qualitatively measure improvement. More context is provided in the book&#39;s Epilogue.</p>
      <p>I posted the questions here so that you too can give yourself a reference point for the next self-analysis you do.</p>
      <p>Happy reflecting and Happy New Year!</p>
      <h1 id="self-analysis-test-questions">Self-Analysis Test Questions</h1>
      <ol>
        <li><em>Do you complain often of feeling bad, and if so, what is the cause?</em></li>
        <li><em>Do you find fault with other people at the slightest provocation?</em></li>
        <li><em>Do you frequently make mistakes in your work, and if so, why?</em></li>
        <li><em>Are you sarcastic and offensive in your conversation?</em></li>
        <li><em>Do you deliberately avoid the association of anyone, and if so, why?</em></li>
        <li><em>Do you suffer frequently with indigestion? If so, what is the cause?</em></li>
        <li><em>Does life seem futile and the future hopeless to you? If so, why?</em></li>
        <li><em>Do you like your occupation? If not, why?</em></li>
        <li><em>Do you often feel self-pity, and if so, why?</em></li>
        <li><em>Are you envious of those who excel you?</em></li>
        <li><em>To which do you devote most time, thinking of SUCCESS or of FAILURE?</em></li>
        <li><em>Are you gaining or losing self-confidence as you grow older?</em></li>
        <li><em>Do you learn something of value from all mistakes?</em></li>
        <li><em>Are you permitting some relative or acquaintance to worry you? If so, why?</em></li>
        <li><em>Are you sometimes “in the clouds” and at other times “in the depths” of despondency?</em></li>
        <li><em>Who has the most inspiring influence upon you? What is the cause?</em></li>
        <li><em>Do you tolerate negative or discouraging influences which you can avoid?</em></li>
        <li><em>Are you careless of your personal appearance? If so, when and why?</em></li>
        <li><em>Have you learned how to drown your troubles by being too busy to be annoyed by them?</em></li>
        <li><em>Would you call yourself a “spineless weakling” if you permitted others to do your thinking for you?</em></li>
        <li><em>Do you neglect internal bathing until autointoxication makes you ill-tempered and irritable?</em></li>
        <li><em>How many preventable disturbances annoy you, and why do you tolerate them?</em></li>
        <li><em>Do you resort to liquor, pills, narcotics, or cigarettes to quiet your nerves? If so, why do you not try willpower instead?</em></li>
        <li><em>Does anyone nag you, and if so, for what reason?</em></li>
        <li><em>Do you have a DEFINITE CHIEF AIM IN LIFE, and if so, what is it and what plan have you for achieving it?</em></li>
        <li><em>Do you suffer from any of the Six Basic Fears? If so, which ones?</em></li>
        <li><em>Have you a method by which you can shield yourself against the negative influence of others?</em></li>
        <li><em>Do you make deliberate use of autosuggestion to make your mind positive?</em></li>
        <li><em>Which do you value most, your material possessions or your privilege of controlling your own thoughts?</em></li>
        <li><em>Are you easily influenced by others, against your own judgment?</em></li>
        <li><em>Has today added anything of value to your stock of knowledge or state of mind?</em></li>
        <li><em>Do you face squarely the circumstances which make you unhappy, or do you sidestep the responsibility?</em></li>
        <li><em>Do you analyze all mistakes and failures and try to profit by them, or do you take the attitude that this is not your duty?</em></li>
        <li><em>Can you name three of your most damaging weaknesses? What are you doing to correct them?</em></li>
        <li><em>Do you encourage other people to bring their worries to you for sympathy?</em></li>
        <li><em>Do you choose, from your daily experiences, lessons or influences which aid in your personal advancement?</em></li>
        <li><em>Does your presence have a negative influence on other people as a rule?</em></li>
        <li><em>What habits of other people annoy you most?</em></li>
        <li><em>Do you form your own opinions, or permit yourself to be influenced by other people?</em></li>
        <li><em>Have you learned how to create a mental state of mind with which you can shield yourself against all discouraging influences?</em></li>
        <li><em>Does your occupation inspire you with faith and hope?</em></li>
        <li><em>Are you conscious of possessing spiritual forces of sufficient power to enable you to keep your mind free from all forms of FEAR?</em></li>
        <li><em>Does your religion help you to keep your own mind positive?</em></li>
        <li><em>Do you feel it your duty to share other people’s worries? If so, why?</em></li>
        <li><em>If you believe that birds of a feather flock together, what have you learned about yourself by studying the friends whom you attract?</em></li>
        <li><em>What connection, if any, do you see between the people with whom you associate most closely and any unhappiness you may experience?</em></li>
        <li><em>Could it be possible that some person whom you consider to be a friend is, in reality, your worst enemy because of his or her negative influence on your mind?</em></li>
        <li><em>By what rules do you judge who is helpful and who is damaging to you?</em></li>
        <li><em>Are your intimate associates mentally superior or inferior to you?</em></li>
        <li><em>How much time out of every 24 hours do you devote to:</em><ul>
            <li><em>your occupation</em></li>
            <li><em>sleep</em></li>
            <li><em>play and relaxation</em></li>
            <li><em>acquiring useful knowledge</em></li>
            <li><em>plain waste</em></li>
          </ul>
        </li>
        <li><em>Who among your acquaintances:</em><ul>
            <li><em>encourages you most</em></li>
            <li><em>cautions you most</em></li>
            <li><em>discourages you most</em></li>
            <li><em>helps you most in other ways</em></li>
          </ul>
        </li>
        <li><em>What is your greatest worry? Why do you tolerate it?</em></li>
        <li><em>When others offer you free, unsolicited advice, do you accept it without question or analyze their motive?</em></li>
        <li><em>What, above all else, do you most DESIRE? Do you intend to acquire it? Are you willing to subordinate all other desires for this one? How much time daily do you devote to acquiring it?</em></li>
        <li><em>Do you change your mind often? If so, why?</em></li>
        <li><em>Do you usually finish everything you begin?</em></li>
        <li><em>Are you easily impressed by other people’s business or professional titles, college degrees, or wealth?</em></li>
        <li><em>Are you easily influenced by what other people think or say of you?</em></li>
        <li><em>Do you cater to people because of their social or financial status?</em></li>
        <li><em>Whom do you believe to be the greatest person living? In what respect is this person superior to yourself?</em></li>
        <li><em>How much time have you devoted to studying and answering these questions? (At least one day is necessary for the thoughtful analysis and the full answering of the entire list.)</em></li>
      </ol>
      <p>For more context, go to the Epilogue for more context or with the e-book, search this:</p>
      <p><em>Study the questions carefully, come back to them once each week for several months, and be astounded at the amount of additional knowledge of great value to yourself you will have gained by the simple method of answering the questions truthfully</em></p>
      <p>Sincerely,
      Your fellow introvert</p>

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
