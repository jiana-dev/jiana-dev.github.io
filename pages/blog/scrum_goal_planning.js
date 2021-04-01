import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/blogs/scrum_goal_planning.json';

export default function ScrumGoalPlanning() {
  const post =
    <div>
      <p>Welcome back to my brain, friends. The goal of this post is to give you an idea for a <strong>structured way to organize your goals using concepts borrowed from software development processes.</strong></p>
      <p>First, let&#39;s give you some context.</p>
      <p>In software development, there are a lot of different frameworks for bringing an idea to an end product. The one we&#39;ll be talking about is called <strong>Scrum.</strong></p>
      <p><strong>Scrum</strong> (as defined by <a href="https://www.scrum.org/resources/scrum-glossary">the scrum glossary</a>) is a framework to support teams in complex product development. Scrum consists of Scrum Teams and their associated roles, events, artifacts, and rules, as defined in the <a href="https://www.scrumguides.org/">Scrum Guide</a>.</p>
      <p>You don&#39;t need to know much about this other than it is what this whole planning idea is based on. There is so much more to scrum than what I&#39;ll be showing here but you can use this as a starting point and do additional research on how you can leverage it to help you identify, plan, visualize, and achieve your goals.</p>
      <p>In this blog post, I&#39;ll go through an example, to demonstrate how I use these concepts borrowed from scrum to achieve and plan my goals. There are key definitions in the table below.</p>
      <h3 id="how-to-use-scrum-to-plan-your-goals">How To Use Scrum to Plan Your Goals</h3>
      <p>In this example, I&#39;ll be choosing one goal to run through this process but realistically, you&#39;ll want to do this for each thing you dump into your <strong>Backlog</strong>.</p>
      <ol>
        <li><p>Choose how you will measure your time and effort. This will be your <strong>estimation</strong> measurement. In our case, we will use the <strong>Pomodoro Technique</strong> like a <strong>timebox</strong> you give yourself to measure task completion.</p>
          <p><img src="../images/scrum_goal_planning/estimation.png" alt="estimation"/></p>
        </li>
        <li><p>Identify and dump your goals and ideas into your <strong>Backlog</strong> (this is intended to be an ongoing process everytime you think of something new)</p>
          <p><img src="../images/scrum_goal_planning/backlog 1.png" alt="backlog"/></p>
        </li>
      </ol>
      <h6 id="refinement-grooming">Refinement/Grooming</h6>
      <ol start='3'>
        <li>Classify your goals into categories. We&#39;ll use Large, Medium, Small.</li>
        <p><img src="../images/scrum_goal_planning/backlog 2.png" alt="backlog"/></p>
        <li>Prioritize your goals. Choose the ones that are most important to you, as many as you think are achievable within one year, for instance. Order them by perceived impact and desirability.</li>
        <p><img src="../images/scrum_goal_planning/backlog 3.png" alt="backlog"/></p>
        <li>Take the goal and break it down into smaller pieces, preferably one conceptual level down (Large to Medium, Medium to Small).<sup><a href="#cliffnote-1">1</a></sup></li>
        <p><img src="../images/scrum_goal_planning/backlog 4.png" alt="backlog"/></p>
        <li>If needed, break down again until we are at the smallest level. Ensure the goal is measurable by your chosen time in Step 0. <sup><a href="#cliffnote-2">2</a></sup></li>
        <p><img src="../images/scrum_goal_planning/backlog 5.png" alt="backlog"/></p>
        <li>If your Small goal isn&#39;t clear or granular enough, gather <strong>requirements</strong>. <em>What exactly is expected to mark it as <strong>Done</strong>?</em></li>
        <p><img src="../images/scrum_goal_planning/requirements.png" alt="requirements"/></p>
        <li><strong>Estimate</strong> your Small goals in the measurement above using the Step 0 measurement.</li>
        <p><img src="../images/scrum_goal_planning/working backlog.png" alt="working backlog"/></p>
      </ol>
      <h6 id="planning">Planning</h6>
      <ol start='9'>
        <li>Choose your <strong>Sprint</strong> timeline.</li>
        <li>Identify how many of your estimation measurement from Step 0 you will be able to complete in one sprint.</li>
        <p><img src="../images/scrum_goal_planning/sprint timeline.png" alt="sprint timeline"/></p>
        <li>Plan your sprint. Take your small goals and drag and drop into your sprint to build your <strong>Sprint Backlog</strong>.</li>
        <p><img src="../images/scrum_goal_planning/dragdrop.gif" alt="dragdrop"/></p>
        <li>Rinse and Repeat for all goals.</li>
      </ol>
      <h6 id="definitions">Definitions</h6>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Scrum Definition</th>
            <th>Our Definition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Scrum</td>
            <td>A framework to support teams in complex product development. Scrum consists of Scrum Teams and their associated roles, events, artifacts, and rules.</td>
            <td>The framework we&#39;ll be borrowing from Software Development to structure our goal planning process.</td>
          </tr>
          <tr>
            <td>Estimate (n)</td>
            <td>An attribute of a task used to measure its complexity. Example: The task of washing a sink full of dishes has an estimated time of 10 minutes.</td>
            <td>How many pomodoros will it take to complete goal X?</td>
          </tr>
          <tr>
            <td>Timebox</td>
            <td>A predefined length of time you are allocating to a certain task.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Pomodoro Technique</td>
            <td>Not a scrum term, but a viable method for estimation. 25 minutes of focused work followed by a 5 minute break. Example: I estimate this task will take me one pomodoro.</td>
            <td>Our particular chosen method of estimation. Feel free to change this how you see fit.</td>
          </tr>
          <tr>
            <td>Backlog</td>
            <td>A Scrum Artifact that consists of an ordered list of the work to be done in order to create, maintain and sustain a product.</td>
            <td>&quot;Goals and Ideas Backlog&quot; - The place that holds all the things we will achieve.</td>
          </tr>
          <tr>
            <td>Refinement</td>
            <td>The activity in a Sprint through which the Product Owner and the Development Teams add granularity to the Product Backlog.</td>
            <td>Breaking down goals into smaller ones and defining the exact components that will make them up.</td>
          </tr>
          <tr>
            <td>Requirements</td>
            <td>The details of and surrounding the piece of work.</td>
            <td>The details of each goal. Define what is required to mark this goal as completed.</td>
          </tr>
          <tr>
            <td>Done</td>
            <td>The state of work when all the requirements have been met.</td>
            <td>An achieved goal.</td>
          </tr>
          <tr>
            <td>Estimate (v)</td>
            <td>An action done by the team during refinement to capture the complexity of a piece of work using an arbitrary value. See Estimate (n).</td>
            <td>The act of placing a pomodoro value on a goal.</td>
          </tr>
          <tr>
            <td>Sprint</td>
            <td>Scrum Event that is time-boxed to one month or less, that serves as a container for the other Scrum events and activities. Sprints are done consecutively, without intermediate gaps.</td>
            <td>The measure of time we will use to plot and monitor our goals. In the example, I use weekly sprints.</td>
          </tr>
          <tr>
            <td>Sprint Backlog</td>
            <td>Scrum Artifact that provides an overview of the development work to realize a Sprint’s goal, typically a forecast of functionality and the work needed to deliver that functionality. Managed by the Development Team.</td>
            <td>A place to hold the goals we would like to achieve in one sprint.</td>
          </tr>
          <tr>
            <td>Product Owner</td>
            <td>Role in Scrum accountable for maximizing the value of a product, primarily by incrementally managing and expressing business and functional expectations for a product to the Development Team(s).</td>
            <td>This is you! The person who is gathering and prioritizing all of the goals to put in our Backlog.</td>
          </tr>
          <tr>
            <td>Sprint Retrospective</td>
            <td>Scrum Event that is timeboxed to 3 hours, or less, to end a Sprint. It serves for the Scrum Team to inspect the past Sprint and plan for improvements to be enacted during the next Sprint.</td>
            <td>What you can do at the end of each sprint iteration to get better for the next one.</td>
          </tr>
        </tbody>
      </table>
      <p>That concludes the most basic, highest level description of how to use Scrum to break down your goals into manageable chunks. I highly encourage you to play around and choose measurements, estimations, refinement methods, sprint lengths, and backlog breakdowns that work for you. </p>
      <p>At the end of each sprint, there is usually a <strong>Sprint Retrospective</strong>, where you can reflect on the previous sprint in order to do better for the next one. You can use this to become aware of your limitations (using your estimates), and extend this to challenge yourself by increasing the number of Pomodoro you are able to complete in one sprint.</p>
      <p>There are tons of tools and resources you can use to supplement this. For example, I have been using <strong>Notion</strong> to manage my weekly sprints, <strong>BeFocused</strong> to keep track of my pomodoros. At work, I use <strong>Jira</strong>.</p>
      <p>But this is all I could fit into today&#39;s blog post.</p>
      <p>Thanks for reading,</p>
      <p>Jiana</p>
      <h4 id="cliffnotes">Cliffnotes</h4>
      <ol>
        <li><p id='cliffnote-1'>Note: It is okay that some of it is unknown and therefore you can&#39;t break it down. Try not to overplan. The first few broken down goals are good enough for us to  fill in the blanks later.</p></li>
        <li><p id='cliffnote-2'><em>Optional</em>: If you have <strong>complete requirements</strong> for the goal, you have the choice to plot your Big, Medium, and Small goals accordingly in a Calendar to give yourself deadlines. Doing this without complete requirements is dangerous because you might not have enough information to make accurate estimates that truly are realistic within the deadlines.</p></li>
      </ol>
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
