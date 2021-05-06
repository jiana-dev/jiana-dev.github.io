import { Layout, Post, LoginForContentButton } from '../../components';
import { journalEntries, sortPosts } from "../../lib/getAllPosts";
import { useEffect, useState, useContext } from 'react'
import AuthContext from '../../lib/authContext';

export default function Journal(props) {
  const [user, setUser] = useContext(AuthContext);

  let loggedIn = user !== null

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
