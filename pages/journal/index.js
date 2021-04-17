import { Layout, Post, LoginForContentButton } from '../../components';
import { journalEntries, sortPosts } from "../../lib/getAllPosts";
import { useEffect, useState } from 'react'
import netlifyIdentity from 'netlify-identity-widget';

export default function Journal() {
  let [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(netlifyIdentity.currentUser() !== null)
  }, [])

  let pageContent = sortPosts(journalEntries).map((post, index) => (
    <Post disable loggedIn={loggedIn} post={post} key={index} folder='journal'/>
  ))

  let authContent = loggedIn ? (
    <div className="row" style={{ height: 'calc(50vh)'}}>
      {pageContent}
    </div>
  ) : (
    <div className="row" style={{ height: 'calc(50vh)'}}>
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
