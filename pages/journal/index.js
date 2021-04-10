import HeadTag from '../../components/HeadTag';
import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';
import DynamicList from '../../components/DynamicList';

import PopularPostsSection from '../../components/PopularPostsSection';
import { useRouter } from 'next/router'

import { getSortedPostsData } from '../../lib/dynamic_posts_helper.js';

const postsDir = 'data/journal_entries'

export default function Journal({allPostsData}) {
  const router = useRouter()
  const { page } = router.query

  let currPage = page ? parseInt(page) - 1 : 0

  return (
    <div>
      <HeadTag pageTitle="Jiana's Cool Tools"/>
      <Header activePage='journal'/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <DynamicList page={currPage} path='journal' posts={allPostsData}/>
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(postsDir)
  return {
    props: {
      allPostsData
    }
  }
}
