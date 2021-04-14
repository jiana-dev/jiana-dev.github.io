import { Layout, Post } from '../../components';
import { secretBlogPosts } from "../../lib/getAllPosts";

export default function Blog() {
  let pageContent = secretBlogPosts.map((post, index) => (
    <Post post={post} key={index} folder='secret_blog'/>
  ))

  return (
    <Layout pageTitle='she writes really personal stuff sometimes' children={pageContent}/>
  )
}
