import { Layout, Post, LoginForContentButton } from '../../components';
import { journalEntries, sortPosts } from "../../lib/getAllPosts";
import netlifyIdentity from 'netlify-identity-widget';
import { useEffect, useState } from 'react'

export default function Journal() {
  const [user, setUser] = useState(netlifyIdentity.currentUser());

  useEffect(() => {
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.on('init', user => console.log('init', user));
    netlifyIdentity.init();
    setUser(netlifyIdentity.currentUser());
  }, [])

  const loggedIn = user !== null;

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
