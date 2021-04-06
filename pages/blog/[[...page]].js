import HeadTag from '../../components/HeadTag';
import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogList from '../../components/BlogList';
import PopularPostsSection from '../../components/PopularPostsSection';
import { useRouter } from 'next/router'

export default function Blog() {
  const router = useRouter()
  const { page } = router.query

  let currPage = page ? parseInt(page) - 1 : 0

  return (
    <>
      <HeadTag pageTitle="JIANA - Blog"/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <BlogList page={currPage}/>
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
