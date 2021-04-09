import HeadTag from '../../../components/HeadTag';
import Header from '../../../components/Header';
import SubscribeSection from '../../../components/Subscribe';
import Loader from '../../../components/Loader';
import Footer from '../../../components/Footer';
import ResourcePostHeader from '../../../components/ResourcePostHeader';

import { getAllPostIds, getPostData } from '../../../lib/finance_books'

export default function FinanceBook({ postData }) {
  return (
    <>
      <HeadTag pageTitle={`JIANA - ${postData.title}`}/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <ResourcePostHeader title={postData.title} date={postData.date} readTime={postData.readTime} subtitle={postData.subtitle}/>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
          </div>
        </div>
      </div>
      <SubscribeSection/>
      <Footer/>
    </>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

