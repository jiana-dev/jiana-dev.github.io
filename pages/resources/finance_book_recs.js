import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/resources/finance_book_recs.json';
import styles from '../../components/BlogPost.module.css';

export default function FinanceBookRecs() {
  const post =
  <div className={styles.postContent}>
    <div className="row">
      <div className="column book-title">
        <h3><b>I Will Teach You To Be Rich</b></h3> 
        by Ramit Sethi
      </div>
      <div className="column">
        <h6 className="book-info-heading">What is it about?</h6>
        <ul className="book-info">
          <li>A cheeky intro to finances</li>
          <li>Practical steps to take to get your finances in order</li>
          <li>One-time setup to optimize your financial system - credit cards, HISA, retirement accounts, investing accounts, tax-free registered accounts</li>
          <li>An alternate approach to budgeting → conscious spending</li>
          <li>Introduction to self-directed investing</li>
        </ul>
        <h6 className="book-info-heading">What it invoked in me?</h6>
        <ul className="book-info">
          <li>Gave me the spark I needed to start getting a handle on my investments</li>
          <li>Invoked a rehaul in my budget, tracking my spending, and being realistic about money</li>
          <li>Was a gateway to learning more about investing</li>
          <li>I also followed all the steps!</li>
        </ul>
        <h6 className="book-info-heading">Noteworthy Concepts</h6>
        <ul className="book-info">
          <li>Some good asset allocation portfolio recommendations for investing</li>
          <li>Being annoying to get fees reduced</li>
          <li>Common questions asked when it comes to retirement accounts, how you should pay down debt, recommendations for millenial common scenarios</li>
          <li>Easy to understand steps to actually getting things right with finances</li>
          <li>How going above and beyond gets you places</li>
        </ul>
        <h6 className="book-info-heading">Who and when I think you should read this</h6>
        <ul className="book-info">
          <li>Great beginner introduction finance book</li>
          <li>If you don&#39;t know much of anything when it comes to money but you want to dip your feet in the water</li>
          <li>If you work well with practical steps and are ready to implement them to get your money working for you better</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="column book-title">
        <h3><b>Millionaire Teacher</b></h3> 
        by Andrew Hallam
      </div>
      <div className="column">
        <h6 className="book-info-heading">What is it about?</h6>
        <ul className="book-info">
          <li>A set of core nine rules of wealth you should have learned in school</li>
          <li>A good introduction to being more financially responsible and pitfalls of financial advisers and mutual funds</li>
          <li>Portfolio allocation recommendations</li>
        </ul>
        <h6 className="book-info-heading">What it invoked in me?</h6>
        <ul className="book-info">
          <li>Pointed me to many other resources</li>
          <li>Made me aware of the benefits of index funds</li>
          <li>Like a deeper pry into the investment chapters of I Will Teach You To Be Rich</li>
          <li>Made me feel more financially competent, but still not a holistic view</li>
        </ul>
        <h6 className="book-info-heading">Noteworthy Concepts</h6>
        <ul className="book-info">
          <li>His definition of wealth - to have enough money to never have to work again and investments that can provide you with twice the level of your country&#39;s median household income over a lifetime</li>
          <li>Adjusting your mentality around money — not overpaying for things you don&#39;t need</li>
          <li>Thomas Stanley study done on educated professionals in their 40s and 50s found that receiving financial handouts hinders a person&#39;s ability to create wealth</li>
          <li>Start investing early</li>
          <li>On average, investorys who buy and sell shares quickly don&#39;t tend to make profits</li>
          <li>Intro to &quot;reversion to the mean&quot;</li>
          <li>Tax consequences of a taxable account</li>
          <li>Includes finding that earlier lump sum investments usually win so it is good to invest as soon as you have the money (this is in contrast to dollar-cost averaging)</li>
        </ul>
        <h6 className="book-info-heading">Who and when I think you should read this</h6>
        <ul className="book-info">
          <li>Newbie to financial literacy</li>
          <li>Or if you can skim through the parts you may already know</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="column book-title">
        <h3><b>Rich Dad, Poor Dad</b></h3> 
        by Robert Kiyosaki
      </div>
      <div className="column">
        <h6 className="book-info-heading">What is it about?</h6>
        <ul className="book-info">
          <li>The Bible of Financial Literacy</li>
          <li>Framework and mindset for how to approach money</li>
          <li>How to think like a winner and be smart (not just in money)</li>
          <li>How the traditional path is rarely the best path for you</li>
        </ul>
        <h6 className="book-info-heading">What it invoked in me?</h6>
        <ul className="book-info">
          <li>Made me want to search far and wide for assets as opposed to liabilities which are all I have right now</li>
          <li>I&#39;ve developed this notion of only financing my &quot;wants&quot; through other means than my full-time employment income</li>
          <li>Pushed me to gain more streams of income</li>
          <li>Made me want to stop spending in silly places and take time to become financially literate by the definitions of the book</li>
          <li>Made me want to generalize and spend money to learn as many new and broad things as opposed to specializing</li>
          <li>Made me realize I think like a loser a lot</li>
          <li>Put into perspective that mistakes are required in order to make progress</li>
        </ul>
        <h6 className="book-info-heading">Noteworthy Concepts</h6>
        <ul className="book-info">
          <li>Generalize, don&#39;t specialize, go deep and broad</li>
          <li>The four facets to financial literacy</li>
          <li>Financial aptitude</li>
          <li>A winner&#39;s and loser&#39;s mentality</li>
          <li>Importance of working to learn, not working to earn</li>
          <li>How traditional education rewards less mistakes and how that ultimately hurts those &quot;A&quot; students</li>
        </ul>
        <h6 className="book-info-heading">Who and when I think you should read this</h6>
        <ul className="book-info">
          <li>Anytime in life, but the earlier the better!</li>
          <li>I think this is required reading for everyone</li>
          <li>If you need encouragement pursuing an untraditional path</li>
          <li>If you want to have your wits about you when it comes to money</li>
          <li>If you are a frivolous spender and are ready to be put in your place lol</li>
          <li>If you consider yourself an &quot;A&quot; student but you still feel lost when it comes to money</li>
          <li>If you&#39;ve been brought up with the expectation of getting a good education and stable career in order to be successful</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="column book-title">
        <h3><b>The Total Money Makeover</b></h3> 
        by Dave Ramsey
      </div>
      <div className="column">
        <h6 className="book-info-heading">What is it about?</h6>
        <ul className="book-info">
          <li>Getting your money in order step by step, beginning from the person in the worst shape possible (ex. huge credit card debts, no emergency savings)</li>
          <li>How to think about money and not make silly mistakes with it</li>
        </ul>
        <h6 className="book-info-heading">What it invoked in me?</h6>
        <ul className="book-info">
          <li>Made me realize the things I&#39;ve taken for granted with my money and be thankful for the lessons I&#39;ve learned through my parents on managing it</li>
          <li>Was a good wake-up call on smaller things like spending extravagant amounts for things you don&#39;t need</li>
          <li>The preachiness of the audiobook, although at times was too much, was a nice fire under me for getting my finances together and it was enjoyable to listen to a professional speak about the topic in general</li>
        </ul>
        <h6 className="book-info-heading">Noteworthy Concepts</h6>
        <ul className="book-info">
          <li>Debt snowball method</li>
          <li>Don&#39;t buy things you can&#39;t afford just out of ego (like a car)</li>
          <li>Importance of an emergency fund and keeping it separate from everything else</li>
          <li>Importance of investing for yourself and your kids</li>
          <li>Don&#39;t just pay off your home mortgage as fast as you can — a paid off house with no investments means you&#39;ll just have to sell the house in order to get by</li>
        </ul>
        <h6 className="book-info-heading">Who and when I think you should read this</h6>
        <ul className="book-info">
          <li>I listened as an audiobook so my experience may be somewhat different</li>
          <li>Great if you are bad with money and don&#39;t have emergency funds, or are in deep debt</li>
          <li>Still good if you are in good financial shape to give you a guideline for how you should be thinking about money</li>
          <li>Has a very strong opinionated undertone but is still effective</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="column book-title">
        <h3><b>The Little Book of Common Sense Investing</b></h3> 
        by John Bogle
      </div>
      <div className="column">
        <h6 className="book-info-heading">What is it about?</h6>
        <ul className="book-info">
          <li>A book by the creator of index funds making his case about how index funds are superior to all!</li>
          <li>Half kidding, but it&#39;s mostly about the emphasis on the advantage over index funds to anything else with mathematical figures to back it up</li>
          <li>Sparked my interest to start looking into key numbers like P/E ratios for companies</li>
          <li>Pushed me to not want to participate in an actively managed mutual fund anymore</li>
        </ul>
        <h6 className="book-info-heading">What it invoked in me?</h6>
        <ul className="book-info">
          <li>Sparked my interest to start looking into key numbers like P/E ratios for companies</li>
          <li>Pushed me to not want to participate in an actively managed mutual fund anymore</li>
        </ul>
        <h6 className="book-info-heading">Noteworthy Concepts</h6>
        <ul className="book-info">
          <li>Impact of P/E ratio</li>
          <li>How fees make returns a lot less than they appear to be</li>
          <li>What speculative return does for overall investment returns (reversion to the mean)</li>
          <li>Yes, index funds will yield you the average return but it is far better than the infinitely worse alternative actions you could take</li>
          <li>Smart beta ETFs are more new-age, but might not be the best</li>
          <li>Use of many common investment terminology, price-earnings ratio, dividend yield, etc.</li>
        </ul>
        <h6 className="book-info-heading">Who and when I think you should read this</h6>
        <ul className="book-info">
          <li>If you have a financial advisor, want to get more in depth about DIY investing, and need something to push you to move to index funds</li>
          <li>You want to get more comfortable with financial terms and concepts</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="column book-title">
        <h3><b>One Up On Wall Street</b></h3> 
        by Peter Lynch
      </div>
      <div className="column">
        <h6 className="book-info-heading">What is it about?</h6>
        <ul className="book-info">
          <li>A guide to learning how to choose which stocks to invest in</li>
          <li>An expert talking about his experience with choosing the right and wrong stocks and how he arrived at his conclusions</li>
        </ul>
        <h6 className="book-info-heading">What it invoked in me?</h6>
        <ul className="book-info">
          <li>Gave me a much deeper understanding of the evaluation of a company</li>
          <li>Gave me a great reference handbook for when I would like to invest in individual stocks</li>
        </ul>
        <h6 className="book-info-heading">Noteworthy Concepts</h6>
        <ul className="book-info">
          <li>The numbers to look at to evaluate a company&#39;s worth</li>
          <li>How to flag a stock to be interested in</li>
          <li>The type of temperament you need to be an investor</li>
          <li>How to categorize companies and therefore adjust expectation on how it performs</li>
          <li>When to buy and sell stocks</li>
          <li>Criteria for picking a good stock &amp; stocks he&#39;d avoid</li>
          <li>A numbers-based approach to determining if a stock is over- or under-valued</li>
        </ul>
        <h6 className="book-info-heading">Who and when I think you should read this</h6>
        <ul className="book-info">
          <li>Prerequisite if you are planning to invest in individual stocks
            <ul>
              <li>He says only if you already have a home or mortgage</li>
              <li>Chapter 8 - The perfect Stock</li>
              <li>Chapter 9 - Avoid stocks</li>
              <li>Chapter 11 - The Two Minute Drill</li>
              <li>Chapter 13 - Famous numbers</li>
              <li>Chapter 17 - Buying and selling</li>
            </ul>
          </li>
          <li>If you already dabble in the stock market
            <ul>
              <li>Chapter 7 - Categories of companies</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
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
