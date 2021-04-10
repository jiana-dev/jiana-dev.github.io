import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import ResourcePostHeader from '../../components/ResourcePostHeader';
import ResourcePostFooter from '../../components/ResourcePostFooter';
import Book from '../../components/Book';

import postData from '../../public/data/resources/finance_books.json';
import styles from '../../components/BlogPost.module.css';

import { getSortedPostsData } from '../../lib/dynamic_posts_helper';

export default function FinanceBookRecs({ allPostsData }) {
  const bookComponents = allPostsData.map(({ id, title, author, topPick, description }) => (
    <Book title={title} author={author} description={description} url={`/resources/finance_books/${id}`} topPick={topPick} key={id}/>))

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

  return (
    <>
      <HeadTag pageTitle={`JIANA - ${postData.title}`}/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <ResourcePostHeader title={postData.title} subtitle={postData.subtitle}/>
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
  const allPostsData = getSortedPostsData('data/finance_books')
  return {
    props: {
      allPostsData
    }
  }
}
