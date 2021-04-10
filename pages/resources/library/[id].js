import HeadTag from '../../../components/HeadTag';
import Header from '../../../components/Header';
import SubscribeSection from '../../../components/Subscribe';
import Loader from '../../../components/Loader';
import Footer from '../../../components/Footer';
import ResourcePostHeader from '../../../components/ResourcePostHeader';

import { getAllPostIds, getPostData } from '../../../lib/books'

export default function Book({ postData }) {
  return (
    <>
      <HeadTag pageTitle={`JIANA - ${postData.title}`}/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <ResourcePostHeader title={postData.title} date={postData.date} author={postData.author}/>
            <div className='post-data' dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
            <style jsx>{`
            .post-data {
              margin-bottom: 5em;
            }
            `}</style>
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

