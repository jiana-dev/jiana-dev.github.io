import HeadTag from '../../components/HeadTag';
import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogList from '../../components/BlogList';
import PopularPostsSection from '../../components/PopularPostsSection';
import { useRouter } from 'next/router'

import secret_blogs from '../../data/secret_blogs.json';

export default function SecretBlog() {
  const router = useRouter()
  const { page } = router.query

  let currPage = page ? parseInt(page) - 1 : 0

  return (
    <>
      <HeadTag pageTitle="JIANA - Secret Blog"/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <BlogList routeName='secret_blogs' page={currPage} posts={secret_blogs.posts} folder={secret_blogs.folder}/>
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
