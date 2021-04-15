import { Layout, Post, LoginForContentButton } from '../../components';
import { journalEntries, sortPosts } from "../../lib/getAllPosts";
import netlifyAuth from '../../lib/netlifyAuth';

export default function Journal() {
  let pageContent = sortPosts(journalEntries).map((post, index) => (
    <Post disable post={post} key={index} folder='journal'/>
  ))

  let authContent = netlifyAuth.isAuthenticated ? (
    <div className="row">
      {pageContent}
    </div>
  ) : (
    <div className="row">
      <div className='authContent'>
        {pageContent}
      </div>
      <LoginForContentButton/>
    </div>
  )

  return (
    <Layout pageTitle='she writes personal stuff sometimes' children={authContent}/>
  )
}
