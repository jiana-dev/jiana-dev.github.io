import netlifyAuth from '../../lib/netlifyAuth';
import { Layout, Post, LoginForContentButton } from '../../components';
import { secretBlogPosts } from "../../lib/getAllPosts";

export default function SecretBlog() {
  const loggedIn = netlifyAuth.isAuthenticated

  let pageContent =
  <>
    <p className='small'>hi, this is where it kinda gets really personal. i felt it might be too much to share with the whole world but i do think it was an important lesson and one that maybe someone else could benefit from, so this was my compromise. i would much rather it stay within the confines and safety of people who are truly my friends, which i'm assuming you are since you're here. so anyways, welcome to the deep stuff. please share with me if you're here and you related in any way. it would really make my day.</p>
    {secretBlogPosts.map((post, index) => (
      <Post disable loggedIn={loggedIn} post={post} key={index} folder='secret_blog'/>
    ))}
  </>

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
    <Layout pageTitle='she writes really personal stuff sometimes' children={authContent}/>
  )
}
