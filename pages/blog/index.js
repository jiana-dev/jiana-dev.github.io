import { Layout, Post } from '../../components';
import { posts, sortPosts } from "../../lib/getAllPosts";

export default function Blog() {
  let pageContent = sortPosts(posts).map((post, index) => (
    <Post post={post} key={index} folder='blog'/>
  ))

  return (
    <Layout pageTitle='she writes sometimes' activePage='blog' children={pageContent}/>
  )
}
