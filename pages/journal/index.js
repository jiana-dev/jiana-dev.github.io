import { Layout, Post, LoginForContentButton } from '../../components';
import { journalEntries, sortPosts } from "../../lib/getAllPosts";
import netlifyAuth from '../../lib/netlifyAuth';

export default function Journal() {
  const loggedIn = netlifyAuth.isAuthenticated

  let pageContent = sortPosts(journalEntries).map((post, index) => (
    <Post disable loggedIn={loggedIn} post={post} key={index} folder='journal'/>
  ))

  let authContent = loggedIn ? (
    <div className="row">
      {pageContent}
    </div>
  ) : (
    <div className="row">
      <div className='authContent'>
        {!loggedIn ? <p><em>if you're reading this... I SEE YOU! stop being sneaky and just make an account... promise i don't bite</em></p> : ''}
        {pageContent}
      </div>
      <LoginForContentButton/>
    </div>
  )

  return (
    <Layout pageTitle='she writes personal stuff sometimes' children={authContent}/>
  )
}
