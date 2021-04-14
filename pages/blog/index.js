import { Layout, Post } from '../../components';
import { posts } from "../../lib/getAllPosts";

export default function Blog() {
  let pageContent = posts.map((post, index) => (
    <Post post={post} key={index} folder='blog'/>
  ))

  return (
    <Layout pageTitle='she writes sometimes' activePage='blog' children={pageContent}/>
  )
}
