import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/blogs/napoleon_hill.json';
import styles from '../../components/BlogPost.module.css';

export default function NapoleonHill() {
  const post =
    <div className={styles.postContent}>
      <p><span className={styles.lead}>W</span>ith the end of the insane year that was 2020, I decided to do a Self-Analysis taken straight from Think and Grow Rich! by Napoleon Hill. It gives you a really great self-examination that you can refer to year over year to qualitatively measure improvement. More context is provided in the book&#39;s Epilogue.</p>
      <p>I posted the questions here so that you too can give yourself a reference point for the next self-analysis you do.</p>
      <p>Happy reflecting and Happy New Year!</p>
      <h2 id="self-analysis-test-questions">Self-Analysis Test Questions</h2>
      <ol>
        <li>Do you complain often of feeling bad, and if so, what is the cause?</li>
        <li>Do you find fault with other people at the slightest provocation?</li>
        <li>Do you frequently make mistakes in your work, and if so, why?</li>
        <li>Are you sarcastic and offensive in your conversation?</li>
        <li>Do you deliberately avoid the association of anyone, and if so, why?</li>
        <li>Do you suffer frequently with indigestion? If so, what is the cause?</li>
        <li>Does life seem futile and the future hopeless to you? If so, why?</li>
        <li>Do you like your occupation? If not, why?</li>
        <li>Do you often feel self-pity, and if so, why?</li>
        <li>Are you envious of those who excel you?</li>
        <li>To which do you devote most time, thinking of SUCCESS or of FAILURE?</li>
        <li>Are you gaining or losing self-confidence as you grow older?</li>
        <li>Do you learn something of value from all mistakes?</li>
        <li>Are you permitting some relative or acquaintance to worry you? If so, why?</li>
        <li>Are you sometimes “in the clouds” and at other times “in the depths” of despondency?</li>
        <li>Who has the most inspiring influence upon you? What is the cause?</li>
        <li>Do you tolerate negative or discouraging influences which you can avoid?</li>
        <li>Are you careless of your personal appearance? If so, when and why?</li>
        <li>Have you learned how to drown your troubles by being too busy to be annoyed by them?</li>
        <li>Would you call yourself a “spineless weakling” if you permitted others to do your thinking for you?</li>
        <li>Do you neglect internal bathing until autointoxication makes you ill-tempered and irritable?</li>
        <li>How many preventable disturbances annoy you, and why do you tolerate them?</li>
        <li>Do you resort to liquor, pills, narcotics, or cigarettes to quiet your nerves? If so, why do you not try willpower instead?</li>
        <li>Does anyone nag you, and if so, for what reason?</li>
        <li>Do you have a DEFINITE CHIEF AIM IN LIFE, and if so, what is it and what plan have you for achieving it?</li>
        <li>Do you suffer from any of the Six Basic Fears? If so, which ones?</li>
        <li>Have you a method by which you can shield yourself against the negative influence of others?</li>
        <li>Do you make deliberate use of autosuggestion to make your mind positive?</li>
        <li>Which do you value most, your material possessions or your privilege of controlling your own thoughts?</li>
        <li>Are you easily influenced by others, against your own judgment?</li>
        <li>Has today added anything of value to your stock of knowledge or state of mind?</li>
        <li>Do you face squarely the circumstances which make you unhappy, or do you sidestep the responsibility?</li>
        <li>Do you analyze all mistakes and failures and try to profit by them, or do you take the attitude that this is not your duty?</li>
        <li>Can you name three of your most damaging weaknesses? What are you doing to correct them?</li>
        <li>Do you encourage other people to bring their worries to you for sympathy?</li>
        <li>Do you choose, from your daily experiences, lessons or influences which aid in your personal advancement?</li>
        <li>Does your presence have a negative influence on other people as a rule?</li>
        <li>What habits of other people annoy you most?</li>
        <li>Do you form your own opinions, or permit yourself to be influenced by other people?</li>
        <li>Have you learned how to create a mental state of mind with which you can shield yourself against all discouraging influences?</li>
        <li>Does your occupation inspire you with faith and hope?</li>
        <li>Are you conscious of possessing spiritual forces of sufficient power to enable you to keep your mind free from all forms of FEAR?</li>
        <li>Does your religion help you to keep your own mind positive?</li>
        <li>Do you feel it your duty to share other people’s worries? If so, why?</li>
        <li>If you believe that birds of a feather flock together, what have you learned about yourself by studying the friends whom you attract?</li>
        <li>What connection, if any, do you see between the people with whom you associate most closely and any unhappiness you may experience?</li>
        <li>Could it be possible that some person whom you consider to be a friend is, in reality, your worst enemy because of his or her negative influence on your mind?</li>
        <li>By what rules do you judge who is helpful and who is damaging to you?</li>
        <li>Are your intimate associates mentally superior or inferior to you?</li>
        <li>How much time out of every 24 hours do you devote to:
          <ul>
            <li>your occupation</li>
            <li>sleep</li>
            <li>play and relaxation</li>
            <li>acquiring useful knowledge</li>
            <li>plain waste</li>
          </ul>
        </li>
        <li>Who among your acquaintances:
          <ul>
            <li>encourages you most</li>
            <li>cautions you most</li>
            <li>discourages you most</li>
            <li>helps you most in other ways</li>
          </ul>
        </li>
        <li>What is your greatest worry? Why do you tolerate it?</li>
        <li>When others offer you free, unsolicited advice, do you accept it without question or analyze their motive?</li>
        <li>What, above all else, do you most DESIRE? Do you intend to acquire it? Are you willing to subordinate all other desires for this one? How much time daily do you devote to acquiring it?</li>
        <li>Do you change your mind often? If so, why?</li>
        <li>Do you usually finish everything you begin?</li>
        <li>Are you easily impressed by other people’s business or professional titles, college degrees, or wealth?</li>
        <li>Are you easily influenced by what other people think or say of you?</li>
        <li>Do you cater to people because of their social or financial status?</li>
        <li>Whom do you believe to be the greatest person living? In what respect is this person superior to yourself?</li>
        <li>How much time have you devoted to studying and answering these questions? (At least one day is necessary for the thoughtful analysis and the full answering of the entire list.)</li>
      </ol>
      <p>For more context, go to the Epilogue for more context or with the e-book, search this:</p>
      <p>Study the questions carefully, come back to them once each week for several months, and be astounded at the amount of additional knowledge of great value to yourself you will have gained by the simple method of answering the questions truthfully</p>
      <br/>
      <p>Sincerely,</p>
      <p>Your fellow introvert</p>
      <style jsx>{`
        li {
          font-size: large;
        }
      `}</style>
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
