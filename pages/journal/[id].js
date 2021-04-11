import HeadTag from '../../components/HeadTag';
import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';
import BlogPostHeader from '../../components/BlogPostHeader';
import dateFormat from 'dateformat';

import { getAllPostIds, getPostData } from '../../lib/dynamic_posts_helper'

const postsDir = 'data/journal_entries';

export default function JournalEntry({ postData }) {
  return (
    <>
      <HeadTag pageTitle={`JIANA - ${postData.title}`}/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <BlogPostHeader title={postData.title} date={postData.date} readTime={postData.readTime} subtitle={postData.subtitle}/>
            <div className='post-data' dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
          </div>
        </div>
        <style jsx>{`
        .container {
          padding: 0em 10em;
        }
        @media (max-width: 600px) {
          .container { padding: 0 2em 0em 2em; }
        }
        .post-data {
          margin-bottom: 5em;
        }
        `}</style>
      </div>
      <SubscribeSection/>
      <Footer/>
    </>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, postsDir)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds(postsDir)
  return {
    paths,
    fallback: false
  }
}

