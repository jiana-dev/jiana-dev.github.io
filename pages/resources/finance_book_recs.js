import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import ResourcePostHeader from '../../components/ResourcePostHeader';
import Book from '../../components/Book';

import postData from '../../public/data/resources/finance_book_recs.json';
import styles from '../../components/BlogPost.module.css';

import finance_books from '../../data/finance_books.json';

export default function FinanceBookRecs() {
  let bookComponents = finance_books.books.map((book, idx) => {
    return (
      <div key={idx}>
        <Book title={book.title} author={book.author} description={book.description} url={`/resources/finance_books/${book.id}`}/>
      </div>
    )
  });

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
            <ResourcePostHeader title={postData.title} date={postData.date} readTime={postData.readTime} subtitle={postData.subtitle}/>
            { post }
          </div>
        </div>
      </div>
      <SubscribeSection/>
      <Loader/>
      <Footer/>
    </>
  )
}
